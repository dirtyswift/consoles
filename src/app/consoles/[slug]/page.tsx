import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { consoles, getConsoleBySlug } from "@/data/consoles";
import { ConsoleMark } from "@/components/consoles/console-mark";
import { Meter } from "@/components/ui/meter";
import { Pill } from "@/components/ui/pill";
import { SpecRow } from "@/components/ui/spec-row";
import { formatDate, formatPrice, formatRegion, pad2 } from "@/lib/format";

export function generateStaticParams() {
  return consoles.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getConsoleBySlug(slug);
  if (!c) return {};
  return {
    title: `${c.name} — ${c.year}`,
    description: c.shortDescription,
  };
}

export default async function ConsoleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getConsoleBySlug(slug);
  if (!c) notFound();

  const index = consoles.findIndex((x) => x.slug === slug);
  const prev = consoles[(index - 1 + consoles.length) % consoles.length];
  const next = consoles[(index + 1) % consoles.length];

  return (
    <article className="relative">
      {/* Hero section */}
      <section
        className="relative overflow-hidden border-b border-bone/8"
        style={{
          background: `radial-gradient(ellipse at 80% 0%, ${c.accentColor}22, transparent 60%), radial-gradient(ellipse at 10% 90%, ${c.secondaryColor}44, transparent 60%)`,
        }}
      >
        <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />

        <div className="relative mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-16 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10 lg:py-28">
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <Link
                href="/consoles"
                className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ash hover:text-brass transition-colors"
              >
                ← Retour au cabinet
              </Link>
              <span className="h-[1px] flex-1 bg-bone/15" />
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ash">
                Pièce № {pad2(index + 1)} / {pad2(consoles.length)}
              </span>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center gap-3">
                <Pill tone="brass">{c.manufacturer}</Pill>
                <Pill>Gén. {c.generation}</Pill>
                <Pill tone="phosphor">{c.rarity}</Pill>
              </div>
              <h1 className="font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.92] text-ivory">
                {c.name}
              </h1>
              {c.codename && (
                <p className="font-mono text-sm uppercase tracking-[0.22em] text-ash">
                  {c.codename}
                </p>
              )}
              <p className="font-display text-2xl italic text-brass leading-snug max-w-xl">
                « {c.tagline} »
              </p>
              <p className="max-w-xl text-base leading-relaxed text-bone/80">
                {c.shortDescription}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-bone/10 pt-6 md:grid-cols-4">
              <KeyFact label="Année" value={c.year} />
              <KeyFact label="Origine" value={c.country} />
              <KeyFact label="Tirage" value={c.unitsSold ?? "—"} />
              <KeyFact label="Cycle de vie" value={c.lifespan ?? "—"} />
            </div>
          </div>

          <div className="relative flex flex-col gap-8">
            <div
              className="relative crt-frame overflow-hidden p-10"
              style={{
                background: `linear-gradient(135deg, ${c.secondaryColor}, ${c.accentColor}14 60%, transparent)`,
              }}
            >
              <ConsoleMark slug={c.slug} accent={c.accentColor} />
              <div className="pointer-events-none absolute top-4 left-4 flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-bone/50">
                <span className="h-1.5 w-1.5 rounded-full bg-phosphor animate-pulse" />
                <span>Signal détecté</span>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Meter
                value={c.emotionalScore}
                label="Cote émotionnelle"
                color={c.accentColor}
              />
              <Meter
                value={c.rarityScore}
                label="Rareté désirable"
                color="var(--color-brass)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="mx-auto grid w-full max-w-[1400px] gap-16 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-24 lg:px-10">
        <div className="flex flex-col gap-16">
          <section className="flex flex-col gap-4">
            <span className="label-eyebrow">§ Impact historique</span>
            <p className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.15] text-ivory">
              {c.historicalImpact}
            </p>
          </section>

          <section className="flex flex-col gap-6">
            <span className="label-eyebrow">§ Jeux fondateurs</span>
            <ul className="flex flex-col">
              {c.iconicGames.map((g, i) => (
                <li
                  key={g.title}
                  className="grid grid-cols-[auto_1fr_auto] items-baseline gap-6 border-b border-bone/10 py-5"
                >
                  <span className="font-mono text-xs text-ash">{pad2(i + 1)}</span>
                  <div>
                    <span className="font-display text-2xl text-ivory">{g.title}</span>
                    {g.studio && (
                      <span className="ml-3 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ash">
                        {g.studio}
                      </span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-ash">{g.year}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="grid gap-6 border-y border-bone/10 py-10 md:grid-cols-[auto_1fr] md:gap-12">
            <span className="label-eyebrow">§ Anecdote</span>
            <p className="font-display text-xl italic leading-relaxed text-bone">
              « {c.anecdote} »
            </p>
          </section>
        </div>

        <aside className="flex flex-col gap-10 lg:sticky lg:top-24 lg:self-start">
          <section className="flex flex-col gap-4">
            <span className="label-eyebrow">§ Dates de sortie</span>
            <ul className="flex flex-col">
              {c.releases.map((r) => (
                <li
                  key={`${r.region}-${r.date}`}
                  className="grid grid-cols-[60px_1fr] items-baseline gap-4 border-b border-bone/10 py-3"
                >
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-brass">
                    {r.region}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-mono text-sm text-bone">
                      {formatDate(r.date)}
                    </span>
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-ash">
                      {r.label ?? formatRegion(r.region)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <span className="label-eyebrow">§ Partition technique</span>
            <div>
              <SpecRow label="Bits" value={c.specs.bits} />
              <SpecRow label="CPU" value={c.specs.cpu} />
              <SpecRow label="RAM" value={c.specs.ram} />
              <SpecRow label="Vidéo" value={c.specs.video} />
              <SpecRow label="Couleurs" value={c.specs.colors} />
              <SpecRow label="Audio" value={c.specs.audio} />
              <SpecRow label="Support" value={c.specs.media} />
              <SpecRow label="Manette" value={c.specs.controllers} />
            </div>
          </section>

          <section className="flex flex-col gap-4 border border-bone/10 bg-obsidian/60 p-6">
            <span className="label-eyebrow text-brass">§ Cote du marché</span>
            <p className="font-display text-3xl text-ivory">
              {formatPrice(c.price)}
            </p>
            {c.price.note && (
              <p className="text-xs text-ash leading-relaxed">{c.price.note}</p>
            )}
            <a
              href={c.purchaseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex items-center justify-between gap-3 border border-bone/20 px-4 py-3 text-[0.7rem] uppercase tracking-[0.22em] font-mono text-bone hover:border-brass/60 hover:text-brass transition-colors"
            >
              <span>Chercher sur le marché de l&apos;occasion</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>↗</span>
            </a>
          </section>
        </aside>
      </div>

      <nav className="mx-auto grid w-full max-w-[1400px] gap-6 border-t border-bone/8 px-6 py-16 lg:grid-cols-2 lg:px-10">
        <NavCard label="Pièce précédente" console={prev} align="left" />
        <NavCard label="Pièce suivante" console={next} align="right" />
      </nav>
    </article>
  );
}

function KeyFact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="label-eyebrow">{label}</span>
      <span className="font-display text-xl text-ivory">{value}</span>
    </div>
  );
}

function NavCard({
  label,
  console: c,
  align,
}: {
  label: string;
  console: (typeof consoles)[number];
  align: "left" | "right";
}) {
  return (
    <Link
      href={`/consoles/${c.slug}`}
      className="group flex items-center justify-between gap-6 border border-bone/10 p-6 transition-colors hover:border-brass/40"
    >
      <div className={`flex flex-col gap-2 ${align === "right" ? "order-2 text-right" : ""}`}>
        <span className="label-eyebrow">{label}</span>
        <span className="font-display text-2xl text-ivory group-hover:text-brass transition-colors">
          {c.name}
        </span>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ash">
          {c.year} · {c.manufacturer}
        </span>
      </div>
      <div className="h-20 w-32 opacity-80 transition-opacity group-hover:opacity-100">
        <ConsoleMark slug={c.slug} accent={c.accentColor} />
      </div>
    </Link>
  );
}
