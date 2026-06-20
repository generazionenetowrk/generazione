"use client"

import { GenerazioneLogo } from "@/components/generazione-logo"

const links = [
  { label: "Home", href: "/" },
  { label: "Sezioni", href: "#sezioni" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Unisciti", href: "#apply" },
  { label: "FAQ", href: "#faq" },
]

export function LandingFooter() {
  return (
    <footer
      className="border-t px-4 sm:px-6 lg:px-8 py-10"
      style={{ background: "#050805", borderColor: "oklch(0.60 0.19 142 / 0.10)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <a href="/">
          <GenerazioneLogo className="h-6 w-auto" />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-semibold transition-colors duration-200"
              style={{ color: "oklch(0.50 0.01 142)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "oklch(0.75 0.01 142)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.50 0.01 142)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <p className="text-xs" style={{ color: "oklch(0.35 0.01 142)" }}>
          © {new Date().getFullYear()} GenerΛzione. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  )
}
