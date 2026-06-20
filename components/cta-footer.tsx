"use client"

import { motion } from "framer-motion"

export function CtaFooter() {
  return (
    <section id="cta-section" className="relative bg-white px-4 sm:px-6 lg:px-8 py-24 text-center">
      <motion.span
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary rounded-full px-4 py-1.5 mb-6 border border-primary/30"
      >
        Entra nel network
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900 mb-5 text-balance"
        style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
      >
        Il futuro non si aspetta.
        <br />
        <span className="text-gradient-green">Si costruisce.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="text-zinc-500 max-w-md mx-auto mb-10 leading-relaxed"
      >
        Unisciti a una generazione di giovani italiani che hanno deciso di fare la differenza.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        <a
          href="#apply"
          className="shimmer relative inline-block px-14 py-4 rounded-full bg-primary text-white font-black text-base uppercase tracking-widest overflow-hidden hover:bg-primary/90 transition-all duration-300 shadow-[0_0_45px_oklch(0.55_0.185_142_/_0.40)] hover:shadow-[0_0_70px_oklch(0.55_0.185_142_/_0.60)] hover:-translate-y-0.5 active:scale-95"
        >
          Unisciti oggi
        </a>
      </motion.div>
    </section>
  )
}
