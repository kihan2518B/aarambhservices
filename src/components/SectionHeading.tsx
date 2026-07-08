import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  accent,
  intro,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "eyebrow-dark" : ""} ${center ? "justify-center" : ""}`}>
        {eyebrow}
      </p>
      <h2
        className={`h-display mt-5 text-3xl sm:text-4xl lg:text-[2.6rem] ${
          dark ? "text-paper" : "text-ink"
        }`}
      >
        {title}
        {accent ? ` ${accent}` : null}
      </h2>
      {intro ? (
        <p className={`mt-5 text-base leading-relaxed ${dark ? "text-paper/70" : "text-muted"}`}>
          {intro}
        </p>
      ) : null}
    </Reveal>
  );
}
