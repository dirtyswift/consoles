import { cn } from "@/lib/cn";

export function SpecRow({
  label,
  value,
  className,
}: {
  label: string;
  value?: React.ReactNode;
  className?: string;
}) {
  if (!value) return null;
  return (
    <div
      className={cn(
        "grid grid-cols-[minmax(0,1fr)_auto] gap-6 border-b border-bone/10 py-3 text-sm",
        className,
      )}
    >
      <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ash">
        {label}
      </span>
      <span className="text-right font-mono text-xs text-bone">{value}</span>
    </div>
  );
}
