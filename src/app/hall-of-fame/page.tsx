import type { Metadata } from "next";
import { RankingList } from "@/components/hall/ranking-list";
import { SectionHeading } from "@/components/ui/section-heading";
import { consoles } from "@/data/consoles";

export const metadata: Metadata = {
  title: "Panthéon",
  description:
    "Classement subjectif des consoles légendaires par cote émotionnelle, rareté et impact historique.",
};

export default function HallOfFamePage() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
      <SectionHeading
        index="§ 03"
        eyebrow="Panthéon"
        title={
          <>
            Le classement
            <br />
            des <span className="italic text-brass">inoubliables</span>.
          </>
        }
        lede="Trois axes : la charge émotionnelle, la rareté désirable, l'impact historique. Le score composite n'est pas une vérité, c'est un point de vue — celui d'un conservateur."
      />

      <RankingList consoles={consoles} />
    </section>
  );
}
