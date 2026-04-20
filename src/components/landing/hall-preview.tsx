"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { sortByEmotional } from "@/data/consoles";
import { SectionHeading } from "@/components/ui/section-heading";
import { pad2 } from "@/lib/format";

export function HallPreview() {
  const top = sortByEmotional().slice(0, 5);

  return (
    <section className="relative mx-auto w-full max-w-[1400px] px-6 py-28 lg:px-10">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <SectionHeading
          index="§ 03"
          eyebrow="Panthéon"
          title={
            <>
              Les machines
              <br />
              qu&apos;on <span className="italic text-brass">n&apos;oublie</span>
              <br />
              pas.
            </>
          }
          lede="Un classement subjectif par cote émotionnelle. Pondéré par l'impact historique, la portée culturelle et la rareté désirable."
        />

        <ol className="flex flex-col">
          {top.map((c, i) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link
                href={`/consoles/${c.slug}`}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-6 border-t border-bone/10 py-6 transition-colors hover:bg-obsidian/40 md:gap-10"
              >
                <span className="font-mono text-2xl text-ash group-hover:text-brass transition-colors">
                  {pad2(i + 1)}
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-2xl text-ivory leading-tight md:text-4xl">
                    {c.name}
                  </span>
                  <span className="mt-2 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ash">
                    <span>{c.manufacturer}</span>
                    <span>·</span>
                    <span>{c.year}</span>
                    <span>·</span>
                    <span>Gén. {c.generation}</span>
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display text-5xl text-ivory">
                    {c.emotionalScore}
                  </span>
                  <span className="font-mono text-xs text-ash">/100</span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>

      <div className="mt-16 flex justify-end">
        <Link
          href="/hall-of-fame"
          className="inline-flex items-center gap-3 border border-bone/20 px-6 py-3 text-xs uppercase tracking-[0.22em] font-mono text-bone hover:border-brass/60 hover:text-brass transition-colors"
        >
          Ouvrir le panthéon entier
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
