"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import Script from "next/script"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

const WISTIA_MEDIA_ID = "3gra1nt1l5"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        "media-id"?: string
        aspect?: string | number
      }
    }
  }
}

const particles = [
  { left: "8%", duration: 14, delay: 0 },
  { left: "22%", duration: 18, delay: 3 },
  { left: "35%", duration: 12, delay: 6 },
  { left: "48%", duration: 20, delay: 1 },
  { left: "61%", duration: 15, delay: 8 },
  { left: "74%", duration: 17, delay: 4 },
  { left: "87%", duration: 13, delay: 10 },
]

const marqueeItems = ["Riconquista", "Attivismo Metapolitico", "Identità", "Futuro", "GID"]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
}

/* ─── Navbar ─── */
function GIDNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4"
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left shadow-[0_0_8px_oklch(0.60_0.19_142_/_0.6)]"
        style={{ scaleX: progress }}
      />

      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? "glass-strong max-w-3xl mt-3 rounded-2xl"
            : "max-w-6xl mt-0 rounded-none bg-transparent"
        }`}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a
              href="/"
              className="flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              GenerΛzione
            </a>

            <span
              className="text-lg font-black uppercase tracking-widest text-foreground"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              GID
            </span>

            <a
              href="#gid-form"
              className="glass-green text-primary px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_25px_oklch(0.55_0.185_142_/_0.45)]"
            >
              Unisciti
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

/* ─── Hero ─── */
function GIDHero() {
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
      className="noise relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
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
        className="relative z-10 max-w-5xl mx-auto text-center"
        style={{ y: contentY, opacity: contentOpacity }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <span className="glass-green inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-primary rounded-full px-5 py-2">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-primary" />
            </span>
            01 · GID
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-black uppercase tracking-tight leading-[0.88] mb-6"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "clamp(3.5rem, 11vw, 9.5rem)",
          }}
        >
          <span className="block text-foreground">GIOVANI</span>
          <span className="block text-gradient-green">IDENTITARI</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-xl sm:text-2xl italic text-primary/80 mb-5 tracking-wide"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Riconquista il Futuro
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-foreground/65 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          L'avanguardia giovanile che si adopera in prima linea per la Riconquista.
        </motion.p>

        <motion.div variants={fadeUp}>
          <a
            href="#gid-vsl"
            className="inline-flex items-center gap-2 px-10 py-3.5 rounded-full border border-primary/40 text-primary text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 hover:shadow-[0_0_35px_oklch(0.55_0.185_142_/_0.40)]"
          >
            Scopri di più
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>

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

/* ─── Identity + VSL ─── */
function GIDIdentity() {
  return (
    <section id="gid-vsl" className="relative px-4 sm:px-6 lg:px-8 py-28 overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.55 0.185 142 / 0.07), transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            Chi siamo
          </span>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-2xl sm:text-3xl font-bold italic text-foreground/90 mb-6 leading-snug"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          "GID è un'organizzazione giovanile politica, identitaria e comunitaria."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-foreground/55 max-w-xl mx-auto leading-relaxed mb-16"
        >
          Attraverso l'attivismo metapolitico e la formazione individuale, costruiamo una
          mobilitazione per la Riconquista del Futuro.
        </motion.p>

        {/* VSL frame — Wistia embed */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <Script src="https://fast.wistia.com/player.js" strategy="lazyOnload" />
          <Script
            src={`https://fast.wistia.com/embed/${WISTIA_MEDIA_ID}.js`}
            strategy="lazyOnload"
            type="module"
          />
          <style>{`
            wistia-player[media-id='${WISTIA_MEDIA_ID}']:not(:defined) {
              background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${WISTIA_MEDIA_ID}/swatch');
              display: block;
              filter: blur(5px);
              padding-top: 56.25%;
            }
          `}</style>
          <div className="gradient-border vsl-neon relative rounded-3xl overflow-hidden">
            <wistia-player media-id={WISTIA_MEDIA_ID} aspect="1.7777777777777777" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Marquee ─── */
function MarqueeRow({ reverse = false, stroke = false }: { reverse?: boolean; stroke?: boolean }) {
  const content = [
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
    ...marqueeItems,
  ]
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

function GIDMarquee() {
  return (
    <section className="relative py-10 overflow-hidden border-t border-primary/10 bg-[#050805]">
      <div className="space-y-4 -rotate-1 scale-105">
        <MarqueeRow />
        <MarqueeRow reverse stroke />
      </div>
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#050805] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#050805] to-transparent pointer-events-none" />
    </section>
  )
}

/* ─── Form adesione ─── */
function GIDForm() {
  return (
    <section id="gid-form" className="relative px-4 sm:px-6 lg:px-8 py-24 border-t border-primary/10">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, oklch(0.55 0.185 142 / 0.07), transparent 70%)" }}
      />
      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            RENDITI <span className="text-gradient-green">ATTIVO</span>
          </h2>
          <p className="text-sm mb-10" style={{ color: "oklch(0.50 0.01 142)" }}>
            Compila il form per aderire a GID.
          </p>
          <iframe
            src="https://form.generazione.network/form/adesione"
            width="100%"
            height="500px"
            frameBorder="0"
            className="w-full rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function GIDFooter() {
  return (
    <footer className="border-t border-primary/10 px-4 sm:px-6 lg:px-8 py-10 bg-[#050805]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/">
          <GenerazioneLogo className="h-6 w-auto" />
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-colors"
          >
            ← GenerΛzione
          </a>
          <a
            href="#gid-vsl"
            className="text-sm font-semibold text-foreground/50 hover:text-foreground/80 transition-colors"
          >
            Chi Siamo
          </a>
          <a
            href="#gid-form"
            className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
          >
            Unisciti
          </a>
        </nav>
        <p className="text-xs text-foreground/25">© 2025 GID · GenerΛzione</p>
      </div>
    </footer>
  )
}

/* ─── Page root ─── */
export function GIDPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#070b07", color: "#f0f5f0" }}
    >
      <GIDNavbar />
      <GIDHero />
      <GIDIdentity />
      <GIDMarquee />
      <GIDForm />
      <GIDFooter />
    </main>
  )
}
