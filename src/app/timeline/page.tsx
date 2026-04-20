import type { Metadata } from "next";
import { TimelineView } from "@/components/timeline/timeline-view";
import { SectionHeading } from "@/components/ui/section-heading";
import { sortByYear } from "@/data/consoles";

export const metadata: Metadata = {
  title: "Chronologie",
  description:
    "De l'Atari 2600 en 1977 à la Dreamcast en 1998 — vingt-et-un ans d'invention, une chronologie détaillée région par région.",
};

export default function TimelinePage() {
  const items = sortByYear();
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
      <SectionHeading
        index="§ 02"
        eyebrow="Chronologie complète"
        title={
          <>
            <span className="italic text-brass">MCMLXXVII</span>
            <br />
            — MCMXCVIII.
          </>
        }
        lede="Lire l'histoire de ces machines par les dates, c'est la lire trois fois : une fois au Japon, une fois aux USA, une fois en Europe. Trois sorties, trois géographies, trois générations de joueurs."
      />

      <TimelineView consoles={items} />
    </section>
  );
}
