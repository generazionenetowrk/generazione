"use client"

import { motion } from "framer-motion"

const paragraphs = [
  "Per tremila anni una civiltà si è trasmessa di generazione in generazione, intatta. Da Atene a Roma, da Roma alla Cristianità, dalla Cristianità al Rinascimento, dal Rinascimento alla modernità europea. Ogni generazione riceveva una fiaccola e aveva il dovere sacro di riconsegnarla accesa.",
  "Poi siamo arrivati noi. E a noi, di quella catena lunga e costruita in millenni, non è arrivato quasi niente.",
  "GenerΛzione è la risposta. Una confederazione apartitica di giovani italiani ed europei che ha deciso di non essere l'ultimo capitolo di quella storia, ma il primo della prossima.",
]

export function ManifestoSection() {
  return (
    <section
      id="manifesto"
      className="relative px-4 sm:px-6 lg:px-8 py-32"
      style={{ background: "#ffffff" }}
    >
      <div className="relative max-w-2xl mx-auto">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className={`leading-relaxed mb-10 ${
              i === 2
                ? "text-xl sm:text-2xl font-semibold"
                : "text-base sm:text-lg"
            }`}
            style={{ color: i === 2 ? "#111827" : "#4b5563" }}
          >
            {text}
          </motion.p>
        ))}

        {/* Signature — centered */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xs tracking-[0.25em] mb-16 font-mono text-center"
          style={{ color: "oklch(0.40 0.10 142)" }}
        >
          — GENERΛZIONE
        </motion.p>

        {/* CTA — centered */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#apply"
            className="shimmer relative inline-block px-14 py-4 rounded-full bg-primary text-white font-black text-base uppercase tracking-widest overflow-hidden hover:bg-primary/90 transition-all duration-300 shadow-[0_0_45px_oklch(0.55_0.185_142_/_0.40)] hover:shadow-[0_0_70px_oklch(0.55_0.185_142_/_0.60)] hover:-translate-y-0.5 active:scale-95"
          >
            Unisciti oggi
          </a>
        </motion.div>
      </div>
    </section>
  )
}
