# ============================================
# Base: shared toolchain (built once, reused by later stages)
# ============================================

# Keep NODE_VERSION up to date with the latest Node LTS for security fixes.
ARG NODE_VERSION=24.13.0-slim

FROM node:${NODE_VERSION} AS base

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

# libatomic1 is needed by Node binaries downloaded by pnpm (slim image lacks it).
RUN apt-get update \
 && apt-get install -y --no-install-recommends libatomic1 \
 && rm -rf /var/lib/apt/lists/* \
 && corepack enable pnpm

# ============================================
# Stage 1: Install dependencies
# ============================================

FROM base AS deps

# Only manifest files, so this layer is reused until dependencies change
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml* .npmrc* ./

RUN --mount=type=cache,id=pnpm-store,target=/pnpm/store \
    pnpm install --frozen-lockfile --store-dir /pnpm/store

# ============================================
# Stage 2: Build Next.js (standalone output)
# ============================================

# Builds on top of deps: node_modules and pnpm are already in place
FROM deps AS builder

ENV NODE_ENV=production

COPY . .

RUN pnpm build

# ============================================
# Stage 3: Minimal runtime image
# ============================================

FROM node:${NODE_VERSION} AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

# --chown on COPY makes .next writable for the prerender/image cache,
# so no separate mkdir/chown layers are needed.
COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

USER node

EXPOSE 3000

CMD ["node", "server.js"]