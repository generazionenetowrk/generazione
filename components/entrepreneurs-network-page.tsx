"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowLeft, Lock, TrendingUp, CalendarDays } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

// Set to your Typeform/JotForm embed URL when ready
const FORM_EMBED_SRC: string | null = null

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
}

const requirements = [
  {
    title: "Un'impresa attiva",
    desc: "Hai già costruito qualcosa. Non cerchiamo idee: cerchiamo esecutori.",
  },
  {
    title: "Una visione condivisa",
    desc: "Credi che il successo degli imprenditori europei sia legato al futuro del continente.",
  },
  {
    title: "La volontà di contribuire",
    desc: "Non sei qui solo per ricevere. Sei qui per costruire con gli altri.",
  },
]

const offers = [
  {
    icon: Lock,
    title: "Rete Privata",
    desc: "Uno spazio digitale chiuso dove i membri possono connettersi, scambiare idee e costruire rapporti diretti.",
  },
  {
    icon: TrendingUp,
    title: "Deal Flow",
    desc: "Introduzioni commerciali e opportunità di business tra imprenditori verificati all'interno della rete.",
  },
  {
    icon: CalendarDays,
    title: "Eventi Fisici",
    desc: "Incontri periodici dal vivo, in formato riservato, dove le collaborazioni più solide prendono forma.",
  },
]

const steps = [
  {
    title: "Candidatura",
    desc: "Compila il form qui sotto. Pochi campi, risposte serie.",
  },
  {
    title: "Revisione",
    desc: "Il team analizza ogni candidatura. Non tutte passano.",
  },
  {
    title: "Colloquio",
    desc: "Se sei nella shortlist, ti contatteremo per un incontro.",
  },
  {
    title: "Decisione",
    desc: "L'accettazione non è garantita. La qualità del network dipende da questo.",
  },
]

/* ─── Navbar ─── */
function ENNavbar() {
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
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4"
    >
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
              className="hidden sm:block text-xs font-black uppercase tracking-[0.2em] text-foreground"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Entrepreneurs Network
            </span>

            <a
              href="#apply"
              className="px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider border border-foreground/20 text-foreground/70 hover:border-primary hover:text-primary transition-all duration-300"
            >
              Candidati
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

/* ─── Hero ─── */
function ENHero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])
  const auroraY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Only aurora-2 and aurora-3 — restrained, no aurora-1 */}
      <motion.div style={{ y: auroraY }} className="absolute inset-0 pointer-events-none">
        <div className="aurora-blob aurora-2 top-[15%] right-[8%]" />
        <div className="aurora-blob aurora-3 bottom-[10%] left-[20%]" />
      </motion.div>

      {/* Very faint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.55 0.185 142 / 0.03) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.55 0.185 142 / 0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 30%, black 30%, transparent 75%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center"
        style={{ y: contentY, opacity: contentOpacity }}
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
        }}
      >
        <motion.div variants={fadeUp} className="mb-10">
          <span className="glass-green inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.3em] text-primary rounded-full px-5 py-2">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-primary" />
            </span>
            02 · Entrepreneurs Network
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-black uppercase leading-[0.88] tracking-tight mb-10"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            fontSize: "clamp(2rem, 8vw, 5.5rem)",
          }}
        >
          <span className="block text-foreground">L'ÉLITE</span>
          <span className="block text-foreground">IMPRENDITORIALE</span>
          <span className="block text-gradient-green">EUROPEA</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{ color: "oklch(0.70 0.02 142)" }}
        >
          Una rete di imprenditori europei selezionati per merito, uniti dalla convinzione che il
          successo personale e quello della propria nazione vadano nella stessa direzione.
        </motion.p>

        {/* Scroll indicator */}
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

/* ─── Vision ─── */
function ENVision() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            La missione
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl sm:text-3xl font-bold text-foreground/90 leading-snug mb-10"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Entrepreneurs Network è la rete privata per chi ha già costruito qualcosa e vuole farlo
          con persone che condividono gli stessi valori.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="text-base leading-relaxed"
          style={{ color: "oklch(0.60 0.01 142)" }}
        >
          Il network è riservato a imprenditori che hanno già dimostrato di saper costruire, che
          hanno un'azienda che funziona e che genera valore, e che credono che il successo
          personale e quello del proprio Paese vadano nella stessa direzione.
        </motion.p>
      </div>
    </section>
  )
}

/* ─── Who We Select ─── */
function ENWhoWeSelect() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            Chi accettiamo
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-foreground mb-14"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Non accettiamo tutti.{" "}
          <span className="text-gradient-green">Accettiamo i migliori.</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-5">
          {requirements.map((req, i) => (
            <motion.div
              key={req.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-7"
              style={{
                background: "oklch(1 0 0 / 0.03)",
                border: "1px solid oklch(1 0 0 / 0.05)",
                borderLeft: "3px solid oklch(0.60 0.19 142)",
              }}
            >
              <h3
                className="text-sm font-black uppercase tracking-widest text-foreground mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {req.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0.01 142)" }}>
                {req.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── What the Network Offers ─── */
function ENOffers() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            Cosa trovi dentro
          </span>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-8 hover:shadow-[0_8px_40px_oklch(0_0_0_/_0.5)] transition-shadow duration-500"
            >
              <offer.icon
                className="w-5 h-5 mb-6"
                style={{ color: "oklch(0.60 0.19 142)" }}
                strokeWidth={1.5}
              />
              <h3
                className="text-sm font-black uppercase tracking-widest text-foreground mb-3"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {offer.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0.01 142)" }}>
                {offer.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Selection Process ─── */
function ENProcess() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            Come funziona la selezione
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="inline-flex w-10 h-10 rounded-full items-center justify-center text-primary font-black text-xs border border-primary/30 mb-5"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="text-sm font-black uppercase tracking-widest text-foreground mb-2"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "oklch(0.58 0.01 142)" }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Application Form ─── */
function ENForm() {
  return (
    <section
      id="apply"
      className="relative px-4 sm:px-6 lg:px-8 py-32 border-t border-white/5"
    >
      {/* Subtle glow behind the form */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, oklch(0.55 0.185 142 / 0.06), transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-foreground mb-3"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            ENTRA NELLA{" "}
            <span className="text-gradient-green">RETE</span>
          </h2>
          <p
            className="text-sm mb-12"
            style={{ color: "oklch(0.50 0.01 142)" }}
          >
            Pochi posti. Selezione continua.
          </p>

          {FORM_EMBED_SRC ? (
            <iframe
              src={FORM_EMBED_SRC}
              className="w-full min-h-[700px] rounded-2xl"
              style={{ border: "1px solid oklch(1 0 0 / 0.08)" }}
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media"
              title="Candidatura Entrepreneurs Network"
            />
          ) : (
            <div
              className="w-full min-h-[560px] rounded-2xl flex flex-col items-center justify-center gap-3"
              style={{
                border: "1.5px dashed oklch(1 0 0 / 0.10)",
                background: "oklch(1 0 0 / 0.02)",
              }}
            >
              <p className="text-foreground/40 text-sm font-semibold">
                Form di candidatura in arrivo
              </p>
              <p className="text-foreground/20 text-xs">
                Imposta{" "}
                <code className="bg-white/5 px-1 py-0.5 rounded text-[11px]">
                  FORM_EMBED_SRC
                </code>{" "}
                in entrepreneurs-network-page.tsx
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Footer ─── */
function ENFooter() {
  return (
    <footer
      className="border-t px-4 sm:px-6 lg:px-8 py-10"
      style={{
        background: "#050805",
        borderColor: "oklch(0.60 0.19 142 / 0.10)",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/">
          <GenerazioneLogo className="h-6 w-auto" />
        </a>
        <nav className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-semibold transition-colors"
            style={{ color: "oklch(0.50 0.01 142)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "oklch(0.75 0.01 142)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "oklch(0.50 0.01 142)")
            }
          >
            ← GenerΛzione
          </a>
          <a
            href="#apply"
            className="text-sm font-semibold transition-colors"
            style={{ color: "oklch(0.50 0.01 142)" }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "oklch(0.75 0.01 142)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "oklch(0.50 0.01 142)")
            }
          >
            Candidatura
          </a>
        </nav>
        <p className="text-xs" style={{ color: "oklch(0.35 0.01 142)" }}>
          © 2025 Entrepreneurs Network · GenerΛzione
        </p>
      </div>
    </footer>
  )
}

/* ─── Page root ─── */
export function EntrepreneursNetworkPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#070b07", color: "#f0f5f0" }}
    >
      <ENNavbar />
      <ENHero />
      <ENVision />
      <ENWhoWeSelect />
      <ENOffers />
      <ENProcess />
      <ENForm />
      <ENFooter />
    </main>
  )
}
