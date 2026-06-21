import { cn } from "@/lib/cn";

/**
 * LogoMark — the Aufren brand mark.
 * A navy badge holding the horizon arc, a gold sun cresting it, and the
 * horizon line. Geometric and path-based so it stays crisp at any size,
 * including a 16px favicon.
 */
export default function LogoMark({
  className,
  rounded = 22,
}: {
  className?: string;
  rounded?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("block", className)}
    >
      <rect width="100" height="100" rx={rounded} fill="#1C2B4A" />
      <path
        d="M24 66 C 38 34, 62 34, 76 66"
        fill="none"
        stroke="#FAFAF7"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="72"
        x2="80"
        y2="72"
        stroke="#FAFAF7"
        strokeOpacity="0.45"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="50" cy="37" r="6" fill="#C2A14D" />
    </svg>
  );
}
