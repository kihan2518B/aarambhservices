import { help } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./Icons";

export function HowWeHelp() {
  return (
    <section className="section bg-paper-2/60">
      <div className="container-x">
        <SectionHeading
          eyebrow="The problem"
          title="From carrying it alone"
          accent="to handled."
          intro="The paperwork does not build your business. It just exhausts the person who should be building it. Here is the trade we offer."
        />
        <Stagger className="mt-12 grid gap-5 md:grid-cols-2">
          {help.map((h) => (
            <StaggerItem key={h.pain}>
              <div className="card flex h-full flex-col gap-4 p-7 sm:flex-row sm:items-center">
                <p className="flex-1 text-sm leading-snug text-muted line-through decoration-line decoration-2">
                  {h.pain}
                </p>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold text-ink">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
                <p className="flex-1 text-sm font-semibold leading-snug text-ink">{h.gain}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
