"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

const LOGIN_API = "/api/z67kdqyg6bo5ja/login"

type RouteStatus = "live" | "live-password" | "live-unlisted" | "redirect"

const routes: { path: string; label: string; status: RouteStatus }[] = [
  { path: "/", label: "Homepage", status: "live" },
  { path: "/gid", label: "GID", status: "live" },
  { path: "/members", label: "Sezioni — protetta da password", status: "live-password" },
  { path: "/launch", label: "Istruzioni post-iscrizione — password in chiaro, da rivedere", status: "live-password" },
  { path: "/comingsoon", label: "Coming soon — non linkata pubblicamente", status: "live-unlisted" },
  { path: "/clippers-armada", label: "Clippers Armada — redirect a /", status: "redirect" },
  { path: "/influencer-network", label: "Influencer Network — redirect a /", status: "redirect" },
]

const statusStyle: Record<RouteStatus, { label: string; className: string }> = {
  "live": { label: "Live", className: "text-primary border-primary/30 bg-primary/5" },
  "live-password": { label: "Live · password", className: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" },
  "live-unlisted": { label: "Live · non linkata", className: "text-white/50 border-white/20 bg-white/5" },
  "redirect": { label: "Redirect", className: "text-white/30 border-white/10 bg-white/5" },
}

const externalLinks: { href: string; label: string; sublabel: string }[] = [
  { href: "https://vercel.com/remigration/generazione", label: "Vercel — Dashboard progetto", sublabel: "Deploy, dominio, variabili d'ambiente" },
  { href: "https://vercel.com/remigration/generazione/analytics", label: "Vercel — Analytics", sublabel: "Visite, pagine più viste, dispositivi" },
  { href: "https://github.com/generazionenetowrk/generazione", label: "GitHub — Repository", sublabel: "Codice sorgente, storico commit" },
]

function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!value) return
    setLoading(true)

    const res = await fetch(LOGIN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value }),
    }).catch(() => null)

    if (res?.ok) {
      onUnlock()
    } else {
      setLoading(false)
      setError(true)
      setShake(true)
      setValue("")
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: "#070b07" }}>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm"
      >
        <motion.input
          type="password"
          name="control-panel-secret"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="Password"
          autoComplete="off"
          autoFocus
          animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
          transition={{ duration: 0.45 }}
          className="w-full px-5 py-3.5 rounded-2xl text-sm font-semibold text-white placeholder-white/25 outline-none mb-3"
          style={{
            background: "oklch(1 0 0 / 0.05)",
            border: error ? "1px solid oklch(0.65 0.22 25)" : "1px solid oklch(1 0 0 / 0.12)",
          }}
        />
        <button
          type="submit"
          disabled={!value || loading}
          className="w-full py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-40 hover:-translate-y-0.5 active:scale-95"
          style={{ background: "oklch(0.55 0.185 142)", boxShadow: "0 0 24px oklch(0.55 0.185 142 / 0.35)" }}
        >
          {loading ? "..." : "Entra"}
        </button>
        {error && (
          <p className="mt-3 text-xs text-center" style={{ color: "oklch(0.65 0.22 25)" }}>
            Password errata.
          </p>
        )}
      </motion.form>
    </div>
  )
}

function Dashboard() {
  return (
    <main className="min-h-screen px-4 sm:px-6 py-16" style={{ background: "#070b07", color: "#f0f5f0" }}>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <GenerazioneLogo className="h-6 w-auto" />
          <span className="text-xs font-bold uppercase tracking-widest text-white/40">Control Panel</span>
        </div>

        <h1
          className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-8"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Tutte le sotto-pagine
        </h1>

        <ul className="space-y-2">
          {routes.map((r) => (
            <li key={r.path}>
              <a
                href={r.path}
                className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/[0.03] transition-colors duration-200"
              >
                <div className="min-w-0">
                  <p className="font-mono text-sm text-white">{r.path}</p>
                  <p className="text-xs text-white/40 truncate">{r.label}</p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className={`text-[10px] font-bold uppercase tracking-widest border rounded-full px-2.5 py-1 ${statusStyle[r.status].className}`}>
                    {statusStyle[r.status].label}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors" />
                </div>
              </a>
            </li>
          ))}
        </ul>

        <h2
          className="text-lg sm:text-xl font-black uppercase tracking-tight mt-12 mb-6 text-white/70"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Link utili
        </h2>
        <ul className="space-y-2">
          {externalLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 px-5 py-4 rounded-2xl border border-white/10 hover:border-primary/40 hover:bg-white/[0.03] transition-colors duration-200"
              >
                <div className="min-w-0">
                  <p className="text-sm text-white">{l.label}</p>
                  <p className="text-xs text-white/40 truncate">{l.sublabel}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-primary transition-colors shrink-0" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export function ControlPanelPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    fetch(LOGIN_API)
      .then((r) => r.json())
      .then((d) => { if (d.unlocked) setUnlocked(true) })
      .catch(() => null)
      .finally(() => setChecking(false))
  }, [])

  if (checking) return null

  return (
    <AnimatePresence mode="wait">
      {unlocked ? <Dashboard key="dashboard" /> : <Gate key="gate" onUnlock={() => setUnlocked(true)} />}
    </AnimatePresence>
  )
}
