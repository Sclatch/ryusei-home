"use client";

import { FaGithub, FaServer } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="snap-start relative flex min-h-screen items-center bg-stone-200 overflow-hidden">
      
      {/* Background diagonal lines */}
      <div
        className="absolute bottom-0 right-0 w-2/3 aspect-square"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            #a8a29e 0px,
            #a8a29e 2px,
            transparent 2px,
            transparent 28px
          )`,
          clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
          WebkitMaskImage: "linear-gradient(135deg, transparent 40%, black 80%)",
          maskImage: "linear-gradient(135deg, transparent 40%, black 80%)",
          opacity: 0.5,
        }}
      />
      
      <div className="flex flex-col sm:pl-32 pl-12">
  
        {/* Eyebrow label */}
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
          @sclatch
        </span>

        {/* Heading */}
        <h1 className="font-bodoni-moda sm:text-8xl text-6xl font-bold text-stone-900">
          Ryusei
        </h1>

        {/* Divider accent */}
        <div className="mt-5 mb-6 h-px w-12 bg-stone-400" />

        {/* Subtitle */}
        <p className="font-neuton sm:text-xl text-m text-stone-500">
          Self-hosted. Self-made. <b>Personal Homelab</b>.<br />
          Projects, services, and the occasional tinkering.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-row items-center gap-4">
          <a 
          href="#services"
          className="flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-stone-100 transition hover:bg-stone-700"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
          }}
          >
            <FaServer size={13} />
            Services
          </a>
          
          <a
            href="https://github.com/sclatch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-stone-500 transition hover:text-stone-900"
          >
            <FaGithub size={16} />
            GitHub
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
