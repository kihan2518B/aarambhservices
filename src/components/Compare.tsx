import { comparison } from "@/lib/content";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gold text-ink">
        <Icon name="check" className="h-3.5 w-3.5" />
        <span className="sr-only">Yes</span>
      </span>
    );
  if (value === false)
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-paper-2 text-muted">
        <Icon name="x" className="h-3 w-3" />
        <span className="sr-only">No</span>
      </span>
    );
  return <span className="text-xs font-medium text-muted">{value}</span>;
}

export function Compare() {
  return (
    <section className="section dark-panel">
      <div className="container-x">
        <SectionHeading
          dark
          eyebrow="Why Arambh"
          title="Not a portal. Not a gamble."
          accent="An advisor."
          intro={comparison.intro}
        />
        <Reveal className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-separate border-spacing-0 overflow-hidden rounded-2xl border border-line-dark bg-white/[0.03] text-left">
            <thead>
              <tr className="text-xs uppercase tracking-[0.14em] text-paper/60">
                <th scope="col" className="border-b border-line-dark px-6 py-4 font-medium">
                  What you get
                </th>
                <th scope="col" className="border-b border-line-dark bg-gold/10 px-6 py-4 font-semibold text-gold">
                  Arambh
                </th>
                <th scope="col" className="border-b border-line-dark px-6 py-4 font-medium">
                  Filing portal
                </th>
                <th scope="col" className="border-b border-line-dark px-6 py-4 font-medium">
                  Doing it yourself
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((r, i) => (
                <tr key={r.label} className="text-sm">
                  <th
                    scope="row"
                    className={`px-6 py-4 font-medium text-paper/90 ${
                      i < comparison.rows.length - 1 ? "border-b border-line-dark" : ""
                    }`}
                  >
                    {r.label}
                  </th>
                  <td className={`bg-gold/10 px-6 py-4 ${i < comparison.rows.length - 1 ? "border-b border-line-dark" : ""}`}>
                    <Cell value={r.arambh} />
                  </td>
                  <td className={`px-6 py-4 ${i < comparison.rows.length - 1 ? "border-b border-line-dark" : ""}`}>
                    <Cell value={r.portal} />
                  </td>
                  <td className={`px-6 py-4 ${i < comparison.rows.length - 1 ? "border-b border-line-dark" : ""}`}>
                    <Cell value={r.diy} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </section>
  );
}
