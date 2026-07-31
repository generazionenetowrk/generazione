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
            03 · Clippers Armada
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
      <CAFooter />
    </main>
  )
}
