export default function ScrollingTexts() {
  return (
    <div className="absolute z-0 pointer-events-none select-none overflow-hidden w-full h-full">
        <div
            className="absolute bottom-0 right-0 flex flex-col mb-4 sm:gap-4 gap-0 translate-x-1/2 origin-bottom -rotate-10"
        >
            {[
            "ようこそ · Welcome · 欢迎 · Bienvenue · Willkommen · ",
            "Willkommen · Bienvenue · ようこそ · 欢迎 · Welcome · ",
            "欢迎 · Willkommen · Welcome · Bienvenue · ようこそ · ",
            "Bienvenue · ようこそ · Willkommen · Welcome · 欢迎 · ",
            "Welcome · 欢迎 · ようこそ · Willkommen · Bienvenue · ",
            ].map((text, i) => (
            <div
                key={i}
                className="flex whitespace-nowrap sm:text-6xl text-xl font-lubrifont text-stone-400 opacity-25"
                style={{
                animation: `${i % 2 === 0 ? "scrollLeft" : "scrollRight"} 10s linear infinite`,
                }}
            >
                {Array.from({ length: 4 }).map((_, j) => (
                <span key={j} className="">{text}</span>
                ))}
            </div>
            ))}
        </div>
    </div>
  )}