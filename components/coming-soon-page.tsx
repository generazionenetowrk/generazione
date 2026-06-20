"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ComingSoonPage() {
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!formRef.current) return
    const script = document.createElement("script")
    script.src = "https://generazione.kit.com/ced6333c58/index.js"
    script.async = true
    script.setAttribute("data-uid", "ced6333c58")
    formRef.current.appendChild(script)
  }, [])

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
      style={{ background: "#070b07" }}
    >
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.55 0.185 142 / 0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center gap-12">

        {/* Lambda */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ filter: "drop-shadow(0 0 28px oklch(0.60 0.19 142 / 0.70)) drop-shadow(0 0 80px oklch(0.60 0.19 142 / 0.35))" }}
        >
          <svg viewBox="0 0 100 88" width="160" height="141" fill="oklch(0.68 0.19 142)">
            <path d="M 50,2 L 100,88 L 72,88 L 50,38 L 28,88 L 0,88 Z" />
          </svg>
        </motion.div>

        {/* Kit form */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          ref={formRef}
        />

        {/* Date */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm font-mono tracking-[0.3em]"
          style={{ color: "oklch(0.45 0.08 142)" }}
        >
          03 — 07 — 2026
        </motion.p>

      </div>
    </main>
  )
}
