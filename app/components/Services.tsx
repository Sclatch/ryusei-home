import ServiceCards from "./ServiceCards"

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden snap-start flex flex-col min-h-screen bg-stone-200">

      {/* Background plus pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cline x1='20' y1='12' x2='20' y2='28' stroke='%23a8a29e' stroke-width='1.5'/%3E%3Cline x1='12' y1='20' x2='28' y2='20' stroke='%23a8a29e' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "40px 40px",
          backgroundAttachment: "fixed",
          opacity: 0.6,
          animation: "scrollPatternDown 2s linear infinite",
        }}/>

      {/* Background gradient overlay */}
      <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: "linear-gradient(to bottom, #e7e5e4 70%, transparent 100%)",
        backgroundSize: "100% 100%",
        backgroundAttachment: "fixed",
      }}/>

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:my-24 my-12 sm:px-32 px-12">

        {/* Eyebrow */}
        <span className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-stone-400">
          Services
        </span>

        <div className="flex flex-col sm:gap-6 gap-4">

          <ServiceCards />
          
        </div>
      </div>
        
    </section>
  )
}