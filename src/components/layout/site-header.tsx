"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/consoles", label: "Catalogue" },
  { href: "/timeline", label: "Chronologie" },
  { href: "/hall-of-fame", label: "Panthéon" },
  { href: "/compare", label: "Comparer" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-bone/8 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="relative flex h-6 w-6 items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-brass/60 transition-transform duration-500 group-hover:rotate-180" />
            <span className="h-1.5 w-1.5 rounded-full bg-brass" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.05rem] text-ivory tracking-tight">
              Cabinet des Consoles
            </span>
            <span className="label-eyebrow text-[0.6rem] text-ash mt-0.5">
              Archive éditoriale · 1977 — 2001
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-[0.72rem] uppercase tracking-[0.22em] font-mono transition-colors",
                  active ? "text-brass" : "text-bone/70 hover:text-bone",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <span className="label-eyebrow">Collection 01</span>
          <span className="h-[1px] w-8 bg-bone/20" />
          <span className="font-mono text-[0.7rem] text-bone/70">10 pièces</span>
        </div>
      </div>
    </header>
  );
}
