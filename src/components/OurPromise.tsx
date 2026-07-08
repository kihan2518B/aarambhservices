import { promises } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";

export function OurPromise() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our promise"
          title="Four commitments,"
          accent="in writing."
          intro="Not values on a wall. Working rules you can hold us to, from the first call onwards."
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <StaggerItem key={p.title}>
              <div className="card h-full p-7">
                <span className="font-display text-sm font-semibold text-gold-deep">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-3 text-xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
