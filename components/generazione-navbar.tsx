"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import { Menu, X } from "lucide-react"
import { GenerazioneLogo } from "@/components/generazione-logo"

export function GenerazioneNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4"
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 origin-left shadow-[0_0_8px_oklch(0.60_0.19_142_/_0.6)]"
        style={{ scaleX: progress }}
      />

      {/* Floating pill */}
      <div
        className={`mx-auto transition-all duration-500 ease-out ${
          scrolled
            ? "max-w-3xl mt-3 rounded-2xl"
            : "max-w-6xl mt-0 rounded-none"
        }`}
        style={{
          backgroundColor: scrolled ? "rgba(18, 20, 18, 0.97)" : "transparent",
          border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
          boxShadow: scrolled ? "0 12px 40px rgba(0,0,0,0.60)" : "none",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
              <GenerazioneLogo className="h-7 w-auto" />
            </a>

            <nav className="hidden md:flex items-center gap-1">
              <a
                href="#manifesto"
                className="group relative px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-md"
              >
                Manifesto
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
              <a
                href="/members?gate=1"
                className="group relative px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-md"
              >
                Sezioni
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
              <a
                href="#faq"
                className="group relative px-4 py-2 text-sm font-semibold text-white/70 hover:text-white transition-colors rounded-md"
              >
                FAQ
                <span className="absolute bottom-1 left-4 right-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
              <a
                href="#apply"
                className="ml-3 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider glass-green text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-[0_0_25px_oklch(0.55_0.185_142_/_0.45)]"
              >
                Unisciti oggi
              </a>
            </nav>

            <button
              className="md:hidden p-2 rounded-md text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 py-4 flex flex-col gap-2 border-t border-white/10">
                <a
                  href="#manifesto"
                  className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Manifesto
                </a>
                <a
                  href="/members?gate=1"
                  className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  Sezioni
                </a>
                <a
                  href="#faq"
                  className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-colors rounded-md"
                  onClick={() => setMobileOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="#apply"
                  className="mt-2 px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-center glass-green text-primary transition-all duration-300 hover:bg-primary hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  Unisciti oggi
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
