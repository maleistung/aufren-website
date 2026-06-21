"use client";

import { useReducedMotion } from "framer-motion";

/**
 * Marquee — a slow continuous band of capability words, the kind large
 * holding groups use as an ambient ticker. CSS-driven; pauses for
 * reduced-motion users.
 */
export default function Marquee({ items }: { items: string[] }) {
  const reduce = useReducedMotion();
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-hair py-6">
      <div
        className="flex w-max gap-12 whitespace-nowrap will-change-transform"
        style={
          reduce
            ? undefined
            : { animation: "aufren-marquee 38s linear infinite" }
        }
      >
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-12 font-serif text-display-md font-light text-ink/70"
          >
            {item}
            <span className="text-navy/40">&#8212;</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes aufren-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
