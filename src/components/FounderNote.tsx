import Link from "next/link";
import { founderLetter } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

// Compact founder message for the home page. The full letter lives on /about.
export function FounderNote() {
  return (
    <section className="section pt-0">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="card p-8 sm:p-12">
            <span className="font-display mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-lg font-semibold text-gold">
              BD
            </span>
            <blockquote className="mt-7 text-lg leading-relaxed text-ink-soft sm:text-xl">
              &ldquo;Most founders do not fail at the idea. They get worn down by everything around
              it. We built Arambh to carry that weight: one advisor, a fee agreed up front, and
              deadlines we actually keep.&rdquo;
            </blockquote>
            <p className="font-display mt-7 text-base font-semibold tracking-tight text-ink">
              {founderLetter.signName}
            </p>
            <p className="mt-1 text-sm text-muted">{founderLetter.signoff}</p>
            <Link
              href="/about"
              className="link-underline mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
            >
              Read the full note <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
