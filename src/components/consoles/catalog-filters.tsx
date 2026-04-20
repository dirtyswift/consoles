"use client";

import { useMemo, useState } from "react";
import type { Console } from "@/lib/types";
import { ConsoleCard } from "./console-card";
import { cn } from "@/lib/cn";

type SortKey = "year" | "emotional" | "rarity" | "price";

export function CatalogFilters({ consoles }: { consoles: Console[] }) {
  const [sort, setSort] = useState<SortKey>("year");
  const [generation, setGeneration] = useState<number | "all">("all");

  const filtered = useMemo(() => {
    const base = generation === "all" ? consoles : consoles.filter((c) => c.generation === generation);
    const sorted = [...base].sort((a, b) => {
      switch (sort) {
        case "year":
          return a.year - b.year;
        case "emotional":
          return b.emotionalScore - a.emotionalScore;
        case "rarity":
          return b.rarityScore - a.rarityScore;
        case "price":
          return b.price.max - a.price.max;
      }
    });
    return sorted;
  }, [consoles, sort, generation]);

  const sorters: { key: SortKey; label: string }[] = [
    { key: "year", label: "Année" },
    { key: "emotional", label: "Cote émotionnelle" },
    { key: "rarity", label: "Rareté" },
    { key: "price", label: "Prix plafond" },
  ];

  const generations: Array<{ value: number | "all"; label: string }> = [
    { value: "all", label: "Toutes" },
    { value: 2, label: "Gén. 2" },
    { value: 3, label: "Gén. 3" },
    { value: 4, label: "Gén. 4" },
    { value: 5, label: "Gén. 5" },
    { value: 6, label: "Gén. 6" },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6 border-y border-bone/8 py-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-eyebrow">Génération</span>
          <div className="flex flex-wrap gap-2">
            {generations.map((g) => (
              <button
                key={String(g.value)}
                onClick={() => setGeneration(g.value)}
                className={cn(
                  "border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors",
                  generation === g.value
                    ? "border-brass text-brass"
                    : "border-bone/15 text-bone/70 hover:border-bone/30 hover:text-bone",
                )}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="label-eyebrow">Trier par</span>
          <div className="flex flex-wrap gap-2">
            {sorters.map((s) => (
              <button
                key={s.key}
                onClick={() => setSort(s.key)}
                className={cn(
                  "border px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] transition-colors",
                  sort === s.key
                    ? "border-brass text-brass"
                    : "border-bone/15 text-bone/70 hover:border-bone/30 hover:text-bone",
                )}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((c, i) => (
          <ConsoleCard key={c.id} console={c} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-20 text-center font-mono text-sm text-ash">
          Aucune pièce dans cette génération.
        </p>
      )}
    </div>
  );
}
