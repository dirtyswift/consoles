import Link, { type LinkProps } from "next/link";
import { cn } from "@/lib/cn";

type Props = LinkProps & {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function LinkButton({
  className,
  children,
  variant = "primary",
  external,
  ...rest
}: Props) {
  const base =
    "group relative inline-flex items-center gap-3 px-5 py-3 text-xs uppercase tracking-[0.22em] font-mono transition-colors duration-300";
  const variants = {
    primary: "bg-bone text-ink hover:bg-brass hover:text-ink",
    ghost:
      "border border-bone/20 text-bone hover:border-brass/60 hover:text-brass",
  };

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span
        className="relative z-10 transition-transform duration-500 group-hover:translate-x-1"
        aria-hidden
      >
        →
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={rest.href as string}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(base, variants[variant], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link {...rest} className={cn(base, variants[variant], className)}>
      {content}
    </Link>
  );
}
