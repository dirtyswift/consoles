"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sortByYear } from "@/data/consoles";
import { SectionHeading } from "@/components/ui/section-heading";

export function TimelinePreview() {
  const items = sortByYear();

  return (
    <section className="relative border-y border-bone/8 bg-obsidian/40">
      <div className="mx-auto w-full max-w-[1400px] px-6 py-24 lg:px-10">
        <SectionHeading
          index="§ 02"
          eyebrow="Chronologie"
          title={
            <>
              1977 <span className="italic text-brass">—</span> 1998.
              <br />
              Vingt-et-un ans d&apos;inventions.
            </>
          }
          lede="Chaque machine a une date. Souvent plusieurs : Japon, États-Unis, Europe. La chronologie lit ces écarts comme les strates d'une même histoire."
        />

        <div className="relative mt-20">
          <div className="absolute top-6 left-0 right-0 h-[1px] bg-bone/10" aria-hidden />
          <ol className="relative grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-10">
            {items.map((c, i) => (
              <motion.li
                key={c.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start gap-3"
              >
                <span
                  className="relative -mt-2 h-4 w-4 rounded-full border"
                  style={{ borderColor: c.accentColor, background: `${c.accentColor}22` }}
                >
                  <span
                    className="absolute inset-1 rounded-full"
                    style={{ background: c.accentColor }}
                  />
                </span>
                <Link href={`/consoles/${c.slug}`} className="group flex flex-col gap-1">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ash">
                    {c.year}
                  </span>
                  <span className="font-display text-lg leading-tight text-ivory group-hover:text-brass transition-colors">
                    {c.name.replace("Nintendo Entertainment System", "NES")}
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ash">
                    Gén. {c.generation}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-16 flex justify-end">
          <Link
            href="/timeline"
            className="inline-flex items-center gap-3 border border-bone/20 px-6 py-3 text-xs uppercase tracking-[0.22em] font-mono text-bone hover:border-brass/60 hover:text-brass transition-colors"
          >
            Ouvrir la chronologie complète
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
