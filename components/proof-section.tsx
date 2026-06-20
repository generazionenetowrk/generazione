"use client"

import { motion } from "framer-motion"

export function ProofSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-24 border-t border-primary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            Chi ha già scelto
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full min-h-[280px] rounded-3xl flex flex-col items-center justify-center gap-3"
          style={{
            border: "1.5px dashed oklch(1 0 0 / 0.08)",
            background: "oklch(1 0 0 / 0.015)",
          }}
        >
          <p className="text-foreground/25 text-sm font-semibold tracking-wide">
            Proof in arrivo
          </p>
          <p className="text-foreground/15 text-xs">
            Testimonianze e numeri — presto disponibili
          </p>
        </motion.div>
      </div>
    </section>
  )
}
