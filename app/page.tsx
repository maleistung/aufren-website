import Link from "next/link";
import HeroHeadline from "@/components/HeroHeadline";
import HorizonArc from "@/components/HorizonArc";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const activities = [
  {
    title: "Brand Building",
    body: "We launch and grow consumer brands from the ground up — identity, product, and the systems that let them scale across markets.",
  },
  {
    title: "Commerce & Trade",
    body: "We operate online retail and cross-border trade, connecting reliable supply with demand in the markets that matter.",
  },
  {
    title: "Long-Term Holdings",
    body: "We hold and steward the businesses we build, investing for the horizon rather than the quarter.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-shell px-6 pb-24 pt-20 md:px-10 md:pb-32 md:pt-28">
          <p className="eyebrow">Sheridan, Wyoming &middot; United States</p>
          <HeroHeadline />
          <Reveal delay={0.7} className="mt-8 max-w-xl">
            <p className="font-sans text-base leading-relaxed text-ink-mute md:text-lg">
              Aufren is a holding company that builds, operates, and stewards
              consumer and commerce ventures. We back ideas for the long run and
              connect them to a wider world.
            </p>
          </Reveal>
          <Reveal delay={0.85} className="mt-10">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 border-b border-ink pb-1 font-sans text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy"
            >
              Get in touch
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </Reveal>
        </div>

        {/* signature motif */}
        <div className="pointer-events-none absolute -right-10 top-10 hidden w-[42rem] opacity-90 lg:block">
          <HorizonArc />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <Marquee
        items={["Brands", "Commerce", "Trade", "Ventures", "Holdings", "Growth"]}
      />

      {/* ── WHAT WE DO ── */}
      <section className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow">What we do</p>
          <h2 className="mt-5 max-w-2xl font-serif text-display-lg font-light text-ink">
            A group built around a few things done well.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-14 md:grid-cols-3">
          {activities.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="flex h-px w-10 bg-navy" />
              <h3 className="mt-6 font-serif text-display-md font-normal text-ink">
                {a.title}
              </h3>
              <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-ink-mute">
                {a.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="bg-navy-deep">
        <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow !text-paper/55">Get in touch</p>
            <h2 className="mt-5 max-w-2xl font-serif text-display-lg font-light text-paper">
              Building something, or want to work together?
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-paper/70">
              We read every message. Tell us what you&rsquo;re building and
              we&rsquo;ll get back to you.
            </p>
            <a
              href="mailto:info@aufren.com"
              className="mt-10 inline-flex items-center gap-2 border-b border-paper/60 pb-1 font-sans text-sm font-medium text-paper transition-colors hover:border-paper"
            >
              info@aufren.com
              <span aria-hidden="true">&rarr;</span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
