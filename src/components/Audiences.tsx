import Link from "next/link";
import { audiences } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

// Two-path CTA cards. Also embedded within WhoWeServe on the home page.
export function Audiences() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <Reveal className="grid gap-4 md:grid-cols-2">
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
