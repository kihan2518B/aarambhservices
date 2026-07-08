import type { SVGProps } from "react";

const paths: Record<string, React.ReactNode> = {
  arrow: <path d="M4 12h16m0 0-6-6m6 6-6 6" />,
  arrowUpRight: <path d="M7 17 17 7m0 0H8m9 0v9" />,
  check: <path d="m5 13 4 4L19 7" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  phone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </>
  ),
  whatsapp: (
    <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3Zm4.2 12.3c-.2.6-1.2 1.1-1.7 1.2-.4 0-.9.2-3.1-.7-2.6-1.1-4.3-3.8-4.4-4-.1-.2-1-1.4-1-2.7 0-1.3.7-1.9.9-2.2.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6c-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.5 1.3 2.7 1.7 3 1.9.4.2.6.1.8-.1l1-1.2c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.2 1.3Z" />
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      <path d="M16 9h3a1 1 0 0 1 1 1v11M2 21h20M8 7h2m-2 4h2m-2 4h2" />
    </>
  ),
  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10 2.1 2.1m0-14.2-2.1 2.1m-10 10-2.1 2.1" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  handshake: (
    <path d="m11 17 2 2a2 2 0 0 0 3-3m-3 3-2-2m5-1 1.5 1.5a2 2 0 0 0 3-2.5L17 10l-2.5-2.5a3 3 0 0 0-4 0L9 9 6 6 2 10l3 3m12-3-3.5 3.5a1.5 1.5 0 0 1-2-2L14 9" />
  ),
  trending: <path d="m3 17 6-6 4 4 8-8m0 0h-5m5 0v5" />,
  shield: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
  file: (
    <>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </>
  ),
  rupee: <path d="M6 4h12M6 8h12m-6.5 0A4.5 4.5 0 0 1 7 12.5H6l7 7.5" />,
  quote: (
    <path d="M8 6C5.5 7.5 4 10 4 13.5V18h6v-6H6.8c.2-2 1.3-3.6 3.2-4.7L8 6Zm10 0c-2.5 1.5-4 4-4 7.5V18h6v-6h-3.2c.2-2 1.3-3.6 3.2-4.7L18 6Z" />
  ),
};

export type IconName = keyof typeof paths;

export function Icon({
  name,
  className = "h-5 w-5",
  ...props
}: { name: string } & SVGProps<SVGSVGElement>) {
  const filled = name === "whatsapp" || name === "quote";
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}
