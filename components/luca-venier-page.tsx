"use client"

import { GenerazioneLogo } from "@/components/generazione-logo"

/* Icone inline, coerenti con lo stile già usato in landing-footer.tsx */
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22.54 6.42A2.78 2.78 0 0 0 20.6 4.46C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
    </svg>
  )
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.5 4.5 2.7 11.9c-1.2.5-1.2 1.2-.2 1.5l4.8 1.5 1.9 5.7c.2.5.4.7.8.7.4 0 .6-.2.8-.4l2-1.9 4 3c.7.4 1.2.2 1.4-.7l2.7-13.1c.3-1.1-.4-1.6-1.4-1.2Z" />
    </svg>
  )
}

function SubstackIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3h18v3H3V3Zm0 5.5h18V12H3V8.5ZM3 14h18v7L12 16.5 3 21v-7Z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.24 2h3.3l-7.2 8.2L23 22h-6.6l-5.2-6.8L5.2 22H1.9l7.7-8.8L1 2h6.8l4.7 6.2L18.24 2Zm-1.15 18h1.8L7 4h-1.9l12 16Z" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M16.6 5.82c-.8-.85-1.24-1.96-1.24-3.12h-3.06v13.9c0 1.48-1.2 2.68-2.68 2.68a2.68 2.68 0 0 1-2.68-2.68 2.68 2.68 0 0 1 2.68-2.68c.28 0 .55.04.8.12v-3.1a5.8 5.8 0 0 0-.8-.06A5.75 5.75 0 0 0 4 16.62a5.75 5.75 0 0 0 5.75 5.75 5.75 5.75 0 0 0 5.75-5.75V9.4a8.9 8.9 0 0 0 5.02 1.54V7.87c-1.1 0-2.13-.35-2.97-.94a5.7 5.7 0 0 1-.95-1.1Z" />
    </svg>
  )
}

function BitcoinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path
        fill="white"
        d="M15.9 10.6c.2-1.4-.9-2.2-2.3-2.7l.5-1.9-1.1-.3-.5 1.9c-.3-.1-.6-.1-.9-.2l.5-1.9-1.1-.3-.5 1.9c-.2-.1-.5-.1-.7-.2v0l-1.5-.4-.3 1.2s.8.2.8.2c.5.1.5.4.5.7l-.6 2.2v0l-.7 2.9c0 .1-.2.3-.5.2 0 0-.8-.2-.8-.2l-.5 1.3 1.4.3c.3.1.5.1.8.2l-.5 2 1.1.3.5-1.9c.3.1.6.2.9.2l-.5 1.9 1.1.3.5-2c1.9.4 3.3.2 3.9-1.5.5-1.3 0-2.1-1-2.6.7-.2 1.2-.6 1.4-1.6Zm-2.5 3.6c-.3 1.3-2.9.6-3.7.4l.6-2.5c.8.2 3.5.6 3.1 2.1Zm.4-3.6c-.3 1.2-2.4.6-3.1.4l.6-2.3c.7.2 2.9.5 2.5 1.9Z"
      />
    </svg>
  )
}

const socialLinks = [
  { href: "https://www.instagram.com/luca_.venier/", icon: InstagramIcon, label: "Instagram" },
  { href: "https://www.tiktok.com/@luca_.venier", icon: TiktokIcon, label: "TikTok" },
  { href: "https://www.youtube.com/watch?si=PkSDe8Zh2dYhXZRM&v=dSYLhSG7TB0&feature=youtu.be", icon: YoutubeIcon, label: "YouTube" },
  { href: "https://substack.com/@lucavenier", icon: SubstackIcon, label: "Substack" },
  { href: "https://t.me/lucavenier", icon: TelegramIcon, label: "Telegram" },
  { href: "https://coindrop.to/lucavenier", icon: BitcoinIcon, label: "Supporta il lavoro" },
]

const mainLinks = [
  { href: "https://www.youtube.com/watch?si=PkSDe8Zh2dYhXZRM&v=dSYLhSG7TB0&feature=youtu.be", icon: YoutubeIcon, iconColor: "text-red-600", label: "GenerΛzione Podcast #1 (fuori ora)" },
  { href: "https://substack.com/@lucavenier", icon: SubstackIcon, iconColor: "text-orange-600", label: "Substack - Articoli & contenuti lunghi" },
  { href: "https://t.me/lucavenier", icon: TelegramIcon, iconColor: "text-sky-500", label: "Canale Telegram" },
  { href: "https://www.instagram.com/luca_.venier/", icon: InstagramIcon, iconColor: "text-pink-600", label: "Instagram" },
  { href: "https://x.com/_lucavenier", icon: XIcon, iconColor: "text-zinc-900", label: "X" },
  { href: "https://www.tiktok.com/@luca_.venier", icon: TiktokIcon, iconColor: "text-zinc-900", label: "TikTok" },
]

export function LucaVenierPage() {
  return (
    <main
      className="noise relative min-h-screen flex flex-col items-center px-4 py-12 sm:py-16 overflow-hidden"
      style={{ background: "#070b07", color: "#f0f5f0" }}
    >
      <div className="aurora-blob aurora-1 top-[-10%] left-[10%] pointer-events-none" />
      <div className="aurora-blob aurora-2 top-[30%] right-[5%] pointer-events-none" />
      <div className="aurora-blob aurora-3 bottom-[5%] left-[30%] pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center">
        <a href="/" className="mb-6">
          <GenerazioneLogo className="h-6 w-auto" />
        </a>

        {/* Avatar */}
        <div className="w-28 h-28 rounded-full overflow-hidden mb-4 gradient-border">
          <img
            src="/luca venier.png"
            alt="Luca Venier"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Name */}
        <h1
          className="text-xl font-black uppercase tracking-tight text-white mb-5"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          Luca Venier
        </h1>

        {/* Social icons row */}
        <div className="flex items-center gap-5 mb-8">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/60 hover:text-primary transition-colors"
            >
              <s.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Main link buttons */}
        <div className="w-full flex flex-col gap-3">
          {mainLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong relative flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full hover:bg-primary/10 hover:shadow-[0_0_25px_oklch(0.55_0.185_142_/_0.25)] transition-all duration-300"
            >
              <l.icon className={`w-5 h-5 absolute left-5 ${l.iconColor}`} />
              <span
                className="text-sm font-bold uppercase tracking-wide text-white text-center"
                style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
              >
                {l.label}
              </span>
            </a>
          ))}
        </div>

        {/* Support section */}
        <div className="w-full border-t border-primary/10 mt-10 pt-8 flex flex-col items-center">
          <h2
            className="text-lg font-black uppercase tracking-tight text-white mb-5"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            Supporta il <span className="text-gradient-green">mio lavoro</span>
          </h2>
          <a
            href="https://coindrop.to/lucavenier"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-green flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <span
              className="text-sm font-black uppercase tracking-wide"
              style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
            >
              Indirizzi Crypto ↓
            </span>
          </a>
        </div>
      </div>
    </main>
  )
}
