"use client"

const items = ["GENERAZIONE", "REMIGRAZIONE", "IDENTITÀ", "CONTINUITÀ", "FUTURO", "EUROPA"]

function Row({ reverse = false, stroke = false }: { reverse?: boolean; stroke?: boolean }) {
  // Duplicate content so the 50% translate loops seamlessly
  const content = [...items, ...items, ...items, ...items]
  return (
    <div className="flex overflow-hidden select-none" aria-hidden>
      <div
        className={`flex shrink-0 items-center gap-10 pr-10 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee-fast"
        }`}
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-10">
            {content.map((text, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10 shrink-0">
                <span
                  className={`text-3xl sm:text-5xl font-black uppercase tracking-tight whitespace-nowrap ${
                    stroke ? "text-stroke-green" : "text-foreground/90"
                  }`}
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {text}
                </span>
                <span className="text-primary text-2xl sm:text-3xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function MarqueeBand() {
  return (
    <section className="relative py-10 overflow-hidden border-t border-primary/10 bg-[#050805]">
      <div className="space-y-4 -rotate-1 scale-105">
        <Row />
        <Row reverse stroke />
      </div>
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050805] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050805] to-transparent pointer-events-none" />
    </section>
  )
}
