import { IoMdHeart } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export default function Footnote() {
  return (
    <section id="footnote" className="relative snap-end overflow-hidden flex flex-col justify-between bg-stone-900 sm:px-32 px-12 py-12">

      {/* Main quote */}
      <div className="flex flex-col gap-3">
        <div className="h-px w-12 bg-stone-700" />
        <p className="font-bodoni-moda sm:text-4xl text-2xl font-bold text-stone-100 leading-snug max-w-lg">
          Be kind unto others,<br />and to yourself.
        </p>
      </div>

      {/* Bottom row */}
      <div className="flex sm:flex-row flex-col sm:items-end justify-between gap-4 mt-12">
        
        {/* Credit */}
        <p className="text-stone-500 sm:text-sm text-xs leading-relaxed">
          Crafted with <IoMdHeart className="inline-block relative bottom-[1px] text-base transition hover:text-stone-200 hover:animate-pulse" /> by Sclatch, 2026.<br />
          Built with Next.js and Tailwind CSS.
        </p>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sclatch"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-300 transition"
          >
            <FaGithub size={14} />
            GitHub
          </a>
          <div className="h-3 w-px bg-stone-700" />
          <p className="text-xs text-stone-500 uppercase tracking-widest">
            @sclatch
          </p>
        </div>

      </div>

    </section>
  );
}