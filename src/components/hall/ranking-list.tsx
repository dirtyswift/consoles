"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Console } from "@/lib/types";
import { cn } from "@/lib/cn";
import { pad2 } from "@/lib/format";

type Axis = "composite" | "emotional" | "rarity" | "generation";

const axes: { key: Axis; label: string }[] = [
  { key: "composite", label: "Score composite" },
  { key: "emotional", label: "Émotion" },
  { key: "rarity", label: "Rareté" },
  { key: "generation", label: "Génération" },
];

export function RankingList({ consoles }: { consoles: Console[] }) {
  const [axis, setAxis] = useState<Axis>("composite");

  const sorted = useMemo(() => {
    const arr = [...consoles];
    const compositeScore = (c: Console) =>
      Math.round(c.emotionalScore * 0.6 + c.rarityScore * 0.4);

    switch (axis) {
      case "composite":
        return arr.sort((a, b) => compositeScore(b) - compositeScore(a));
      case "emotional":
        return arr.sort((a, b) => b.emotionalScore - a.emotionalScore);
      case "rarity":
        return arr.sort((a, b) => b.rarityScore - a.rarityScore);
      case "generation":
        return arr.sort((a, b) => a.generation - b.generation || a.year - b.year);
    }
  }, [consoles, axis]);

  const compositeScore = (c: Console) =>
    Math.round(c.emotionalScore * 0.6 + c.rarityScore * 0.4);

  return (
    <div className="mt-16 flex flex-col gap-10">
      <div className="flex flex-wrap items-center gap-3 border-y border-bone/8 py-5">
        <span className="label-eyebrow">Classer selon</span>
        {axes.map((a) => (
          <button
            key={a.key}
            onClick={() => setAxis(a.key)}
            className={cn(
              "border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors",
              axis === a.key
                ? "border-brass text-brass"
                : "border-bone/15 text-bone/70 hover:border-bone/30 hover:text-bone",
            )}
          >
            {a.label}
          </button>
        ))}
      </div>

      <ol className="flex flex-col">
        {sorted.map((c, i) => {
          const composite = compositeScore(c);
          return (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <Link
                href={`/consoles/${c.slug}`}
                className="relative grid grid-cols-[60px_1fr_auto] items-center gap-6 border-t border-bone/10 py-8 transition-colors hover:bg-obsidian/40 md:grid-cols-[80px_1fr_auto_auto_auto] md:gap-10"
              >
                <span className="font-display text-5xl text-ash group-hover:text-brass transition-colors md:text-6xl">
                  {pad2(i + 1)}
                </span>

                <div className="flex min-w-0 flex-col">
                  <span className="font-display text-2xl text-ivory md:text-4xl">
                    {c.name}
                  </span>
                  <span className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-ash">
                    <span>{c.manufacturer}</span>
                    <span>·</span>
                    <span>{c.year}</span>
                    <span>·</span>
                    <span>Gén. {c.generation}</span>
                    <span>·</span>
                    <span className="text-brass">{c.rarity}</span>
                  </span>
                </div>

                <div className="hidden flex-col items-end md:flex">
                  <span className="label-eyebrow">Émotion</span>
                  <span className="font-display text-2xl text-ivory">
                    {c.emotionalScore}
                  </span>
                </div>

                <div className="hidden flex-col items-end md:flex">
                  <span className="label-eyebrow">Rareté</span>
                  <span className="font-display text-2xl text-ivory">
                    {c.rarityScore}
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="label-eyebrow text-brass">Composite</span>
                  <span className="font-display text-4xl text-ivory md:text-5xl">
                    {composite}
                  </span>
                </div>

                <span
                  className="absolute left-0 top-0 h-[1px]"
                  style={{
                    background: c.accentColor,
                    width: `${composite}%`,
                    opacity: 0.5,
                  }}
                  aria-hidden
                />
              </Link>
            </motion.li>
          );
        })}
      </ol>
    </div>
  );
}
