import { founderLetter } from "@/lib/content";
import { Reveal } from "./Reveal";

export function FounderLetter() {
  return (
    <section className="section bg-paper-2/60">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl">
          <p className="eyebrow justify-center text-center">{founderLetter.eyebrow}</p>
          <div className="card mt-8 p-8 sm:p-12">
            {founderLetter.body.map((para, i) => (
              <p
                key={i}
                className={`leading-relaxed text-ink-soft ${i > 0 ? "mt-5" : ""} ${
                  i === founderLetter.body.length - 1 ? "h-serif-accent text-xl text-brand" : ""
                }`}
              >
                {para}
              </p>
            ))}
            <div className="mt-8 border-t border-line pt-6">
              <p className="h-serif-accent text-2xl text-ink">{founderLetter.signName}</p>
              <p className="mt-1 text-sm text-muted">{founderLetter.signoff}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
