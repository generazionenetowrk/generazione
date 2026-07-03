"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function MembersTeaser() {
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
    <section id="sezioni" className="relative px-4 sm:px-6 lg:px-8 py-28 border-t border-primary/10">
      <div className="max-w-2xl mx-auto text-center">
        <p
          className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-6"
          style={{ color: "oklch(0.50 0.08 142)" }}
        >
          Sei già membro?
        </p>
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-5"
          style={{
            fontFamily: "var(--font-montserrat), sans-serif",
            color: "oklch(0.72 0.19 142)",
            textShadow:
              "0 0 40px oklch(0.60 0.19 142 / 0.55), 0 0 80px oklch(0.60 0.19 142 / 0.25), 0 0 120px oklch(0.60 0.19 142 / 0.12)",
          }}
        >
          Unisciti a una sezione
        </h2>
        <p
          className="text-sm sm:text-base leading-relaxed mb-12"
          style={{ color: "oklch(0.48 0.015 142)" }}
        >
          Qui potrai scegliere tra communities specializzate di ragazzi con la stessa missione
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-4">
          <motion.input
            type="password"
            value={value}
            onChange={(e) => { setValue(e.target.value); setError(false) }}
            placeholder="Inserisci la password"
            animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.45 }}
            className="flex-1 px-6 py-5 rounded-2xl text-base font-semibold text-foreground placeholder-foreground/25 outline-none"
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
            className="flex items-center justify-center gap-2 px-8 py-5 rounded-2xl text-base font-black uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-40 hover:-translate-y-0.5 active:scale-95 shrink-0"
            style={{
              background: "oklch(0.55 0.185 142)",
              boxShadow: "0 0 32px oklch(0.55 0.185 142 / 0.35)",
            }}
          >
            {loading ? "..." : (
              <>Entra <ArrowRight className="w-4 h-4" /></>
            )}
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-3 text-xs"
              style={{ color: "oklch(0.65 0.22 25)" }}
            >
              Password errata. Riprova.
            </motion.p>
          )}
        </AnimatePresence>

        <p className="mt-4 text-xs" style={{ color: "oklch(0.58 0.02 142)" }}>
          (Non hai la password? Devi prima{" "}
          <a
            href="#apply"
            className="underline underline-offset-2 transition-colors duration-200 hover:opacity-80"
            style={{ color: "oklch(0.68 0.15 142)" }}
          >
            diventare membro
          </a>
          )
        </p>
      </div>
    </section>
  )
}
