"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * HorizonArc — the signature motif.
 * A slow rising arc (the "horizon") drawn once on load, with a sun-point
 * that settles onto the line. Pure SVG/motion, no imagery.
 */
export default function HorizonArc({
  className,
  stroke = "#1C2B4A",
}: {
  className?: string;
  stroke?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 600 240"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* horizon line */}
      <motion.path
        d="M0 188 H600"
        stroke={stroke}
        strokeOpacity="0.18"
        strokeWidth="1"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* rising arc */}
      <motion.path
        d="M70 188 C 200 40, 400 40, 530 188"
        stroke={stroke}
        strokeWidth="1.25"
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      />
      {/* settling point */}
      <motion.circle
        cx="300"
        cy="64"
        r="4.5"
        fill={stroke}
        initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 1.4 }}
      />
    </svg>
  );
}
