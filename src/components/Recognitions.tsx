import { credentials } from "@/lib/content";
import { Stagger, StaggerItem } from "./Reveal";
import { Icon } from "./Icons";

export function Recognitions() {
  return (
    <section aria-label="Credentials" className="py-10">
      <div className="container-x">
        <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {credentials.map((c) => (
            <StaggerItem key={c.title}>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand">
                  <Icon name="shield" className="h-4 w-4" />
                </span>
                <span>
                  <span className="font-display block text-sm font-semibold tracking-tight text-ink">
                    {c.title}
                  </span>
                  <span className="text-xs leading-snug text-muted">{c.detail}</span>
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
