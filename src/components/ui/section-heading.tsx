import { cn } from "@/lib/cn";
import { Eyebrow } from "./eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  index,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  index?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <div className="flex items-center gap-3">
          {index && (
            <span className="label-eyebrow text-brass">{index}</span>
          )}
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        </div>
      )}
      <h2 className="font-display text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.95] text-ivory">
        {title}
      </h2>
      {lede && (
        <p className="max-w-2xl text-base leading-relaxed text-ash">{lede}</p>
      )}
    </div>
  );
}
