"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Console, Region } from "@/lib/types";
import { ConsoleMark } from "@/components/consoles/console-mark";
import { formatDate, formatRegion } from "@/lib/format";

const regionOrder: Region[] = ["JP", "NA", "EU", "FR", "BR"];

export function TimelineView({ consoles }: { consoles: Console[] }) {
  return (
    <div className="relative mt-16 flex flex-col gap-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-bone/10 to-transparent lg:block"
        aria-hidden
      />

      {consoles.map((c, i) => {
        const side = i % 2 === 0 ? "left" : "right";
        const releases = [...c.releases].sort(
          (a, b) => regionOrder.indexOf(a.region) - regionOrder.indexOf(b.region),
        );

        return (
          <motion.article
            key={c.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative grid gap-8 lg:grid-cols-2 lg:gap-16"
          >
            <div
              className={`relative flex flex-col gap-6 ${
                side === "right" ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-[clamp(3rem,6vw,5rem)] text-brass leading-none">
                  {c.year}
                </span>
                <span className="label-eyebrow">{c.manufacturer}</span>
              </div>

              <Link
                href={`/consoles/${c.slug}`}
                className="group flex flex-col gap-2"
              >
                <h3 className="font-display text-3xl text-ivory group-hover:text-brass transition-colors md:text-5xl">
                  {c.name}
                </h3>
                <p className="font-display italic text-xl text-bone/80 leading-snug max-w-xl">
                  « {c.tagline} »
                </p>
              </Link>

              <ul className="flex flex-col border-t border-bone/10">
                {releases.map((r) => (
                  <li
                    key={`${r.region}-${r.date}`}
                    className="grid grid-cols-[70px_120px_1fr] items-baseline gap-4 border-b border-bone/10 py-3 font-mono text-xs"
                  >
                    <span className="uppercase tracking-[0.2em] text-brass">
                      {r.region}
                    </span>
                    <span className="text-bone">{formatDate(r.date)}</span>
                    <span className="text-ash uppercase tracking-[0.18em] text-[0.65rem]">
                      {r.label ?? formatRegion(r.region)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`relative ${
                side === "right" ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <div
                className="relative crt-frame overflow-hidden p-10"
                style={{
                  background: `linear-gradient(135deg, ${c.secondaryColor}, ${c.accentColor}10 70%, transparent)`,
                }}
              >
                <ConsoleMark slug={c.slug} accent={c.accentColor} />
              </div>
              <div
                className="pointer-events-none absolute -inset-px border opacity-40"
                style={{ borderColor: c.accentColor }}
                aria-hidden
              />
            </div>

            <span
              className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border lg:block"
              style={{ borderColor: c.accentColor, background: c.accentColor }}
              aria-hidden
            />
          </motion.article>
        );
      })}
    </div>
  );
}
