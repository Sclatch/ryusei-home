export default function About() {
  return (
    <section className="relative overflow-hidden snap-start flex flex-col min-h-screen bg-stone-300">

      {/* Square grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #a8a29e 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #a8a29e 1.5px, transparent 1.5px)
          `,
          backgroundSize: "50px 50px",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, transparent 30%, transparent 70%, black 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 30%, transparent 70%, black 100%)",
          opacity: 0.3,
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:mt-32 mt-16 sm:pl-32 pl-12">
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
          About
        </span>
        <h2 className="font-bodoni-moda sm:text-6xl text-4xl font-bold text-stone-900 leading-none">
          Nezumi no Ryusei
        </h2>
        <span className="tracking-[1em] text-stone-400">
          ネズミのリュ星
        </span>
        <div className="mt-5 h-px w-12 bg-stone-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex-row gap-12 sm:px-32 px-12 mt-16 mb-16">

        {/* Behind the Name */}
        <div className="flex flex-col sm:w-1/2">
          <span className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
            Behind the Name
          </span>
          <div className="mb-5 h-px w-full bg-stone-400 opacity-40" />
          <p className="font-neuton text-lg text-stone-600 leading-relaxed">
            <em>Nezumi no Ryusei</em> combines two Japanese words: <strong>Nezumi</strong>「ネズミ」meaning "rat" or "mouse," and <strong>Ryusei</strong>「リュ星」.
            The "Ryu" is intentionally open to interpretation, carrying layered meanings that describe the nature of the "star"「星」.
          </p>
        </div>

        {/* Two cards */}
        <div className="flex flex-col gap-6 sm:w-1/2 sm:mb-0 mb-12">

          <div className="rounded-2xl bg-stone-200 bg-opacity-60 p-6 border border-stone-300">
            <span className="text-xs uppercase tracking-widest text-stone-400">ネズミ — Nezumi</span>
            <p className="mt-2 font-neuton text-lg text-stone-700 leading-relaxed">
              The nickname for the mini PC running all my services (including this website) from beneath my bed. Hence the playful reference to a rat quietly operating beneath the bed.
            </p>
          </div>

          <div className="rounded-2xl bg-stone-200 bg-opacity-60 p-6 border border-stone-300">
            <span className="text-xs uppercase tracking-widest text-stone-400">リュ星 — Ryusei</span>
            <p className="mt-2 font-neuton text-lg text-stone-700 leading-relaxed">
              「流」Ryū (“flow”) — A symbol of the constant stream of data moving through my homelab, like a shooting star that leaves a luminous trail across the night sky.<br />
              「龍」Ryū (“dragon”) — A nod to my favourite monster Valstrax from Monster Hunter, a dragon that blazes across the sky like a crimson shooting star.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}