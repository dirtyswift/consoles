"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Console } from "@/lib/types";
import { ConsoleMark } from "@/components/consoles/console-mark";
import { SpecRow } from "@/components/ui/spec-row";
import { Meter } from "@/components/ui/meter";
import { Pill } from "@/components/ui/pill";
import { formatPrice } from "@/lib/format";
import { cn } from "@/lib/cn";

const MAX_SLOTS = 4;
const MIN_SLOTS = 2;

export function CompareTool({ consoles }: { consoles: Console[] }) {
  const [selected, setSelected] = useState<string[]>([
    "super-nintendo",
    "mega-drive",
  ]);

  const chosen = useMemo(
    () =>
      selected
        .map((slug) => consoles.find((c) => c.slug === slug))
        .filter((c): c is Console => Boolean(c)),
    [selected, consoles],
  );

  const canAdd = selected.length < MAX_SLOTS;
  const available = consoles.filter((c) => !selected.includes(c.slug));

  const addConsole = (slug: string) => {
    if (!canAdd) return;
    setSelected((s) => [...s, slug]);
  };

  const removeConsole = (slug: string) => {
    if (selected.length <= MIN_SLOTS) return;
    setSelected((s) => s.filter((x) => x !== slug));
  };

  return (
    <div className="mt-14 flex flex-col gap-12">
      {/* Selector */}
      <div className="flex flex-col gap-4 border-y border-bone/8 py-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="label-eyebrow">Ajouter une console</span>
          <span className="font-mono text-[0.7rem] text-ash">
            {selected.length} / {MAX_SLOTS} sélectionnées
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {available.map((c) => (
            <button
              key={c.slug}
              onClick={() => addConsole(c.slug)}
              disabled={!canAdd}
              className={cn(
                "border border-bone/15 px-3 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-bone/70 transition-colors hover:border-bone/30 hover:text-bone",
                !canAdd && "opacity-40 cursor-not-allowed",
              )}
            >
              + {c.name}
            </button>
          ))}
          {available.length === 0 && (
            <span className="font-mono text-xs text-ash">
              Toutes les consoles sont à la table.
            </span>
          )}
        </div>
      </div>

      {/* Heads */}
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `160px repeat(${chosen.length}, minmax(0, 1fr))`,
        }}
      >
        <div className="hidden md:block" />
        {chosen.map((c) => (
          <div
            key={c.id}
            className="relative flex flex-col gap-4 border border-bone/10 bg-obsidian/40 p-5"
          >
            <button
              onClick={() => removeConsole(c.slug)}
              disabled={selected.length <= MIN_SLOTS}
              className="absolute top-3 right-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ash hover:text-signal transition-colors disabled:opacity-30"
            >
              Retirer
            </button>
            <div
              className="h-24 w-full"
              style={{
                background: `radial-gradient(ellipse at 30% 30%, ${c.accentColor}22, transparent 70%)`,
              }}
            >
              <ConsoleMark slug={c.slug} accent={c.accentColor} />
            </div>
            <div className="flex flex-col gap-1">
              <Link
                href={`/consoles/${c.slug}`}
                className="font-display text-2xl text-ivory leading-tight hover:text-brass transition-colors"
              >
                {c.name}
              </Link>
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ash">
                {c.manufacturer} · {c.year}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <Pill tone="brass">Gén. {c.generation}</Pill>
              <Pill tone="phosphor">{c.rarity}</Pill>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="flex flex-col gap-8">
        <CompareBlock label="Scores" chosen={chosen}>
          {(c) => (
            <div className="flex flex-col gap-4 pt-2">
              <Meter
                value={c.emotionalScore}
                label="Émotion"
                color={c.accentColor}
              />
              <Meter
                value={c.rarityScore}
                label="Rareté"
                color="var(--color-brass)"
              />
            </div>
          )}
        </CompareBlock>

        <CompareBlock label="Marché" chosen={chosen}>
          {(c) => (
            <div className="flex flex-col gap-1">
              <span className="font-display text-2xl text-ivory">
                {formatPrice(c.price)}
              </span>
              {c.price.note && (
                <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ash">
                  {c.price.note}
                </span>
              )}
            </div>
          )}
        </CompareBlock>

        <CompareBlock label="Caractéristiques" chosen={chosen}>
          {(c) => (
            <div className="flex flex-col">
              <SpecRow label="Bits" value={c.specs.bits} />
              <SpecRow label="CPU" value={c.specs.cpu} />
              <SpecRow label="RAM" value={c.specs.ram} />
              <SpecRow label="Vidéo" value={c.specs.video} />
              <SpecRow label="Couleurs" value={c.specs.colors} />
              <SpecRow label="Audio" value={c.specs.audio} />
              <SpecRow label="Support" value={c.specs.media} />
            </div>
          )}
        </CompareBlock>

        <CompareBlock label="Jeux fondateurs" chosen={chosen}>
          {(c) => (
            <ul className="flex flex-col gap-2">
              {c.iconicGames.slice(0, 4).map((g) => (
                <li key={g.title} className="flex items-baseline justify-between gap-2 border-b border-bone/10 pb-2">
                  <span className="font-display text-base text-ivory leading-tight">{g.title}</span>
                  <span className="font-mono text-[0.65rem] text-ash">{g.year}</span>
                </li>
              ))}
            </ul>
          )}
        </CompareBlock>

        <CompareBlock label="Anecdote" chosen={chosen}>
          {(c) => (
            <p className="font-display italic text-base leading-relaxed text-bone/90">
              « {c.anecdote} »
            </p>
          )}
        </CompareBlock>
      </div>
    </div>
  );
}

function CompareBlock({
  label,
  chosen,
  children,
}: {
  label: string;
  chosen: Console[];
  children: (c: Console) => React.ReactNode;
}) {
  return (
    <section
      className="grid gap-4 border-t border-bone/10 pt-6"
      style={{
        gridTemplateColumns: `160px repeat(${chosen.length}, minmax(0, 1fr))`,
      }}
    >
      <span className="label-eyebrow pt-2">{label}</span>
      {chosen.map((c) => (
        <div key={c.id} className="p-0 md:px-3">
          {children(c)}
        </div>
      ))}
    </section>
  );
}
