"use client";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function About() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      label: "Behind the Name",
      content: (
        <div className="flex flex-col sm:flex-row gap-12 w-full">
          <div className="flex flex-col sm:w-1/2">
            <p className="font-neuton text-lg text-stone-600 leading-relaxed">
              <em>Nezumi no Ryusei</em> combines two Japanese words: <strong>Nezumi</strong>「ネズミ」meaning "rat" or "mouse," and <strong>Ryusei</strong>「リュ星」. The "Ryu" is intentionally open to interpretation, carrying layered meanings that describe the nature of the "star"「星」.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:w-1/2">
            <div className="rounded-2xl bg-stone-200 bg-opacity-60 pt-4 p-6 border border-stone-300">
              <span className="text-xs uppercase tracking-widest text-stone-400">ネズミ — Nezumi</span>
              <p className="mt-2 font-neuton text-base text-stone-700 leading-relaxed">
                The nickname for the mini PC running all my services (including this website) from beneath my bed. Hence the playful reference to a rat quietly operating beneath the bed.
              </p>
            </div>
            <div className="rounded-2xl bg-stone-200 bg-opacity-60 pt-4 p-6 border border-stone-300">
              <span className="text-xs uppercase tracking-widest text-stone-400">リュ星 — Ryusei</span>
              <p className="mt-2 font-neuton text-base text-stone-700 leading-relaxed">
                「流」Ryū (“flow”) — A symbol of the constant stream of data moving through my homelab, like a shooting star that leaves a luminous trail across the night sky.<br />
                「龍」Ryū (“dragon”) — A nod to my favourite monster Valstrax from Monster Hunter, a dragon that blazes across the sky like a crimson shooting star.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Hardware",
      content: (
        <div className="flex flex-col sm:flex-row items-center gap-12 w-full">

          {/* Image side */}
          <div className="flex flex-col items-center gap-4 sm:w-1/3">
            <Image
              src="/images/minipc.png"
              alt="Mini PC Graphic"
              style={{ filter: "invert(28%) sepia(8%) saturate(400%) hue-rotate(10deg) brightness(85%)" }}
              height={0}
              width={0}
              sizes="100vw"
              className="h-48 w-auto drop-shadow-md"
            />
            <span className="text-xs uppercase tracking-widest text-stone-400">Nezumi — ネズミ</span>
          </div>

          {/* Text side */}
          <div className="flex flex-col sm:w-2/3 gap-4">
            <h3 className="font-bodoni-moda text-3xl font-bold text-stone-900">
              Mouse Powerhouse
            </h3>
            <div className="h-px w-12 bg-stone-400" />

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "CPU", value: "Intel N100 12th Gen" },
                { label: "RAM", value: "24GB (zram enabled)" },
                { label: "Storage", value: "512GB NVMe + 1TB SATA" },
                { label: "TDP", value: "6W (Idle) / 30W (Max)" },
              ].map((spec) => (
                <div key={spec.label} className="rounded-xl bg-stone-200 bg-opacity-60 border border-stone-300 px-4 py-3">
                  <span className="text-xs uppercase tracking-widest text-stone-400">{spec.label}</span>
                  <p className="mt-1 font-neuton text-base text-stone-700">{spec.value}</p>
                </div>
              ))}
            </div>

            <p className="font-neuton text-lg text-stone-600 leading-relaxed">
              Discreetly tucked beneath my bed, running 24/7 and powering my homelab and this website with minimal noise and maximum efficiency.
            </p>
          </div>

        </div>
      ),
    },
    {
      label: "Goal & Purpose",
      content: (
        <div className="flex flex-col justify-end sm:flex-row gap-12 w-full">
          <div className="flex flex-col sm:w-1/2">
            <p className="font-neuton text-right text-lg text-stone-600 leading-relaxed">
              I built this homelab to learn, experiment, grow, and to help my friends along the way. It's a reliable, power efficient playground where I run real services, test new ideas, and share what I learn about self-hosting and server management.
            </p>
          </div>
        </div>
      ),
    },
  ];

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
      <div className="relative z-10 flex flex-col sm:mt-24 mt-12 sm:px-32 px-12">
        <span className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
          About
        </span>
        <h2 className="font-bodoni-moda sm:text-6xl text-4xl font-bold text-stone-900 leading-none">
          Nezumi no Ryusei
        </h2>
        <span className="mt-2 tracking-[1em] text-sm text-stone-400">
          ネズミのリュ星
        </span>
        <div className="mt-5 h-px w-12 bg-stone-400" />
      </div>

      {/* Carousel */}
      <div className="relative z-10 flex sm:px-16 px-4 mt-10 flex-1">

        {/* Left chevron */}
        <button
          onClick={() => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1))}
          className="self-center rounded-full p-3 border border-stone-400 text-stone-500 hover:bg-stone-400 hover:text-stone-100 transition active:scale-95"
        >
          <FaChevronLeft size={14} />
        </button>

        {/* Slide */}
        <div className="flex-1 sm:px-8 px-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
              {slides[current].label}
            </span>
            <span className="text-xs text-stone-400">{current + 1} / {slides.length}</span>
          </div>
          <div className="h-px w-full bg-stone-400 opacity-40 mb-6" />
          {slides[current].content}
        </div>

        {/* Right chevron */}
        <button
          onClick={() => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1))}
          className="self-center rounded-full p-3 border border-stone-400 text-stone-500 hover:bg-stone-400 hover:text-stone-100 transition active:scale-95"
        >
          <FaChevronRight size={14} />
        </button>

      </div>

      {/* Dots - bottom center */}
      <div className="relative z-10 flex pt-8 justify-center gap-2 mb-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === current ? "w-6 bg-stone-600" : "w-1.5 bg-stone-400"
            }`}
          />
        ))}
      </div>

    </section>
  );
}