import type { Metadata } from "next";
import { consoles } from "@/data/consoles";
import { CatalogFilters } from "@/components/consoles/catalog-filters";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Catalogue des consoles",
  description:
    "Les dix consoles légendaires du cabinet, filtrables par génération et triables par année, cote ou rareté.",
};

export default function ConsolesPage() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-20 lg:px-10">
      <SectionHeading
        index="§ 01"
        eyebrow="Catalogue complet"
        title={
          <>
            Dix pièces,
            <br />
            <span className="italic text-brass">vingt-et-un</span> ans
            d&apos;histoire.
          </>
        }
        lede="Chaque machine est classée, datée, mise en perspective. Filtrez par génération, triez selon l'angle qui vous intéresse — la chronologie, l'émotion, la rareté."
      />

      <div className="mt-16">
        <CatalogFilters consoles={consoles} />
      </div>
    </section>
  );
}
