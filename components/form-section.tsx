"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function FormSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const script = document.createElement("script")
    script.src = "https://generazione.kit.com/c766f43a48/index.js"
    script.async = true
    script.setAttribute("data-uid", "c766f43a48")
    containerRef.current.appendChild(script)
  }, [])

  return (
    <section
      id="apply"
      className="relative px-4 sm:px-6 lg:px-8 py-32 border-t border-primary/10"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top, oklch(0.55 0.185 142 / 0.06), transparent 70%)" }}
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
            UNISCITI{" "}
            <span className="text-gradient-green">OGGI</span>
          </h2>
          <p className="text-sm mb-12" style={{ color: "oklch(0.50 0.01 142)" }}>
            Compila il form per ricevere l'accesso.
          </p>

          <div ref={containerRef} className="w-full" />
        </motion.div>
      </div>
    </section>
  )
}
