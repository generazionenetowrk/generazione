"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

/*
  Scroll-driven section reveal (Apple-style).

  StickyBackdrop pins the dark zone so it stays in place while the next
  section scrolls up and covers it. WhiteSheet is that next section: it
  arrives slightly scaled down with large rounded corners, then expands
  to full width and squares off as it takes over the screen.

  IMPORTANT: scroll progress is measured from a zero-height sentinel that
  never transforms — measuring the animated element itself creates a
  feedback loop (transform moves the element → progress changes → transform
  changes → ...) which shows up as violent flickering.
*/

export function StickyBackdrop({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const [top, setTop] = useState(0)

  // Pin so the block's bottom rests at the viewport bottom, whatever its height
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const update = () => setTop(Math.min(0, window.innerHeight - el.offsetHeight))
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener("resize", update)
    return () => {
      ro.disconnect()
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <div ref={ref} className="sticky z-0" style={{ top }}>
      {children}
    </div>
  )
}

export function WhiteSheet({ children }: { children: React.ReactNode }) {
  // Static measuring point — sits exactly where the sheet's top edge is
  // in layout, but never moves with the animation.
  const sentinelRef = useRef<HTMLDivElement>(null)

  // 0 → sheet entering the viewport, 1 → sheet has reached the top
  const { scrollYProgress } = useScroll({
    target: sentinelRef,
    offset: ["start end", "start 0.08"],
  })

  const radius = useTransform(scrollYProgress, [0, 1], [48, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="h-px -mb-px" />
      <motion.div
        style={{
          borderTopLeftRadius: radius,
          borderTopRightRadius: radius,
          scale,
          transformOrigin: "top center",
          willChange: "transform, border-radius",
        }}
        className="relative z-10 bg-white overflow-hidden shadow-[0_-24px_80px_oklch(0_0_0_/_0.55),0_-1px_0_oklch(0.70_0.15_142_/_0.25)]"
      >
        {children}
      </motion.div>
    </>
  )
}
