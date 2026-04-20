"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Console } from "@/lib/types";
import { ConsoleMark } from "./console-mark";
import { cn } from "@/lib/cn";
import { pad2 } from "@/lib/format";

export function ConsoleCard({
  console,
  index,
  variant = "grid",
}: {
  console: Console;
  index?: number;
  variant?: "grid" | "feature";
}) {
  const href = `/consoles/${console.slug}`;
  const n = typeof index === "number" ? pad2(index + 1) : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: (index ?? 0) * 0.04 }}
      className={cn(
        "group relative flex flex-col overflow-hidden border border-bone/10 bg-obsidian/40 backdrop-blur-sm transition-colors duration-500 hover:border-bone/25",
        variant === "feature" && "md:flex-row",
      )}
    >
      <Link href={href} className="flex flex-1 flex-col">
        <div
          className={cn(
            "relative aspect-[5/3] overflow-hidden border-b border-bone/10 bg-grid-fine",
            variant === "feature" && "md:aspect-auto md:flex-1 md:border-b-0 md:border-r",
          )}
          style={{
            background: `radial-gradient(ellipse at 30% 20%, ${console.accentColor}15, transparent 60%), ${console.secondaryColor}`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div
              className="w-full max-w-[320px] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            >
              <ConsoleMark slug={console.slug} accent={console.accentColor} />
            </div>
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2">
            {n && (
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.24em] text-bone/60">
                № {n}
              </span>
            )}
            <span
              className="h-[1px] w-6"
              style={{ background: console.accentColor }}
              aria-hidden
            />
            <span
              className="font-mono text-[0.65rem] uppercase tracking-[0.24em]"
              style={{ color: console.accentColor }}
            >
              Gén. {console.generation}
            </span>
          </div>

          <div className="absolute bottom-4 right-4 flex flex-col items-end gap-1 text-right">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-bone/40">
              Cote émotionnelle
            </span>
            <span className="font-display text-4xl text-ivory">
              {console.emotionalScore}
              <span className="text-base text-ash">/100</span>
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-[1.7rem] leading-[1] text-ivory">
              {console.name}
            </h3>
            <span className="font-mono text-xs text-ash">{console.year}</span>
          </div>

          <p className="flex items-center gap-2 text-[0.75rem] uppercase tracking-[0.2em] font-mono text-ash">
            <span>{console.manufacturer}</span>
            <span className="h-[1px] flex-1 bg-bone/10" />
            <span>{console.rarity}</span>
          </p>

          <p className="text-sm leading-relaxed text-bone/80 line-clamp-3">
            {console.tagline}
          </p>

          <div className="mt-auto flex items-center justify-between pt-4 border-t border-bone/8">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ash">
              Voir la fiche
            </span>
            <span
              className="font-mono text-sm transition-transform duration-500 group-hover:translate-x-1"
              style={{ color: console.accentColor }}
              aria-hidden
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
