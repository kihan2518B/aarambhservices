// Official Arambh mark, redrawn as SVG: twin ascending peaks with a growth arrow.
// Gold peak-arrow (#d9a637 family) crossing a bronze peak, as in the logo.
export function AscentMark({
  className = "h-9 w-9",
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  const gold = "var(--color-gold)";
  const bronze = onDark ? "var(--color-paper)" : "var(--color-brand)";
  return (
    <svg viewBox="0 0 48 44" fill="none" aria-hidden="true" className={className}>
      {/* Bronze peak with inner peak */}
      <path
        d="M21 41 L32.5 20 L44 41"
        stroke={bronze}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.5 41 L32.5 31.5 L37.5 41"
        stroke={bronze}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Gold peak rising into an arrow */}
      <path
        d="M4 41 L15.5 11 L22.5 22.5 L36 5"
        stroke={gold}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29.5 3.5 L40.5 2 L37 12.5 Z" fill={gold} />
    </svg>
  );
}
