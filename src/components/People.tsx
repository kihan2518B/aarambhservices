import { team, company } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./Icons";

export function People() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow={team.eyebrow}
          title="Two founders."
          accent="One number you can actually call."
          intro={team.intro}
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {team.members.map((m) => (
            <StaggerItem key={m.name}>
              <div className="card flex h-full flex-col p-8">
                <div className="flex items-center gap-4">
                  <span className="font-display flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-lg font-semibold text-gold">
                    {m.initials}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                      {m.name}
                    </h3>
                    <p className="text-sm text-muted">{m.role}</p>
                  </div>
                </div>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">{m.bio}</p>
                <a
                  href={company.phoneHref}
                  className="link-underline mt-6 inline-flex items-center gap-2 self-start text-sm text-ink"
                >
                  <Icon name="phone" className="h-4 w-4" /> {company.phone}
                </a>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
