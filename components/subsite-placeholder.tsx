"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

export function SubsitePlaceholder({
  number,
  name,
  tagline,
}: {
  number: string
  name: string
  tagline: string
}) {
  return (
    <main
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ background: "#070b07", color: "#f0f5f0" }}
    >
      {/* Aurora blobs */}
      <div className="aurora-blob aurora-1 top-[-10%] left-[10%] pointer-events-none" />
      <div className="aurora-blob aurora-2 top-[30%] right-[5%] pointer-events-none" />
      <div className="aurora-blob aurora-3 bottom-[5%] left-[30%] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Back button */}
      <motion.a
        href="/"
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-6 left-6 flex items-center gap-2 text-sm font-semibold text-foreground/60 hover:text-foreground transition-colors group"
        style={{ color: "oklch(0.60 0 0)" }}
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        GenerΛzione
      </motion.a>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        {/* Number chip */}
        <motion.span
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block text-xs font-mono tracking-[0.3em] mb-8 px-4 py-1.5 rounded-full border"
          style={{
            color: "oklch(0.60 0.19 142)",
            borderColor: "oklch(0.60 0.19 142 / 0.30)",
            background: "oklch(0.60 0.19 142 / 0.06)",
          }}
        >
          {number}
        </motion.span>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl font-black uppercase tracking-tight mb-4"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl mb-14 leading-relaxed"
          style={{ color: "oklch(0.70 0.02 142)" }}
        >
          {tagline}
        </motion.p>

        {/* Coming soon badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="inline-flex flex-col items-center gap-6"
        >
          <div
            className="px-8 py-3 rounded-full text-sm font-bold uppercase tracking-[0.25em]"
            style={{
              background: "oklch(0.60 0.19 142 / 0.10)",
              border: "1px solid oklch(0.60 0.19 142 / 0.28)",
              color: "oklch(0.60 0.19 142)",
            }}
          >
            In arrivo
          </div>

          <p className="text-sm" style={{ color: "oklch(0.50 0.01 142)" }}>
            Il sito dedicato è in costruzione. Torna presto.
          </p>
        </motion.div>
      </div>

      {/* Footer logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="/">
          <GenerazioneLogo className="h-5 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300" />
        </a>
      </motion.div>
    </main>
  )
}
