export type Region = "JP" | "NA" | "EU" | "BR" | "FR";

export type Rarity = "Commune" | "Recherchée" | "Rare" | "Culte" | "Grail";

export type Generation = 2 | 3 | 4 | 5 | 6;

export interface Release {
  region: Region;
  date: string; // ISO-like (YYYY-MM-DD or YYYY)
  label?: string;
}

export interface IconicGame {
  title: string;
  year: number;
  studio?: string;
}

export interface ConsoleSpecs {
  cpu?: string;
  ram?: string;
  video?: string;
  colors?: string;
  audio?: string;
  media?: string;
  controllers?: string;
  bits?: string;
}

export interface ConsolePrice {
  min: number;
  max: number;
  currency: "EUR";
  note?: string;
}

export interface Console {
  id: string;
  slug: string;
  name: string;
  codename?: string;
  manufacturer: string;
  country: string;
  generation: Generation;
  year: number;
  releases: Release[];
  tagline: string;
  shortDescription: string;
  historicalImpact: string;
  iconicGames: IconicGame[];
  emotionalScore: number; // /100
  rarity: Rarity;
  rarityScore: number; // /100
  price: ConsolePrice;
  purchaseUrl: string;
  anecdote: string;
  specs: ConsoleSpecs;
  unitsSold?: string;
  lifespan?: string;
  accentColor: string; // tailwind-compatible hex
  secondaryColor: string;
  image?: string;
}
