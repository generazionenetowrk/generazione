"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

// Drop in your form embed URL when ready (Typeform, JotForm, etc.)
// e.g. "https://form.typeform.com/to/XXXXXXXX"
const FORM_EMBED_SRC: string | null = "https://form.generazione.network/form/clippers"

/* ─── Navbar ─── */
function CANavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3"
    >
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border border-zinc-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
          GenerΛzione
        </a>

        <span
          className="hidden sm:block text-sm font-black uppercase tracking-widest text-zinc-900"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Clippers Armada
        </span>

        <a
          href="#apply"
          className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
        >
          Applica
        </a>
      </div>
    </motion.header>
  )
}

/* ─── Hero ─── */
function CAHero() {
  return (
    <section className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-28 pb-20 overflow-hidden bg-white">
      {/* Top green line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />

      {/* Decorative "03" watermark */}
      <span
        className="absolute right-[-1%] top-1/2 -translate-y-1/2 font-black select-none pointer-events-none leading-none text-zinc-50"
        style={{
          fontFamily: "var(--font-montserrat), sans-serif",
          fontSize: "clamp(8rem, 22vw, 22rem)",
        }}
        aria-hidden
      >
        03
      </span>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Clippers Armada
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-black uppercase leading-[0.88] tracking-tight text-zinc-900 mb-8"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "clamp(3rem, 9vw, 8rem)",
          }}
        >
          Smettila di
          <br />
          <span style={{ color: "oklch(0.60 0.19 142)" }}>scrollare.</span>
          <br />
          Inizia a costruire.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-zinc-500 max-w-lg leading-relaxed"
        >
          La squadra speciale di creatori che sta ridefinendo la narrazione italiana sui social.
          Basta consumatori. Vogliamo produttori.
        </motion.p>
      </div>
    </section>
  )
}

/* ─── Concept ─── */
function CAConcept() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="flex-1 h-px bg-zinc-200" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400">
            Il progetto
          </span>
          <div className="flex-1 h-px bg-zinc-200" />
        </motion.div>

        {/* The "cosa dobbiamo fare?" question */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl font-black text-zinc-900 leading-tight mb-10"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          "Ma cosa dobbiamo fare, concretamente?"
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid sm:grid-cols-2 gap-10 text-zinc-500 leading-relaxed mb-12"
        >
          <p>
            È il messaggio che riceviamo più spesso. C'è gente che vuole fare qualcosa di reale,
            non solo mettere like. La Clippers Armada è la risposta: una squadra speciale incaricata
            di creare reels, memes, e clip dai contenuti lunghi, per portare il nostro messaggio al
            massimo numero di persone possibile.
          </p>
          <p>
            La guerra oggi si combatte sui social. L'algoritmo non è neutro — ma può essere usato.
            Serve gente capace, creativa, con l'aesthetic giusta. Se pensi di essere quella persona,
            sei nel posto giusto.
          </p>
        </motion.div>

        {/* Historical parallel + mission quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <p className="text-zinc-500 leading-relaxed mb-6">
            Una volta si lasciavano poster sui muri o si imbucavano pamphlet nelle lettere. Oggi i
            clippers sono chi amplifica la voce nel mare di battaglia moderno: i social. Non stiamo
            spammando né ingannando l'algoritmo — stiamo spingendo una visione.
          </p>
          <p
            className="text-xl sm:text-2xl font-black text-zinc-900 leading-snug"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Non sei qui per fare views.{" "}
            <span style={{ color: "oklch(0.60 0.19 142)" }}>
              Sei qui per scrivere la storia di una generazione
            </span>{" "}
            e imparare la skill più utile nel mercato moderno: crescere sui social.
          </p>
        </motion.div>

        {/* Exclusive callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="border-l-4 border-primary pl-6 py-1"
          style={{ borderColor: "oklch(0.60 0.19 142)" }}
        >
          <p className="text-zinc-800 font-semibold">
            I dettagli operativi vengono condivisi esclusivamente con chi completa la candidatura.
          </p>
          <p className="text-zinc-400 text-sm mt-1">
            Fai domanda qui sotto.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Flow diagram: long-form → Clippers Armada → platforms ─── */
function PlatformIcon({ name, className }: { name: "instagram" | "tiktok" | "youtube" | "x"; className?: string }) {
  if (name === "instagram") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  if (name === "tiktok") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M16.6 5.82c-.8-.85-1.24-1.96-1.24-3.12h-3.06v13.9c0 1.48-1.2 2.68-2.68 2.68a2.68 2.68 0 0 1-2.68-2.68 2.68 2.68 0 0 1 2.68-2.68c.28 0 .55.04.8.12v-3.1a5.8 5.8 0 0 0-.8-.06A5.75 5.75 0 0 0 4 16.62a5.75 5.75 0 0 0 5.75 5.75 5.75 5.75 0 0 0 5.75-5.75V9.4a8.9 8.9 0 0 0 5.02 1.54V7.87c-1.1 0-2.13-.35-2.97-.94a5.7 5.7 0 0 1-.95-1.1Z" />
      </svg>
    )
  }
  if (name === "youtube") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.24 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.2 22H1.9l7.7-8.8L1 2h6.8l4.7 6.2L18.24 2Zm-1.15 18h1.8L7 4h-1.9l12 16Z" />
    </svg>
  )
}

const outputPlatforms: { name: "instagram" | "tiktok" | "youtube" | "x"; label: string; y: number }[] = [
  { name: "instagram", label: "Instagram", y: 60 },
  { name: "tiktok", label: "TikTok", y: 160 },
  { name: "youtube", label: "YouTube", y: 260 },
  { name: "x", label: "X", y: 360 },
]

function CAFlowDiagramVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="gradient-border vsl-neon relative rounded-3xl overflow-hidden bg-[#070b07] px-4 py-10"
    >
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-40" />

      <div className="relative w-full" style={{ aspectRatio: "800 / 420" }}>
            <svg viewBox="0 0 800 420" className="absolute inset-0 w-full h-full" fill="none">
              <defs>
                <marker id="ca-dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
                  <circle cx="3" cy="3" r="3" fill="oklch(0.70 0.19 142)" />
                </marker>
              </defs>

              {/* Input path: long-form -> hub */}
              <path
                id="ca-path-in"
                d="M 130 210 C 250 210, 280 210, 360 210"
                stroke="oklch(0.55 0.185 142 / 0.35)"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
              <circle r="4" fill="oklch(0.70 0.19 142)">
                <animateMotion dur="2.2s" repeatCount="indefinite" begin="0s">
                  <mpath href="#ca-path-in" />
                </animateMotion>
              </circle>

              {/* Output paths: hub -> each platform */}
              {outputPlatforms.map((p, i) => {
                const pathId = `ca-path-out-${i}`
                const d = `M 440 210 C 540 210, 560 ${p.y}, 660 ${p.y}`
                return (
                  <g key={p.name}>
                    <path
                      id={pathId}
                      d={d}
                      stroke="oklch(0.55 0.185 142 / 0.35)"
                      strokeWidth="1.5"
                      strokeDasharray="4 5"
                    />
                    <circle r="4" fill="oklch(0.70 0.19 142)">
                      <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${0.3 + i * 0.25}s`}>
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                )
              })}
            </svg>

            {/* Long-form input node */}
            <div
              className="absolute flex flex-col items-center gap-2"
              style={{ left: "16.25%", top: "50%", transform: "translate(-50%, -50%)" }}
            >
              <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center">
                <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[16px] border-l-primary ml-1" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60 whitespace-nowrap">
                Contenuto Lungo
              </span>
            </div>

            {/* Central hub */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
            >
              <div className="glass-green w-28 h-28 rounded-full flex flex-col items-center justify-center text-center shadow-[0_0_45px_oklch(0.55_0.185_142_/_0.35)]">
                <span
                  className="text-primary font-black text-xs uppercase tracking-wider leading-tight"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  Clippers
                  <br />
                  Armada
                </span>
              </div>
            </div>

            {/* Output platform nodes */}
            {outputPlatforms.map((p) => (
              <div
                key={p.name}
                className="absolute flex items-center gap-2"
                style={{ left: "82.5%", top: `${(p.y / 420) * 100}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="w-11 h-11 rounded-xl glass-strong flex items-center justify-center text-white/80">
                  <PlatformIcon name={p.name} className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-widest text-white/50 whitespace-nowrap">
                  {p.label}
                </span>
              </div>
            ))}
      </div>
    </motion.div>
  )
}

/* ─── Ranks teaser ─── */
const ranks = [
  {
    icon: "⚔️",
    title: "Clipping Soldier",
    desc: "Entri nel gruppo Telegram dedicato. Coordinamento, materiali, leaderboard mensile.",
  },
  {
    icon: "🛡️",
    title: "Clipping Admiral",
    desc: "Accesso diretto a Luca. Anticipazioni sui progetti. Reshare prioritario sulle storie.",
  },
  {
    icon: "🎖️",
    title: "Clipping General",
    desc: "Scelti in prima persona. Il livello più alto dell'Armada.",
  },
]

function CARanks() {
  return (
    <section className="bg-zinc-50 px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            La gerarchia
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-zinc-400 text-sm mb-14"
        >
          Ogni view conta. I migliori salgono di grado.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-5">
          {ranks.map((rank, i) => (
            <motion.div
              key={rank.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
            >
              <span className="text-3xl mb-4 block">{rank.icon}</span>
              <h3
                className="text-sm font-black uppercase tracking-widest text-zinc-900 mb-3 group-hover:text-primary transition-colors duration-300"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {rank.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{rank.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Application form embed ─── */
function CAForm() {
  return (
    <section id="apply" className="bg-zinc-50 px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900 mb-2"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Fai la tua{" "}
            <span style={{ color: "oklch(0.60 0.19 142)" }}>candidatura.</span>
          </h2>
          <p className="text-zinc-400 text-sm mb-10">
            I posti sono limitati. Chi rimane inattivo viene rimosso.
          </p>

          {FORM_EMBED_SRC ? (
            <iframe
              src={FORM_EMBED_SRC}
              className="w-full min-h-[700px] rounded-2xl border border-zinc-200 bg-white"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media"
              title="Candidatura Clippers Armada"
            />
          ) : (
            <div className="w-full min-h-[560px] rounded-2xl border-2 border-dashed border-zinc-200 bg-white flex flex-col items-center justify-center gap-3">
              <span className="text-4xl select-none">📋</span>
              <p className="text-zinc-500 text-sm font-semibold">Form di candidatura in arrivo</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── What you get ─── */
const perks = [
  {
    title: "La skill più importante del 21esimo secolo.",
    desc: "Crescita social — hook writing, editing video, algorithmic thinking, community building — è forse la competenza più spendibile dell'era attuale. Chi sa farla oggi è indispensabile per qualunque brand, azienda, movimento, personaggio pubblico. Qui te la insegniamo sul campo, non su un corso astratto da 500€.",
  },
  {
    title: "Risorse operative continue.",
    desc: "Pacchi b-roll no-copyright · font e grading premium · template CapCut · hook library · guide tecniche · esempi di clip che hanno performato. Roba che se dovessi comprartela costerebbe centinaia di euro.",
  },
  {
    title: "Una tribe.",
    desc: "Non lavori da solo dietro uno schermo. Nel canale Telegram — Clipper Armada trovi decine di altri giovani italiani con lo stesso obiettivo.",
  },
]

function CAPerks() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-100">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900 mb-12"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Cosa riceverai <span style={{ color: "oklch(0.60 0.19 142)" }}>ed imparerai.</span>
            </h2>
          </motion.div>

          <div className="space-y-10 mb-14">
            {perks.map((perk, i) => (
              <motion.div
                key={perk.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-l-4 pl-6 py-1"
                style={{ borderColor: "oklch(0.60 0.19 142)" }}
              >
                <h3
                  className="text-lg font-black text-zinc-900 mb-2"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {perk.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <a
              href="#apply"
              className="inline-block px-10 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 shadow-[0_0_35px_oklch(0.55_0.185_142_/_0.35)] hover:shadow-[0_0_55px_oklch(0.55_0.185_142_/_0.55)] hover:-translate-y-0.5 active:scale-95"
            >
              Unisciti
            </a>
          </motion.div>
        </div>

        <CAFlowDiagramVisual />
      </div>
    </section>
  )
}

/* ─── Analytics preview ─── */
const analyticsShots = [
  "/analytics/analytics-1.png",
  "/analytics/analytics-2.png",
  "/analytics/analytics-3.png",
  "/analytics/analytics-4.jpg",
  "/analytics/analytics-5.jpg",
  "/analytics/analytics-6.png",
  "/analytics/analytics-7.jpg",
]

function CAAnalytics() {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-24 border-t border-zinc-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-900"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            I <span style={{ color: "oklch(0.60 0.19 142)" }}>risultati</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {analyticsShots.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl overflow-hidden border border-zinc-200 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.10)] bg-zinc-50"
            >
              <img
                src={src}
                alt={`Analitiche ${i + 1}`}
                className="w-full h-auto object-cover"
                draggable={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function CAFooter() {
  return (
    <footer className="border-t border-zinc-100 px-4 sm:px-6 lg:px-8 py-10 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/">
          <GenerazioneLogo onLight className="h-6 w-auto" />
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            ← GenerΛzione
          </a>
          <a
            href="#apply"
            className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors"
          >
            Candidatura
          </a>
        </nav>
        <p className="text-xs text-zinc-300">© 2025 Clippers Armada · GenerΛzione</p>
      </div>
    </footer>
  )
}

/* ─── Page root ─── */
export function ClippersArmadaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white" style={{ color: "#18181b" }}>
      <CANavbar />
      <CAHero />
      <CAConcept />
      <CAForm />
      <CAPerks />
      <CAAnalytics />
      <CAFooter />
    </main>
  )
}
