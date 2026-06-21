import Link from "next/link";
import HeroHeadline from "@/components/HeroHeadline";
import HorizonArc from "@/components/HorizonArc";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const stats = [
  { figure: "2026", label: "Founded in Wyoming, USA" },
  { figure: "3", label: "Core areas of operation" },
  { figure: "Global", label: "Markets served" },
  { figure: "Long-term", label: "Investment horizon" },
];

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

const sectors = [
  {
    name: "Consumer Brands",
    body: "Direct-to-consumer products built around everyday demand, modern design, and dependable fulfilment.",
  },
  {
    name: "Commerce & Retail",
    body: "Online storefronts and marketplaces operated end to end — sourcing, merchandising, logistics, and support.",
  },
  {
    name: "Cross-Border Trade",
    body: "Sourcing and distribution that move quality goods between markets with reliability and scale.",
  },
];

const approach = [
  {
    no: "01",
    title: "Build with intent",
    body: "Every venture starts with a real demand and a reason to exist. We don't chase trends; we build things meant to last.",
  },
  {
    no: "02",
    title: "Operate, don't speculate",
    body: "We run the businesses we own. Hands-on operating attention is how value is created, not financial engineering.",
  },
  {
    no: "03",
    title: "Hold for the horizon",
    body: "We measure success in years, compounding the businesses we keep rather than the ones we flip.",
  },
  {
    no: "04",
    title: "Connect the group",
    body: "Shared infrastructure, sourcing, and know-how let each venture move faster than it could alone.",
  },
];

const ventures = [
  { name: "Consumer brand", tag: "Direct-to-consumer" },
  { name: "Commerce venture", tag: "Online retail" },
  { name: "Trade operation", tag: "Cross-border" },
  { name: "In development", tag: "Coming soon" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-shell px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="eyebrow">Sheridan, Wyoming &middot; United States</p>
          <HeroHeadline />
          <Reveal delay={0.7} className="mt-8 max-w-xl">
            <p className="font-sans text-base leading-relaxed text-ink-mute md:text-lg">
              Aufren is a holding company that builds, operates, and stewards
              consumer and commerce ventures. We back ideas for the long run and
              connect them to a wider world.
            </p>
          </Reveal>
          <Reveal delay={0.85} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 font-sans text-sm font-medium text-paper transition-colors hover:bg-navy"
            >
              Get in touch
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-sans text-sm font-medium text-ink transition-colors hover:text-navy"
            >
              About the company
            </Link>
          </Reveal>
        </div>

        {/* signature motif */}
        <div className="pointer-events-none absolute -right-10 top-10 hidden w-[42rem] opacity-90 lg:block">
          <HorizonArc />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="border-y border-hair bg-paper-dim/40">
        <div className="mx-auto grid max-w-shell grid-cols-2 gap-px px-6 md:grid-cols-4 md:px-10">
          {stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={i * 0.06}
              className="px-2 py-10 md:py-14"
            >
              <p className="font-serif text-display-md font-light text-navy">
                {s.figure}
              </p>
              <p className="mt-2 font-sans text-sm text-ink-mute">{s.label}</p>
            </Reveal>
          ))}
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
              <div className="flex h-px w-10 bg-gold" />
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

      {/* ── SECTORS ── */}
      <section className="border-t border-hair bg-paper-dim/40">
        <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow">Where we operate</p>
            <h2 className="mt-5 max-w-2xl font-serif text-display-lg font-light text-ink">
              Sectors we know, end to end.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {sectors.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <div className="h-full rounded-xl border border-hair bg-paper p-8 transition-colors hover:border-navy/40">
                  <h3 className="font-serif text-display-md font-normal text-ink">
                    {s.name}
                  </h3>
                  <p className="mt-4 font-sans text-[0.95rem] leading-relaxed text-ink-mute">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROACH (numbered sequence) ── */}
      <section className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="eyebrow">How we work</p>
          <h2 className="mt-5 max-w-2xl font-serif text-display-lg font-light text-ink">
            Four principles behind every venture.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {approach.map((a, i) => (
            <Reveal key={a.no} delay={i * 0.06}>
              <div className="flex gap-6 border-t border-hair pt-6">
                <span className="font-sans text-sm font-semibold tabular-nums text-gold">
                  {a.no}
                </span>
                <div>
                  <h3 className="font-serif text-[1.4rem] font-normal text-ink">
                    {a.title}
                  </h3>
                  <p className="mt-3 font-sans text-[0.95rem] leading-relaxed text-ink-mute">
                    {a.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── VENTURES ── */}
      <section className="border-t border-hair bg-navy-deep">
        <div className="mx-auto max-w-shell px-6 py-24 md:px-10 md:py-32">
          <Reveal>
            <p className="eyebrow !text-paper/55">The group</p>
            <h2 className="mt-5 max-w-2xl font-serif text-display-lg font-light text-paper">
              A growing family of ventures.
            </h2>
            <p className="mt-6 max-w-md font-sans text-base leading-relaxed text-paper/65">
              We build and operate businesses across consumer and commerce. Our
              portfolio expands as new ventures take shape.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {ventures.map((v, i) => (
              <Reveal key={v.name + i} delay={i * 0.06}>
                <div className="h-full bg-paper/[0.03] p-8">
                  <div className="flex h-px w-8 bg-gold-soft" />
                  <h3 className="mt-6 font-serif text-[1.3rem] font-normal text-paper">
                    {v.name}
                  </h3>
                  <p className="mt-2 font-sans text-xs uppercase tracking-[0.14em] text-paper/45">
                    {v.tag}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="border-t border-paper/10 bg-navy-deep">
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
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-paper px-6 py-3 font-sans text-sm font-medium text-navy-deep transition-opacity hover:opacity-90"
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
