"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * HeroHeadline — word-by-word staggered reveal, each word rising from
 * below a clipped line. "Connected World" carries the navy accent.
 */
export default function HeroHeadline() {
  const reduce = useReducedMotion();
  const words: { text: string; accent?: boolean }[] = [
    { text: "Building" },
    { text: "Businesses" },
    { text: "for" },
    { text: "a" },
    { text: "Connected", accent: true },
    { text: "World", accent: true },
  ];

  return (
    <h1 className="mt-7 max-w-3xl font-serif text-display-xl font-light text-ink">
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-1 align-bottom"
        >
          <motion.span
            className={`inline-block ${w.accent ? "text-navy" : ""}`}
            initial={reduce ? { y: 0 } : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15 + i * 0.09,
            }}
          >
            {w.text}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
