export default function ScrollingTexts() {
  return (
    <div className="absolute z-0 pointer-events-none select-none overflow-hidden w-full h-full">
        <div
            className="absolute top-0 left-0 flex flex-col mb-4 sm:gap-4 gap-0 sm:-translate-x-7/12 -translate-x-1/2 origin-top -rotate-5 bg-stone-300 py-8"
        >
            {[
            "ようこそ · Welcome · 欢迎 · Bienvenue · Willkommen · ",
            "Willkommen · Bienvenue · ようこそ · 欢迎 · Welcome · ",
            "欢迎 · Willkommen · Welcome · Bienvenue · ようこそ · ",
            ].map((text, i) => (
            <div
                key={i}
                className="flex whitespace-nowrap text-6xl font-lubrifont text-stone-400 opacity-50"
                style={{
                animation: `${i % 2 === 0 ? "scrollLeft" : "scrollRight"} 30s linear infinite`,
                }}
            >
                {Array.from({ length: 6 }).map((_, j) => (
                <span key={j} className="">{text}</span>
                ))}
            </div>
            ))}
        </div>

        <div
            className="absolute bottom-0 left-0 flex flex-col mb-4 sm:gap-4 gap-0 sm:-translate-x-1/8 -translate-x-2/8 origin-bottom -rotate-5 bg-stone-300 py-8"
        >
            {[
            "ようこそ · Welcome · 欢迎 · Bienvenue · Willkommen · ",
            "Willkommen · Bienvenue · ようこそ · 欢迎 · Welcome · ",
            "欢迎 · Willkommen · Welcome · Bienvenue · ようこそ · ",
            "Bienvenue · ようこそ · Willkommen · Welcome · 欢迎 · ",
            ].map((text, i) => (
            <div
                key={i}
                className="flex whitespace-nowrap text-6xl font-lubrifont text-stone-400 opacity-50"
                style={{
                animation: `${i % 2 === 0 ? "scrollLeft" : "scrollRight"} 30s linear infinite`,
                }}
            >
                {Array.from({ length: 6 }).map((_, j) => (
                <span key={j} className="">{text}</span>
                ))}
            </div>
            ))}
        </div>
    </div>
  )}