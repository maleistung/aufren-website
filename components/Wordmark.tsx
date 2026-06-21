import Link from "next/link";
import { cn } from "@/lib/cn";

export default function Wordmark({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="Aufren LLC — Home"
      className={cn("inline-flex items-baseline gap-2 select-none", className)}
    >
      <span
        className={cn(
          "font-serif text-[1.35rem] font-normal tracking-[-0.01em]",
          inverted ? "text-paper" : "text-ink"
        )}
      >
        Aufren
      </span>
      <span
        className={cn(
          "font-sans text-[0.625rem] font-semibold uppercase tracking-[0.18em]",
          inverted ? "text-paper/55" : "text-ink-mute"
        )}
      >
        LLC
      </span>
    </Link>
  );
}
