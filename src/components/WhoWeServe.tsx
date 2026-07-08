import Link from "next/link";
import { segments, audiences } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem, Reveal } from "./Reveal";
import { Icon } from "./Icons";

export function WhoWeServe() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who we serve"
          title="Built for the people"
          accent="doing the building."
          intro="From a first idea scribbled at midnight to an MSME hiring its fiftieth person."
        />

        <Stagger className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {segments.map((s) => (
            <StaggerItem key={s.title}>
              <div className="card h-full p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="font-display mt-4 text-[0.98rem] font-semibold tracking-tight text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-sm leading-snug text-muted">{s.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="mt-6 grid gap-4 md:grid-cols-2" delay={0.1}>
          {audiences.map((a) => (
            <div key={a.tag} className="dark-panel flex h-full flex-col rounded-3xl p-8">
              <span className="self-start rounded-full border border-line-dark px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold">
                {a.tag}
              </span>
              <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight text-paper">{a.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-paper/70">{a.detail}</p>
              <Link href="/contact" className="btn btn-gold mt-6 self-start !px-5 !py-2.5 text-sm">
                {a.cta} <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
