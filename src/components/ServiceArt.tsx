// Abstract line art per service, in the First Light palette.
const arts: Record<string, React.ReactNode> = {
  registration: (
    <>
      <rect x="24" y="34" width="52" height="66" rx="6" stroke="var(--color-brand)" strokeWidth="2.5" />
      <path d="M34 50h32M34 62h32M34 74h20" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="76" cy="92" r="16" fill="var(--color-gold)" />
      <path d="m70 92 4 4 8-8" stroke="var(--color-brand-deep)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  tax: (
    <>
      <circle cx="50" cy="60" r="30" stroke="var(--color-brand)" strokeWidth="2.5" />
      <path d="M50 40v20l14 8" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M84 44l6 6m0-6-6 6" stroke="var(--color-gold-deep)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M22 96h76" stroke="var(--color-gold)" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
  recognition: (
    <>
      <circle cx="60" cy="56" r="24" stroke="var(--color-brand)" strokeWidth="2.5" />
      <path d="m60 44 3.5 7.5 8 1-6 5.5 1.5 8-7-4-7 4 1.5-8-6-5.5 8-1L60 44Z" fill="var(--color-gold)" />
      <path d="m48 78-6 22 18-10 18 10-6-22" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  funding: (
    <>
      <path d="M24 92c10-2 12-26 24-26s12 14 22 14 12-30 26-32" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="88" cy="40" r="10" fill="var(--color-gold)" />
      <path d="M84 40h8m-4-4v8" stroke="var(--color-brand-deep)" strokeWidth="2" strokeLinecap="round" />
      <path d="M22 100h76" stroke="var(--color-line)" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
  digital: (
    <>
      <rect x="26" y="34" width="68" height="46" rx="5" stroke="var(--color-brand)" strokeWidth="2.5" />
      <path d="M26 46h68" stroke="var(--color-brand)" strokeWidth="2.5" />
      <circle cx="34" cy="40" r="1.8" fill="var(--color-gold-deep)" />
      <circle cx="41" cy="40" r="1.8" fill="var(--color-gold-deep)" />
      <path d="M40 62h24m-24 8h14" stroke="var(--color-gold-deep)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M48 92h24" stroke="var(--color-brand)" strokeWidth="2.5" strokeLinecap="round" />
    </>
  ),
  strategy: (
    <>
      <circle cx="40" cy="76" r="8" stroke="var(--color-brand)" strokeWidth="2.5" />
      <circle cx="66" cy="48" r="8" stroke="var(--color-brand)" strokeWidth="2.5" />
      <circle cx="88" cy="70" r="8" fill="var(--color-gold)" />
      <path d="m46 70 14-16m12 2 10 10" stroke="var(--color-gold-deep)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 100h76" stroke="var(--color-line)" strokeWidth="2" strokeLinecap="round" />
    </>
  ),
};

export function ServiceArt({ kind, className = "h-28 w-28" }: { kind: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" className={className}>
      {arts[kind] ?? arts.registration}
    </svg>
  );
}
