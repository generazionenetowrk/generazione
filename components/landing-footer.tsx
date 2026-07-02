"use client"

import { GenerazioneLogo } from "@/components/generazione-logo"

const links = [
  { label: "Home", href: "/" },
  { label: "Sezioni", href: "#sezioni" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Unisciti", href: "#apply" },
  { label: "FAQ", href: "#faq" },
]

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/generazione.network/",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@generazione.network",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
]

export function LandingFooter() {
  return (
    <footer
      className="border-t px-4 sm:px-6 lg:px-8 py-10"
      style={{ background: "#050805", borderColor: "oklch(0.60 0.19 142 / 0.10)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        {/* Top row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-6">
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

        {/* Bottom row — social + email */}
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8">
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="transition-colors duration-200"
                style={{ color: "oklch(0.50 0.01 142)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.75 0.19 142)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "oklch(0.50 0.01 142)")}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <span style={{ color: "oklch(0.30 0.01 142)" }} className="hidden sm:block text-xs">·</span>

          <a
            href="mailto:info@generazione.network"
            className="text-xs font-medium transition-colors duration-200"
            style={{ color: "oklch(0.50 0.01 142)" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "oklch(0.75 0.01 142)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "oklch(0.50 0.01 142)")}
          >
            Contattaci: info@generazione.network
          </a>
        </div>
      </div>
    </footer>
  )
}
