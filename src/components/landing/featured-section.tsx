import { consoles } from "@/data/consoles";
import { ConsoleCard } from "@/components/consoles/console-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/link-button";

export function FeaturedSection() {
  const featured = consoles.slice(0, 6);
  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-6 py-28 lg:px-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <SectionHeading
          index="§ 01"
          eyebrow="Sélection d'entrée"
          title={
            <>
              Six pièces <span className="italic text-brass">maîtresses</span>
              <br />
              de la collection.
            </>
          }
          lede="Un premier passage dans le cabinet. Chaque machine ouvre sur sa fiche dédiée — anecdotes, partitions techniques, jeux fondateurs."
        />
        <LinkButton href="/consoles" variant="ghost">
          Voir les 10 fiches
        </LinkButton>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featured.map((c, i) => (
          <ConsoleCard key={c.id} console={c} index={i} />
        ))}
      </div>
    </section>
  );
}
