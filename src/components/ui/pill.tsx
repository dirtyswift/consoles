import { cn } from "@/lib/cn";

export function Pill({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "brass" | "phosphor" | "signal";
  className?: string;
}) {
  const toneClass = {
    neutral: "border-bone/15 text-bone/70",
    brass: "border-brass/40 text-brass",
    phosphor: "border-phosphor/40 text-phosphor",
    signal: "border-signal/50 text-signal",
  }[tone];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] font-mono",
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
