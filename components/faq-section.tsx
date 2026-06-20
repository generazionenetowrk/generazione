"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus } from "lucide-react"

const faqs = [
  {
    q: "Quanto costa?",
    a: "Nulla. GenerΛzione non chiede soldi. Chiede impegno.",
  },
  {
    q: "Cosa succede dopo l'iscrizione?",
    a: "Riceverai una email con le istruzioni per accedere all'area riservata e scegliere la tua sezione.",
  },
  {
    q: "È sicuro?",
    a: "Sì. Le aree sensibili sono protette. Chi ha bisogno di anonimato totale lo riceve.",
  },
  {
    q: "Posso uscire?",
    a: "In qualsiasi momento. GenerΛzione non è una setta. È un'appartenenza scelta.",
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="border-b"
      style={{ borderColor: "oklch(1 0 0 / 0.07)" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span
          className="text-sm sm:text-base font-semibold pr-8 group-hover:text-primary transition-colors duration-200"
          style={{ color: open ? "oklch(0.70 0.14 142)" : "oklch(0.85 0.015 142)" }}
        >
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0"
        >
          <Plus
            className="w-4 h-4 transition-colors duration-200"
            style={{ color: open ? "oklch(0.60 0.19 142)" : "oklch(0.50 0.01 142)" }}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "oklch(0.60 0.01 142)" }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="relative px-4 sm:px-6 lg:px-8 py-24 border-t border-primary/10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5">
            FAQ
          </span>
        </motion.div>

        <div>
          {faqs.map((item) => (
            <FAQItem key={item.q} q={item.q} a={item.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
