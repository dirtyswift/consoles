import type { Metadata } from "next";
import { CompareTool } from "@/components/compare/compare-tool";
import { SectionHeading } from "@/components/ui/section-heading";
import { consoles } from "@/data/consoles";

export const metadata: Metadata = {
  title: "Comparer",
  description:
    "Comparez jusqu'à quatre consoles côte à côte — caractéristiques techniques, cote émotionnelle, rareté, prix.",
};

export default function ComparePage() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
      <SectionHeading
        index="§ 04"
        eyebrow="Table de comparaison"
        title={
          <>
            Deux à quatre
            <br />
            machines, <span className="italic text-brass">côte à côte</span>.
          </>
        }
        lede="Outil de lecture croisée : partitions techniques, scores, jeux iconiques, dates régionales. Utile pour trancher, ou simplement pour voir ce que chaque constructeur a choisi de ne pas faire."
      />

      <CompareTool consoles={consoles} />
    </section>
  );
}
