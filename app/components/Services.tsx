import Image from "next/image";

import { MdMovie, MdDownload } from "react-icons/md";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden snap-start flex flex-col min-h-screen bg-stone-200">

      {/* Background diagonal lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cline x1='20' y1='12' x2='20' y2='28' stroke='%23a8a29e' stroke-width='1.5'/%3E%3Cline x1='12' y1='20' x2='28' y2='20' stroke='%23a8a29e' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
          opacity: 0.6,
          WebkitMaskImage: "linear-gradient(to bottom, transparent 70%, black 100%)",
          maskImage: "linear-gradient(to bottom, transparent 70%, black 100%)",
          animation: "scrollPatternDown 2s linear infinite",
        }}
      />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:mt-24 mt-12 sm:px-32 px-12">

        {/* Eyebrow */}
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
          Services
        </span>

        <div className="flex flex-col sm:gap-6 gap-4">

          {/* Cinezumi card */}
          <div className="relative overflow-hidden flex flex-col sm:gap-6 gap-4 rounded-2xl bg-stone-200 bg-opacity-50 border border-stone-400 p-8">

            {/* Background image */}
            <Image
              src="/images/cinezumiicon.png"
              alt="Cinezumi Icon"
              style={{ filter: "brightness(0) saturate(100%) invert(9%) sepia(7%) saturate(548%) hue-rotate(314deg) brightness(94%)" }}
              height={0}
              width={0}
              sizes="100vw"
              className="absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 top-0 -translate-y-1/4 right-1/2 translate-x-1/2 w-80 h-auto object-contain opacity-10 z-0 pointer-events-none select-none"
            />

            {/* Top row — logo + button */}
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <Image
                src="/images/cinezumifull.png"
                alt="Cinezumi"
                style={{ filter: "brightness(0) saturate(100%) invert(9%) sepia(7%) saturate(548%) hue-rotate(314deg) brightness(94%)" }}
                height={0}
                width={0}
                sizes="100vw"
                className="w-48 h-auto object-contain"
              />
              <a
                href="https://ryusei.dedyn.io/cinema"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-stone-900 sm:mt-0 mt-4 px-6 py-2.5 text-stone-100 sm:text-base text-sm z-10 transition hover:bg-stone-700 active:scale-95"
              >
                <MdMovie className="text-lg" />
                Open Cinezumi
              </a>
            </div>

            <div className="h-px w-full bg-stone-300" />

            {/* Description */}
            <p className="font-neuton text-base text-stone-500 leading-relaxed max-w-xl">
              A private movie and TV streaming platform using <b>Jellyfin</b>, deployed and managed entirely by me. Accessible from anywhere and shared with close friends and family, it delivers a seamless, ad-free experience with high-bitrate playback for my personal media collection.
            </p>

          </div>

          {/* Ryuusei card */}
          <div className="relative overflow-hidden flex flex-col sm:gap-6 gap-4 rounded-2xl bg-stone-200 bg-opacity-50 border border-stone-400 p-8">

            {/* Background image */}
            <Image
              src="/images/ryuuseiicon.png"
              alt="Ryuusei Icon"
              style={{ filter: "brightness(0) saturate(100%) invert(9%) sepia(7%) saturate(548%) hue-rotate(314deg) brightness(94%)" }}
              height={0}
              width={0}
              sizes="100vw"
              className="absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 sm:translate-x-0 top-0 -translate-y-1/4 right-1/2 translate-x-1/2 w-64 h-auto object-contain opacity-10 z-0 pointer-events-none select-none"
            />

            {/* Top row — logo + button */}
            <div className="flex sm:flex-row flex-col items-center justify-between">
              <Image
                src="/images/ryuuseilogo.png"
                alt="Ryuusei"
                style={{ filter: "brightness(0) saturate(100%) invert(9%) sepia(7%) saturate(548%) hue-rotate(314deg) brightness(94%)" }}
                height={0}
                width={0}
                sizes="100vw"
                className="w-48 h-auto object-contain"
              />
              <a
                href="https://github.com/Sclatch/RYUUSEI-Pad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-stone-900 sm:mt-0 mt-4 px-6 py-2.5 text-stone-100 sm:text-base text-sm z-10 transition hover:bg-stone-700 active:scale-95"
              >
                <MdDownload className="text-lg" />
                Get Ryuusei
              </a>
            </div>

            <div className="h-px w-full bg-stone-300" />

            {/* Description */}
            <p className="font-neuton text-base text-stone-500 leading-relaxed max-w-xl">
              A custom <b>AutoHotkey</b> macro system designed to streamline my workflow in <b>Clip Studio Paint</b>. Essential tools are mapped to the numpad for instant access that supports multi-key combinations. Built through personal experience and continuous refinement, it cuts time spent navigating menus and transforms everyday shortcuts into a faster, smoother illustration experience.
            </p>

          </div>
        </div>
      </div>
        
    </section>
  );
}