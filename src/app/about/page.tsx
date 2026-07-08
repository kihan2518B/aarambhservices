import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { People } from "@/components/People";
import { Approach } from "@/components/Approach";
import { FounderLetter } from "@/components/FounderLetter";
import { Stats } from "@/components/Stats";
import { Method } from "@/components/Method";
import { Audiences } from "@/components/Audiences";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Arambh Advisory Services LLP is a boutique Ahmedabad advisory, small on purpose. Meet the two founders behind it, and the standards they hold themselves to.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Arambh"
        title="Small on purpose."
        accent="Accountable by design."
        intro="Arambh means beginning. We exist so that a founder's beginning is done right: the structure, the filings, the funding, and a real person who stays on the line long after the certificates arrive."
      />
      <Stats />
      <People />
      <Approach />
      <Method />
      <FounderLetter />
      <Audiences />
    </>
  );
}
