import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About — Aufren LLC",
  description:
    "Aufren LLC builds, operates, and stewards consumer and commerce ventures. Registered in Sheridan, Wyoming.",
};

const columns = [
  {
    label: "Who We Are",
    body: "Aufren is a privately held company that builds and operates ventures across consumer brands, online retail, and trade. We work hands-on — from first idea to running business.",
  },
  {
    label: "Mission",
    body: "To build durable businesses that connect good products with the people who want them, and to hold those businesses for the long term rather than the quick exit.",
  },
  {
    label: "Values",
    body: "Patience over noise. Quality over volume. We measure progress in the businesses we keep building, not the trends we chase.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-shell px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
        <Reveal>
          <p className="eyebrow">About</p>
          <h1 className="mt-6 max-w-3xl font-serif text-display-xl font-light text-ink">
            A company built to{" "}
            <span className="text-navy">last</span>.
          </h1>
          <p className="mt-8 max-w-xl font-sans text-base leading-relaxed text-ink-mute md:text-lg">
            We started Aufren to build and hold businesses the patient way —
            backing each one with operating attention rather than treating it as
            a trade.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-hair">
        <div className="mx-auto grid max-w-shell gap-x-10 gap-y-14 px-6 py-20 md:grid-cols-3 md:px-10 md:py-28">
          {columns.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <p className="eyebrow">{c.label}</p>
              <p className="mt-5 font-serif text-display-md font-light leading-snug text-ink">
                {c.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
