"use client"

import { useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import { Lock, ArrowUpRight } from "lucide-react"

/*
  Each active role card is media-ready: drop the final artwork into /public
  and update the `image` path below. Same for coming-soon roles.
*/
const activeRoles = [
  { id: 1, label: "GID", number: "01", image: "/placeholder.jpg", href: "/gid" },
  { id: 3, label: "Clippers\nArmada", number: "02", image: "/placeholder.jpg", href: "/clippers-armada" },
]

const comingSoonRoles = [
  { id: 4, label: "Influencer\nNetwork", image: "/placeholder.jpg" },
  { id: 5, label: "Legal\nSquad", image: "/placeholder.jpg" },
  { id: 6, label: "Student\nIntellectuals", image: "/placeholder.jpg" },
  { id: 7, label: "Health & Fitness\nBoxing etc.", image: "/placeholder.jpg" },
]

/* Staggered word reveal for headings */
function WordReveal({
  words,
  className = "",
  accentIndex,
}: {
  words: string[]
  className?: string
  accentIndex?: number
}) {
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className={`inline-block ${i === accentIndex ? "text-gradient-green" : ""}`}
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

/* Image-filled card with 3D tilt, cursor spotlight, and media zoom */
function RoleCard({ role, index }: { role: (typeof activeRoles)[number]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [transform, setTransform] = useState("")
  const [spot, setSpot] = useState({ x: 50, y: 50, visible: false })

  const onMove = useCallback((e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotX = (0.5 - py) * 8
    const rotY = (px - 0.5) * 8
    setTransform(`perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`)
    setSpot({ x: px * 100, y: py * 100, visible: true })
  }, [])

  const onLeave = useCallback(() => {
    setTransform("perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)")
    setSpot((s) => ({ ...s, visible: false }))
  }, [])

  return (
    <motion.a
      ref={ref}
      href={role.href}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transform, transition: "transform 0.15s ease-out" }}
      className="group relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer active:scale-[0.98] shadow-[0_8px_30px_-8px_oklch(0.30_0.05_142_/_0.25)] hover:shadow-[0_20px_50px_-12px_oklch(0.45_0.15_142_/_0.40)] transition-shadow duration-500"
    >
      {/* Media slot — swap src in the data above */}
      <img
        src={role.image}
        alt={role.label.replace("\n", " ")}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        draggable={false}
      />

      {/* Readability gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-500" />
      {/* Green wash on hover */}
      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors duration-500" />

      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          opacity: spot.visible ? 1 : 0,
          background: `radial-gradient(260px circle at ${spot.x}% ${spot.y}%, oklch(1 0 0 / 0.10), transparent 70%)`,
        }}
      />

      {/* Number chip */}
      <span className="absolute top-4 left-4 text-xs font-mono tracking-widest text-white/80 bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1 border border-white/15">
        {role.number}
      </span>
      {/* Arrow */}
      <span className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </span>

      {/* Label */}
      <div className="absolute bottom-0 left-0 right-0 p-5 text-left">
        <span
          className="block text-white font-black text-lg uppercase tracking-widest whitespace-pre-line leading-snug transition-transform duration-300 group-hover:-translate-y-1"
          style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
        >
          {role.label}
        </span>
        <span className="block mt-2 h-px w-10 bg-primary group-hover:w-2/3 transition-all duration-500" />
      </div>
    </motion.a>
  )
}

export function RolesGrid() {
  return (
    /* White zone — revealed by the scroll-driven sheet */
    <section
      id="roles"
      className="relative z-10 bg-white px-4 sm:px-6 lg:px-8 pb-28 pt-24 overflow-hidden"
    >
      {/* Faint green tint top-right for depth */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, oklch(0.60 0.19 142 / 0.06), transparent 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-[10px] font-bold uppercase tracking-[0.3em] text-primary border border-primary/25 bg-primary/5 rounded-full px-4 py-1.5 mb-6"
          >
            Scegli la tua area
          </motion.span>
          <h2
            className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-zinc-900"
            style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
          >
            <WordReveal words={["Il", "Network"]} accentIndex={1} />
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-zinc-500 max-w-md mx-auto leading-relaxed"
          >
            Ogni area è una community dedicata. Trova la tua e inizia a costruire.
          </motion.p>
        </div>

        {/* Active roles — image-filled cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
          {activeRoles.map((role, i) => (
            <RoleCard key={role.id} role={role} index={i} />
          ))}
        </div>

        {/* Coming soon separator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-4 mb-8 px-1"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-zinc-200" />
          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-400">
            <Lock className="w-3 h-3" />
            In arrivo
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-zinc-200" />
        </motion.div>

        {/* Coming soon — image slots, frosted + grayscale until launch */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {comingSoonRoles.map((role, i) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.5 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-default select-none shadow-sm"
            >
              <img
                src={role.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover grayscale blur-[2px] scale-105 opacity-60 group-hover:opacity-80 group-hover:blur-[1px] transition-all duration-500"
                draggable={false}
              />
              <div className="absolute inset-0 bg-white/40" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span
                  className="block text-white/90 font-black text-[11px] uppercase tracking-widest whitespace-pre-line leading-snug"
                  style={{ fontFamily: "var(--font-montserrat), sans-serif" }}
                >
                  {role.label}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.15em] text-zinc-600 bg-white/85 backdrop-blur-sm rounded-full px-2 py-1">
                  <Lock className="w-2.5 h-2.5" />
                  Soon
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
