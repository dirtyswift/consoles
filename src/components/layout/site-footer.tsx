import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-bone/8 mt-24">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div className="flex flex-col gap-4 max-w-md">
            <h3 className="font-display text-3xl text-ivory">
              Une mémoire du jeu,
              <br />
              en pièces détachées.
            </h3>
            <p className="text-sm text-ash leading-relaxed">
              Un cabinet de curiosités pour dix machines qui ont écrit la
              grammaire du jeu vidéo. Dates régionales, anecdotes,
              partitions techniques, notes de collectionneur. L&apos;objet
              plus encore que le jeu.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-eyebrow">Sections</span>
            <Link href="/consoles" className="text-sm text-bone hover:text-brass">Catalogue</Link>
            <Link href="/timeline" className="text-sm text-bone hover:text-brass">Chronologie</Link>
            <Link href="/hall-of-fame" className="text-sm text-bone hover:text-brass">Panthéon</Link>
            <Link href="/compare" className="text-sm text-bone hover:text-brass">Comparer</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="label-eyebrow">Archives</span>
            <span className="text-sm text-ash">Gén. 2 — Atari, pionniers</span>
            <span className="text-sm text-ash">Gén. 3 — NES, SMS</span>
            <span className="text-sm text-ash">Gén. 4 — 16-bit</span>
            <span className="text-sm text-ash">Gén. 5 — 3D, CD-ROM</span>
            <span className="text-sm text-ash">Gén. 6 — l&apos;après-Dreamcast</span>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-bone/8 pt-8 md:flex-row md:items-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ash">
            © Cabinet des Consoles — Archive indépendante · Paris · Tokyo
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-ash">
            Construit avec respect pour les objets · Non affilié aux marques
          </p>
        </div>
      </div>
    </footer>
  );
}
