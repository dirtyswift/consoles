import { cn } from "@/lib/cn";

type Props = {
  slug: string;
  accent?: string;
  className?: string;
};

/**
 * Abstract blueprint-style marks for each console.
 * Keeps the museum/editorial aesthetic without relying on photographs.
 */
export function ConsoleMark({ slug, accent = "var(--color-brass)", className }: Props) {
  const common = "w-full h-full";
  const stroke = "rgba(237, 230, 211, 0.8)";
  const dim = "rgba(237, 230, 211, 0.25)";

  switch (slug) {
    case "atari-2600":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <rect x="10" y="30" width="180" height="70" rx="3" stroke={stroke} />
          <rect x="10" y="30" width="180" height="22" fill={accent} fillOpacity="0.15" stroke={stroke} />
          <g stroke={stroke}>
            <rect x="22" y="36" width="10" height="10" fill={accent} fillOpacity="0.5" />
            <rect x="40" y="36" width="10" height="10" />
            <rect x="58" y="36" width="10" height="10" />
            <rect x="76" y="36" width="10" height="10" />
            <rect x="94" y="36" width="10" height="10" />
            <rect x="112" y="36" width="10" height="10" />
            <rect x="130" y="36" width="10" height="10" />
          </g>
          <rect x="70" y="62" width="60" height="28" stroke={stroke} fill="none" />
          <line x1="10" y1="100" x2="190" y2="100" stroke={dim} />
          <text x="14" y="114" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">VCS · WOOD · 1977</text>
        </svg>
      );

    case "nes":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <rect x="10" y="28" width="180" height="72" rx="2" stroke={stroke} />
          <rect x="10" y="28" width="180" height="14" stroke={stroke} fill={accent} fillOpacity="0.2" />
          <rect x="22" y="52" width="156" height="30" stroke={stroke} />
          <rect x="28" y="58" width="144" height="18" stroke={dim} />
          <g stroke={stroke}>
            <circle cx="40" cy="92" r="2.5" />
            <circle cx="52" cy="92" r="2.5" />
            <circle cx="64" cy="92" r="2.5" />
          </g>
          <text x="14" y="114" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">NES · TOASTER · 1985</text>
        </svg>
      );

    case "master-system":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <rect x="10" y="30" width="180" height="70" rx="2" stroke={stroke} fill="none" />
          <rect x="10" y="38" width="180" height="6" fill={accent} fillOpacity="0.4" />
          <rect x="60" y="30" width="80" height="14" stroke={stroke} fill="none" />
          <rect x="72" y="32" width="56" height="10" stroke={dim} />
          <g stroke={stroke}>
            <circle cx="40" cy="76" r="6" />
            <circle cx="160" cy="76" r="6" />
          </g>
          <rect x="70" y="70" width="60" height="18" stroke={dim} />
          <text x="14" y="114" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">SMS · MARK III · 1985</text>
        </svg>
      );

    case "super-nintendo":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <path d="M20 30 H180 a10 10 0 0 1 10 10 v50 a10 10 0 0 1 -10 10 H20 a10 10 0 0 1 -10 -10 V40 a10 10 0 0 1 10 -10Z" stroke={stroke} />
          <rect x="76" y="30" width="48" height="18" stroke={stroke} fill={accent} fillOpacity="0.15" />
          <g stroke={stroke}>
            <circle cx="44" cy="68" r="6" fill={accent} fillOpacity="0.35" />
            <circle cx="62" cy="68" r="6" />
            <circle cx="140" cy="68" r="6" />
            <circle cx="158" cy="68" r="6" fill={accent} fillOpacity="0.35" />
          </g>
          <text x="14" y="114" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">SNES · SHVC · 1990</text>
        </svg>
      );

    case "mega-drive":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <rect x="10" y="32" width="180" height="68" rx="3" stroke={stroke} />
          <circle cx="100" cy="66" r="24" stroke={stroke} fill="none" />
          <circle cx="100" cy="66" r="14" stroke={accent} strokeOpacity="0.5" fill={accent} fillOpacity="0.08" />
          <rect x="76" y="32" width="48" height="10" stroke={stroke} />
          <g stroke={dim}>
            <line x1="18" y1="92" x2="60" y2="92" />
            <line x1="140" y1="92" x2="182" y2="92" />
          </g>
          <text x="14" y="114" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">MD · GENESIS · 1988</text>
        </svg>
      );

    case "neo-geo-aes":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <rect x="12" y="28" width="176" height="74" rx="2" stroke={stroke} />
          <rect x="12" y="28" width="176" height="8" fill={accent} fillOpacity="0.7" />
          <rect x="24" y="52" width="152" height="20" stroke={stroke} />
          <g stroke={dim}>
            <circle cx="36" cy="86" r="3" />
            <circle cx="48" cy="86" r="3" />
            <circle cx="60" cy="86" r="3" />
            <circle cx="72" cy="86" r="3" />
          </g>
          <text x="100" y="66" fontFamily="ui-monospace" fontSize="6" fill={dim} textAnchor="middle" letterSpacing="2">NEO · GEO · AES</text>
          <text x="14" y="116" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">SNK · 1990</text>
        </svg>
      );

    case "game-boy":
      return (
        <svg viewBox="0 0 200 160" className={cn(common, className)} fill="none">
          <rect x="50" y="10" width="100" height="140" rx="8" stroke={stroke} />
          <rect x="62" y="26" width="76" height="52" stroke={stroke} fill={accent} fillOpacity="0.25" />
          <rect x="68" y="32" width="64" height="40" stroke={dim} />
          <g stroke={stroke}>
            <rect x="64" y="92" width="8" height="24" />
            <rect x="56" y="100" width="24" height="8" />
          </g>
          <g stroke={stroke}>
            <circle cx="120" cy="100" r="5" />
            <circle cx="134" cy="100" r="5" />
          </g>
          <g stroke={dim}>
            <rect x="78" y="128" width="8" height="3" transform="rotate(-20 78 128)" />
            <rect x="92" y="126" width="8" height="3" transform="rotate(-20 92 126)" />
          </g>
          <text x="70" y="154" fontFamily="ui-monospace" fontSize="5" fill={dim} letterSpacing="2">DMG-01 · 1989</text>
        </svg>
      );

    case "nintendo-64":
      return (
        <svg viewBox="0 0 200 140" className={cn(common, className)} fill="none">
          <path d="M30 40 L60 90 L100 40 L140 90 L170 40 Z" stroke={stroke} fill="none" />
          <circle cx="100" cy="72" r="8" stroke={stroke} fill={accent} fillOpacity="0.3" />
          <g stroke={stroke}>
            <circle cx="60" cy="90" r="3" />
            <circle cx="140" cy="90" r="3" />
          </g>
          <g stroke={dim}>
            <line x1="44" y1="60" x2="60" y2="90" />
            <line x1="156" y1="60" x2="140" y2="90" />
          </g>
          <text x="44" y="118" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">N64 · THREE-ARMED PAD · 1996</text>
        </svg>
      );

    case "playstation-1":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <rect x="10" y="30" width="180" height="70" rx="2" stroke={stroke} />
          <circle cx="100" cy="65" r="28" stroke={stroke} />
          <circle cx="100" cy="65" r="10" stroke={accent} strokeOpacity="0.8" fill={accent} fillOpacity="0.2" />
          <g stroke={dim}>
            <rect x="18" y="40" width="8" height="6" />
            <rect x="30" y="40" width="8" height="6" />
            <rect x="162" y="88" width="20" height="3" />
          </g>
          <text x="14" y="114" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">PS1 · SCPH · 1994</text>
        </svg>
      );

    case "dreamcast":
      return (
        <svg viewBox="0 0 200 120" className={cn(common, className)} fill="none">
          <path d="M30 90 Q100 20 170 90 Z" stroke={stroke} fill={accent} fillOpacity="0.06" />
          <circle cx="100" cy="70" r="22" stroke={stroke} />
          <path
            d="M100 58 a12 12 0 1 0 8 20"
            stroke={accent}
            strokeWidth="2"
            fill="none"
          />
          <line x1="30" y1="90" x2="170" y2="90" stroke={stroke} />
          <g stroke={dim}>
            <circle cx="50" cy="92" r="2" />
            <circle cx="150" cy="92" r="2" />
          </g>
          <text x="44" y="112" fontFamily="ui-monospace" fontSize="6" fill={dim} letterSpacing="2">DC · KATANA · 1998</text>
        </svg>
      );

    default:
      return null;
  }
}
