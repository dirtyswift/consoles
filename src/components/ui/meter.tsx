"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function Meter({
  value,
  label,
  sublabel,
  color = "var(--color-brass)",
  max = 100,
  className,
}: {
  value: number;
  label: string;
  sublabel?: string;
  color?: string;
  max?: number;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100));
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <span className="label-eyebrow text-bone/70">{label}</span>
        <span className="font-mono text-xs text-bone/80">
          {sublabel ?? `${Math.round(pct)} / 100`}
        </span>
      </div>
      <div className="relative h-[3px] w-full overflow-hidden bg-bone/10">
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: pct / 100 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left", background: color }}
          className="block h-full w-full origin-left"
        />
      </div>
    </div>
  );
}
