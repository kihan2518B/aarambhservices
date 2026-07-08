import Link from "next/link";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

export function PageHeader({
  eyebrow,
  title,
  accent,
  intro,
  crumb,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  crumb?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden pt-[7.5rem] pb-12 lg:pt-[9.5rem] lg:pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50rem 24rem at 85% -20%, rgba(217,166,55,0.16), transparent 60%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          {crumb ? (
            <Link
              href={crumb.href}
              className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink"
            >
              <Icon name="arrow" className="h-4 w-4 rotate-180" /> {crumb.label}
            </Link>
          ) : null}
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h-display mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-[3.4rem]">
            {title}
            {accent ? ` ${accent}` : null}
          </h1>
          {intro ? (
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{intro}</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
