import type { ConsolePrice, Region } from "./types";

const regionLabel: Record<Region, string> = {
  JP: "Japon",
  NA: "Amérique du Nord",
  EU: "Europe",
  FR: "France",
  BR: "Brésil",
};

export function formatRegion(r: Region) {
  return regionLabel[r];
}

export function formatPrice(p: ConsolePrice) {
  const f = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: p.currency,
    maximumFractionDigits: 0,
  });
  return `${f.format(p.min)} — ${f.format(p.max)}`;
}

export function formatDate(iso: string) {
  if (/^\d{4}$/.test(iso)) return iso;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function pad2(n: number) {
  return n.toString().padStart(2, "0");
}
