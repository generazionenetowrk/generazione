"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Script from "next/script"
import { ArrowRight, Send } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

const TELEGRAM_LINK = "https://t.me/+WH_nsCJCV3Y5MDdk"
const WISTIA_MEDIA_ID = "3ixnl8dgd2"

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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

function StepLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="flex items-center justify-center w-8 h-8 rounded-full border border-primary/40 text-primary text-sm font-black">
        {n}
      </span>
      <h2
        className="text-lg sm:text-xl font-black uppercase tracking-widest text-white"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        {title}
      </h2>
    </div>
  )
}

function StepOneVideo() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-2xl mx-auto py-16 px-4 sm:px-6"
    >
      <StepLabel n="1" title="Guarda il video messaggio" />
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
    </motion.section>
  )
}

function StepTwoTelegram() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-2xl mx-auto py-16 px-4 sm:px-6 border-t border-primary/10"
    >
      <StepLabel n="2" title="Entra nel canale Telegram" />
      <a
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="shimmer relative flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-white font-black text-sm uppercase tracking-widest overflow-hidden hover:bg-primary/90 transition-all duration-300 shadow-[0_0_35px_oklch(0.55_0.185_142_/_0.35)] hover:shadow-[0_0_55px_oklch(0.55_0.185_142_/_0.55)] hover:-translate-y-0.5 active:scale-95"
      >
        <Send className="w-4 h-4" />
        Entra nel Telegram
      </a>
    </motion.section>
  )
}

function StepThreeSections() {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!value) return
    setLoading(true)

    const res = await fetch("/api/members/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value }),
    }).catch(() => null)

    if (res?.ok) {
      window.location.href = "/members"
    } else {
      setLoading(false)
      setError(true)
      setShake(true)
      setValue("")
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-2xl mx-auto py-16 px-4 sm:px-6 border-t border-primary/10"
    >
      <StepLabel n="3" title="Conosci le sezioni" />
      <p className="text-lg sm:text-xl font-bold text-white/70 mb-6 flex flex-wrap items-center gap-2">
        Password:
        <span className="text-yellow-400 font-black tracking-wide">Elitegiovane</span>
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
        <motion.input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="Password"
          animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.45 }}
          className="flex-1 px-5 py-3.5 rounded-2xl text-sm font-semibold text-white placeholder-white/25 outline-none"
          style={{
            background: "oklch(1 0 0 / 0.05)",
            border: error
              ? "1px solid oklch(0.65 0.22 25)"
              : "1px solid oklch(1 0 0 / 0.12)",
          }}
        />
        <button
          type="submit"
          disabled={!value || loading}
          className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-40 hover:-translate-y-0.5 active:scale-95 shrink-0"
          style={{
            background: "oklch(0.55 0.185 142)",
            boxShadow: "0 0 24px oklch(0.55 0.185 142 / 0.35)",
          }}
        >
          {loading ? "..." : (
            <>Vai alle sezioni <ArrowRight className="w-4 h-4" /></>
          )}
        </button>
      </form>
      {error && (
        <p className="mt-3 text-xs" style={{ color: "oklch(0.65 0.22 25)" }}>
          Password errata. Riprova.
        </p>
      )}
    </motion.section>
  )
}

export function LaunchPage() {
  return (
    <main
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#070b07", color: "#f0f5f0" }}
    >
      <header className="px-4 sm:px-6 py-8 text-center">
        <a href="/" className="inline-block mb-6">
          <GenerazioneLogo className="h-7 w-auto mx-auto" />
        </a>
        <h1
          className="text-3xl sm:text-4xl font-black uppercase tracking-tight"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Segui le <span className="text-gradient-green">istruzioni</span>:
        </h1>
      </header>

      <StepOneVideo />
      <StepTwoTelegram />
      <StepThreeSections />

      <footer className="px-4 sm:px-6 py-10 text-center">
        <p className="text-xs text-white/25">© {new Date().getFullYear()} GenerΛzione</p>
      </footer>
    </main>
  )
}
