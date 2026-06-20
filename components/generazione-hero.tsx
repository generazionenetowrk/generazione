"use client"

import { useState, useCallback, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { GenerazioneLogo } from "@/components/generazione-logo"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const },
  },
}

const VSL_VIDEO_SRC: string | null = null
const VSL_POSTER_SRC: string | undefined = undefined

const particles = [
  { left: "8%", duration: 14, delay: 0 },
  { left: "22%", duration: 18, delay: 3 },
  { left: "35%", duration: 12, delay: 6 },
  { left: "48%", duration: 20, delay: 1 },
  { left: "61%", duration: 15, delay: 8 },
  { left: "74%", duration: 17, delay: 4 },
  { left: "87%", duration: 13, delay: 10 },
  { left: "94%", duration: 19, delay: 2 },
]

export function GenerazioneHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, 120])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <section
      ref={sectionRef}
      className="noise relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-24 overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div style={{ y: auroraY }} className="absolute inset-0 pointer-events-none">
        <div className="aurora-blob aurora-1 top-[-10%] left-[10%]" />
        <div className="aurora-blob aurora-2 top-[30%] right-[5%]" />
        <div className="aurora-blob aurora-3 bottom-[5%] left-[30%]" />
      </motion.div>

      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        {particles.map((p, i) => (
          <span
            key={i}
            className="particle"
            style={{ left: p.left, animationDuration: `${p.duration}s`, animationDelay: `${p.delay}s` }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, oklch(0.60 0.19 142 / 0.10), transparent 60%)`,
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center w-full"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Main title — large logo */}
        <motion.div variants={fadeUp} className="mb-8 px-4">
          <GenerazioneLogo className="w-full max-w-3xl mx-auto h-auto" />
        </motion.div>

        {/* Subtitle — former headline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-foreground/70 mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Ultimi che possono ricordare. Primi che possono ricostruire.
        </motion.p>

        {/* Sub-headline */}
        <motion.p
          variants={fadeUp}
          className="text-base text-foreground/45 mb-12 max-w-xl mx-auto leading-relaxed"
        >
          Il primo network di giovani{" "}
          <strong className="text-foreground/65 font-semibold">per giovani</strong>{" "}
          che costruiscono il{" "}
          <strong className="text-primary font-semibold">futuro</strong>
        </motion.p>

        {/* VSL frame */}
        <motion.div id="manifesto" variants={fadeUp} className="w-full max-w-4xl mx-auto mb-12">
          <div className="gradient-border vsl-neon glass relative aspect-video rounded-3xl flex items-center justify-center overflow-hidden group cursor-pointer transition-transform duration-500 hover:scale-[1.015]">
            {VSL_VIDEO_SRC ? (
              <video
                src={VSL_VIDEO_SRC}
                poster={VSL_POSTER_SRC}
                controls
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.04] transition-colors duration-500" />
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-primary/60 rounded-tl-sm group-hover:border-primary transition-colors duration-300" />
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary/60 rounded-tr-sm group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary/60 rounded-bl-sm group-hover:border-primary transition-colors duration-300" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-primary/60 rounded-br-sm group-hover:border-primary transition-colors duration-300" />
                <div className="relative z-10 text-center">
                  <div className="glass-strong w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/15 group-hover:shadow-[0_0_35px_oklch(0.55_0.185_142_/_0.45)] group-hover:scale-110 transition-all duration-300">
                    <div className="w-0 h-0 border-t-[11px] border-t-transparent border-b-[11px] border-b-transparent border-l-[20px] border-l-primary ml-1.5" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/80 group-hover:text-primary transition-colors duration-300">
                    Guarda il Manifesto
                  </span>
                </div>
              </>
            )}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp}>
          <a
            href="#apply"
            className="shimmer relative inline-block px-14 py-4 rounded-full bg-primary text-white font-black text-base uppercase tracking-widest overflow-hidden hover:bg-primary/90 transition-all duration-300 shadow-[0_0_45px_oklch(0.55_0.185_142_/_0.40)] hover:shadow-[0_0_70px_oklch(0.55_0.185_142_/_0.60)] hover:-translate-y-0.5 active:scale-95"
          >
            Unisciti oggi
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div variants={fadeUp} className="mt-16 flex justify-center" aria-hidden>
          <div className="animate-float-slow w-6 h-10 rounded-full border border-primary/30 flex items-start justify-center p-1.5">
            <motion.span
              className="w-1 h-2 rounded-full bg-primary/70"
              animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
