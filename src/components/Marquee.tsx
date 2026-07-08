import { institutions } from "@/lib/content";

export function Marquee() {
  const row = [...institutions, ...institutions];
  return (
    <section aria-label="Institutions we work with" className="border-y border-line bg-white py-6">
      <p className="mb-4 text-center text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-muted">
        Working within India&rsquo;s key institutional frameworks
      </p>
      <div className="overflow-hidden" style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
        <div className="marquee-track items-center gap-12 pr-12">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              aria-hidden={i >= institutions.length}
              className="font-display whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-muted"
            >
              {name}
              <span className="ml-12 inline-block h-1.5 w-1.5 rounded-full bg-gold-deep align-middle" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
