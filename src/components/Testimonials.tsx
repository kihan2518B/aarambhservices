import { testimonials } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./Icons";

export function Testimonials() {
  return (
    <section className="section bg-paper-2/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="In their words"
          title="Trusted by founders"
          accent="who dream big."
          intro="Real clients, real outcomes, in their own words. Names shared with permission."
        />
        <Stagger className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="break-inside-avoid">
              <figure className="card p-2">
                <div className="px-5 pt-5 pb-4">
                  <div className="flex items-center justify-between gap-3">
                    <Icon name="quote" className="h-6 w-6 text-gold-deep" />
                    <span className="rounded-full bg-brand-tint px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-brand">
                      {t.metric}
                    </span>
                  </div>
                  <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-ink-soft">
                    “{t.quote}”
                  </blockquote>
                </div>
                <figcaption className="rounded-[0.9rem] bg-paper-2 px-5 py-4">
                  <p className="font-display text-sm font-semibold text-ink">{t.name}</p>
                  <p className="mt-0.5 text-xs text-muted">
                    {t.role} · {t.place}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
