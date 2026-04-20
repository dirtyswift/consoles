"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-bone/8">
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(195, 162, 101, 0.18), transparent 60%), radial-gradient(ellipse at 90% 90%, rgba(142, 232, 78, 0.08), transparent 60%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr] lg:gap-20 lg:px-10 lg:py-32">
        <div className="flex flex-col justify-between gap-14">
          <div className="flex items-center gap-4">
            <span className="h-[1px] w-10 bg-brass" />
            <span className="label-eyebrow text-brass">Exposition permanente № 001</span>
          </div>

          <div className="flex flex-col gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.9] text-ivory"
            >
              Dix machines
              <br />
              qui ont
              <span className="italic text-brass"> inventé</span>
              <br />
              le jeu vidéo
              <br />
              <span className="text-ash">à la maison.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-xl text-base leading-relaxed text-bone/80"
            >
              Un cabinet éditorial pour dix consoles iconiques — de
              l&apos;Atari 2600 à la Dreamcast. Dates régionales, partitions
              techniques, anecdotes, cotes du marché et notes de
              collectionneur. Tout ce qui fait qu&apos;un objet devient une
              mémoire.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/consoles"
              className="group inline-flex items-center gap-3 bg-bone px-6 py-4 text-xs uppercase tracking-[0.24em] font-mono text-ink transition-colors duration-500 hover:bg-brass"
            >
              Entrer dans le cabinet
              <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>→</span>
            </Link>
            <Link
              href="/timeline"
              className="inline-flex items-center gap-3 border border-bone/20 px-6 py-4 text-xs uppercase tracking-[0.24em] font-mono text-bone hover:border-brass/60 hover:text-brass transition-colors"
            >
              Remonter la chronologie
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="relative flex flex-col gap-6"
        >
          <div className="flex items-center justify-between border-b border-bone/10 pb-4">
            <span className="label-eyebrow">Fiche d&apos;entrée</span>
            <span className="font-mono text-[0.7rem] text-ash">01 / 10</span>
          </div>

          <div className="grid gap-2 font-mono text-xs text-bone/70">
            <dl className="grid grid-cols-[100px_1fr] gap-y-3">
              <dt className="label-eyebrow">Fondation</dt>
              <dd className="text-bone">11 septembre 1977</dd>
              <dt className="label-eyebrow">Origine</dt>
              <dd className="text-bone">Sunnyvale, Californie</dd>
              <dt className="label-eyebrow">Tirage</dt>
              <dd className="text-bone">30 millions d&apos;exemplaires</dd>
              <dt className="label-eyebrow">Support</dt>
              <dd className="text-bone">Cartouches ROM</dd>
              <dt className="label-eyebrow">État</dt>
              <dd className="text-phosphor">Archive vivante</dd>
            </dl>
          </div>

          <div className="relative mt-6 crt-frame bg-obsidian p-8">
            <div className="absolute inset-x-8 top-6 flex items-center gap-2 text-[0.6rem] font-mono uppercase tracking-[0.2em] text-bone/40">
              <span className="h-1.5 w-1.5 rounded-full bg-phosphor animate-pulse" />
              <span>Signal stable · PAL / NTSC</span>
            </div>
            <blockquote className="mt-8 font-display text-2xl leading-tight text-ivory">
              « Il y a deux histoires du jeu vidéo : celle des jeux, et celle
              des machines qui les ont rendus possibles. »
            </blockquote>
            <cite className="mt-4 block font-mono text-[0.7rem] uppercase tracking-[0.22em] not-italic text-ash">
              — Note du conservateur
            </cite>
          </div>
        </motion.div>
      </div>

      {/* Decorative ticker */}
      <div className="relative border-t border-bone/8 bg-ink">
        <div className="mx-auto flex w-full max-w-[1400px] items-center gap-8 overflow-hidden px-6 py-4 text-[0.7rem] uppercase tracking-[0.3em] font-mono text-ash lg:px-10">
          <span className="text-brass">◆</span>
          <span>Atari 2600</span>
          <span>·</span>
          <span>NES</span>
          <span>·</span>
          <span>Master System</span>
          <span>·</span>
          <span>Super Nintendo</span>
          <span>·</span>
          <span>Mega Drive</span>
          <span>·</span>
          <span>Neo Geo AES</span>
          <span>·</span>
          <span>Game Boy</span>
          <span>·</span>
          <span>Nintendo 64</span>
          <span>·</span>
          <span>PlayStation</span>
          <span>·</span>
          <span>Dreamcast</span>
          <span className="ml-auto text-brass">◆</span>
        </div>
      </div>
    </section>
  );
}
