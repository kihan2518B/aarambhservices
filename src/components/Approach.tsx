import { promises } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

// What we believe an advisor owes a founder. Rendered from promises data.
export function Approach() {
  return (
    <section className="section dark-panel">
      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="What we believe"
          title="An advisor owes you"
          accent="more than filings."
          intro="These are the standards we hold ourselves to, and the reason founders stay with us long after the certificates arrive."
        />
        <Stagger className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {promises.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="flex gap-5 border-t border-line-dark pt-6">
                <span className="font-display text-sm font-semibold text-gold">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-paper">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">{p.detail}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
