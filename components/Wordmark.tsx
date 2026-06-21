import Link from "next/link";
import LogoMark from "@/components/LogoMark";
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
      className={cn("inline-flex items-center gap-2.5 select-none", className)}
    >
      <LogoMark className="h-7 w-7" rounded={9} />
      <span className="inline-flex items-baseline gap-2">
        <span
          className={cn(
            "font-serif text-[1.3rem] font-normal leading-none tracking-[-0.01em]",
            inverted ? "text-paper" : "text-ink"
          )}
        >
          Aufren
        </span>
        <span
          className={cn(
            "font-sans text-[0.6rem] font-semibold uppercase tracking-[0.18em]",
            inverted ? "text-paper/55" : "text-ink-mute"
          )}
        >
          LLC
        </span>
      </span>
    </Link>
  );
}
