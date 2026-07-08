import Link from "next/link";
import { caseStudy } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

export function CaseStudy() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">{caseStudy.eyebrow}</p>
            <h2 className="h-display mt-5 text-3xl sm:text-4xl lg:text-[2.6rem]">
              {caseStudy.headline}
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-muted">{caseStudy.context}</p>
            <Link href="/contact" className="btn btn-primary mt-8">
              Check your eligibility <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="dark-panel rounded-3xl p-8 lg:p-10">
              <p className="eyebrow eyebrow-dark">What the founder walked away with</p>
              <ul className="mt-6 space-y-5">
                {caseStudy.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[0.95rem] leading-snug text-paper/90">{o}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 border-t border-line-dark pt-6 text-sm text-paper/60">
                Every file is different. On the free call we tell you honestly what your timeline
                looks like, before you commit to anything.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
