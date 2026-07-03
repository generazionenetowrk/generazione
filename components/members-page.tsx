"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, Lock, ArrowUpRight } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

/* Password check happens server-side via /api/members/login —
   set MEMBERS_PASSWORD (no NEXT_PUBLIC prefix) in .env.local and on Vercel. */

/* ─── Role data ─── */
const activeRoles = [
  { id: 1, label: "GID", number: "01", sublabel: "Attivismo", image: "/copertina gid.JPG", href: "/gid" },
]

const comingSoonRoles = [
  { id: 3, label: "Clippers\nArmada", image: "/placeholder.jpg" },
  { id: 4, label: "Influencer\nNetwork", image: "/placeholder.jpg" },
  { id: 5, label: "Legal\nSquad", image: "/placeholder.jpg" },
  { id: 6, label: "Student\nIntellectuals", image: "/placeholder.jpg" },
  { id: 7, label: "Health & Fitness\nBoxing etc.", image: "/placeholder.jpg" },
]

/* ─── Active card ─── */
function ActiveCard({ role, index }: { role: typeof activeRoles[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [transform, setTransform] = useState("")
  const [spot, setSpot] = useState({ x: 50, y: 50, visible: false })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    setTransform(`perspective(900px) rotateX(${(0.5 - py) * 8}deg) rotateY(${(px - 0.5) * 8}deg) scale3d(1.02,1.02,1.02)`)
    setSpot({ x: px * 100, y: py * 100, visible: true })
  }, [])

  const onLeave = useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)")
    setSpot((s) => ({ ...s, visible: false }))
  }, [])

  return (
    <motion.a
      ref={ref}
      href={role.href}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.10 + index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="block group relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer shadow-[0_8px_30px_-8px_oklch(0.30_0.05_142_/_0.25)] hover:shadow-[0_20px_50px_-12px_oklch(0.45_0.15_142_/_0.40)] transition-shadow duration-500"
    >
      <img
        src={role.image}
        alt={role.label}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(260px circle at ${spot.x}% ${spot.y}%, oklch(1 0 0 / 0.10), transparent 70%)`,
        }}
      />
      <span className="absolute top-4 left-4 text-xs font-mono tracking-widest text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/15">
        {role.number}
      </span>
      <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </span>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
        <span
          className="block text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {role.sublabel}
        </span>
        <span
          className="block text-white font-black text-lg uppercase tracking-widest whitespace-pre-line leading-snug transition-transform duration-300 group-hover:-translate-y-1"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {role.label}
        </span>
        <span className="block mt-2 h-px w-10 bg-primary group-hover:w-2/3 transition-all duration-500" />
      </div>
    </motion.a>
  )
}

/* ─── Members grid ─── */
function MembersGrid() {
  return (
    <section className="relative bg-white px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-14"
        >
          <h1
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900 mb-4"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Talenti diversi.{" "}
            <span className="text-gradient-green">Identità unica.</span>
          </h1>
          <p className="text-zinc-500 max-w-lg leading-relaxed">
            Pensatori, creatori, imprenditori, attivisti, amplificatori. GenerΛzione raccoglie
            ogni forma di contributo giovanile sotto un solo segno.
          </p>
        </motion.div>

        {/* Active roles */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-sm sm:max-w-md">
            {activeRoles.map((role, i) => (
              <ActiveCard key={role.id} role={role} index={i} />
            ))}
          </div>
        </div>

        {/* Coming soon separator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center gap-4 mb-8 px-1"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-200" />
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            <Lock className="w-3 h-3" />
            In arrivo
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-200" />
        </motion.div>

        {/* Coming soon — 3 sopra, 2 centrati sotto via griglia 6 colonne */}
        <div className="grid grid-cols-6 gap-4 max-w-2xl mx-auto">
          {comingSoonRoles.map((role, i) => {
            const colClass =
              i === 3 ? "col-span-2 col-start-2" :
              i === 4 ? "col-span-2 col-start-4" :
              "col-span-2"
            return (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 + i * 0.08, duration: 0.5 }}
                className={`${colClass} relative aspect-square rounded-xl overflow-hidden cursor-default select-none`}
              >
                <img
                  src={role.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover grayscale blur-[2px] scale-105 opacity-60"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-white/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span
                    className="block text-white/90 font-black text-[11px] uppercase tracking-widest whitespace-pre-line leading-snug"
                    style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                  >
                    {role.label}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600 bg-white/85 backdrop-blur-sm rounded-full px-2 py-1">
                    <Lock className="w-2.5 h-2.5" />
                    Soon
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Password gate ─── */
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch("/api/members/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value }),
    }).catch(() => null)

    setLoading(false)
    if (res?.ok) {
      onUnlock()
    } else {
      setError(true)
      setShake(true)
      setValue("")
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-sm text-center"
      >
        <a href="/" className="inline-block mb-10">
          <GenerazioneLogo className="h-8 w-auto mx-auto" />
        </a>

        <h1
          className="text-2xl font-black uppercase tracking-widest text-foreground mb-2"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Area Riservata
        </h1>
        <p className="text-sm mb-10" style={{ color: "oklch(0.55 0.01 142)" }}>
          Inserisci la password ricevuta via email
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <motion.div
            animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.45 }}
          >
            <input
              type="password"
              value={value}
              onChange={(e) => { setValue(e.target.value); setError(false) }}
              placeholder="Password"
              autoComplete="current-password"
              className="w-full px-5 py-3.5 rounded-2xl text-sm font-semibold text-foreground placeholder-foreground/25 outline-none transition-all duration-200 focus:ring-2"
              style={{
                background: "oklch(1 0 0 / 0.05)",
                border: error
                  ? "1px solid oklch(0.65 0.22 25)"
                  : "1px solid oklch(1 0 0 / 0.10)",
              }}
            />
          </motion.div>

          <AnimatePresence>
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-xs"
                style={{ color: "oklch(0.65 0.22 25)" }}
              >
                Password errata. Riprova.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={!value || loading}
            className="w-full py-3.5 rounded-2xl text-sm font-black uppercase tracking-widest text-white transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5 active:scale-95"
            style={{
              background: "oklch(0.55 0.185 142)",
              boxShadow: "0 0 30px oklch(0.55 0.185 142 / 0.35)",
            }}
          >
            {loading ? "..." : "Entra"}
          </button>
        </form>

        <p className="mt-8 text-xs" style={{ color: "oklch(0.40 0.01 142)" }}>
          Non hai ancora la password?{" "}
          <a href="/#apply" className="text-primary hover:text-primary/80 transition-colors">
            Iscriviti
          </a>
        </p>
      </motion.div>
    </div>
  )
}

/* ─── Members navbar ─── */
function MembersNavbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          GenerΛzione
        </a>
        <a href="/">
          <GenerazioneLogo onLight className="h-6 w-auto" />
        </a>
        <div className="w-24" />
      </div>
    </header>
  )
}

/* ─── Members footer ─── */
function MembersFooter() {
  return (
    <footer className="bg-white border-t border-zinc-100 px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="/" className="text-sm font-semibold text-zinc-400 hover:text-zinc-900 transition-colors">
          ← GenerΛzione
        </a>
        <p className="text-xs text-zinc-300">
          © {new Date().getFullYear()} GenerΛzione
        </p>
      </div>
    </footer>
  )
}

/* ─── Page root ─── */
export function MembersPage() {
  const [unlocked, setUnlocked] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get("gate") === "1") {
      window.history.replaceState({}, "", "/members")
      fetch("/api/members/login", { method: "DELETE" })
        .catch(() => null)
        .finally(() => setChecking(false))
    } else {
      fetch("/api/members/login")
        .then((r) => r.json())
        .then((d) => {
          if (d.unlocked) setUnlocked(true)
        })
        .catch(() => null)
        .finally(() => setChecking(false))
    }
  }, [])

  if (checking) return null

  return (
    <main className="min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {unlocked ? (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
            style={{ color: "#18181b" }}
          >
            <MembersNavbar />
            <div className="pt-20">
              <MembersGrid />
            </div>
            <MembersFooter />
          </motion.div>
        ) : (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PasswordGate onUnlock={() => setUnlocked(true)} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
