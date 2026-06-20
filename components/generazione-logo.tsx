export function GenerazioneLogo({
  className = "",
  onLight = false,
}: {
  className?: string
  onLight?: boolean
}) {
  return (
    <img
      src="/generazione-logo.png"
      alt="GenerΛzione"
      draggable={false}
      className={`object-contain select-none ${className}`}
      // Dark background: invert(1) turns black text → white,
      // hue-rotate(180deg) brings the inverted green A back to green.
      // Light background: original artwork, no filter.
      style={onLight ? undefined : { filter: "invert(1) hue-rotate(180deg)" }}
    />
  )
}
