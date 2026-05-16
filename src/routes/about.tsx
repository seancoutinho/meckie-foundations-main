import { Reveal } from "@/components/Reveal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import service from "@/assets/service-driveways.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Meckie Construction · Trusted Since 1995" },
      { name: "description", content: "Built on precision. Trusted since 1995. The story, vision and values behind Meckie Construction in Harare." },
      { property: "og:title", content: "About Meckie Construction" },
      { property: "og:description", content: "Three decades of paving Harare's most demanding residential and architectural projects." },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  ["Vision", "To set the architectural standard for outdoor surfaces in Southern Africa — surfaces that age into the property, not out of fashion."],
  ["Mission", "Engineer and install paving, slabs and perimeter walls of measurable, lasting quality, on every site, every time."],
  ["Values", "Precision · Restraint · Authority · Trust. The four words on every drawing we issue."],
] as const;

function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Meckie · Est. 1995"
        title="Built on precision. Trusted since 1995."
        intro="Meckie Driveways (Pvt) Ltd — trading as Meckie Construction — has spent three decades engineering and installing premium outdoor surfaces across Harare. Two yards. One standard."
      />

      {/* INTRO BLOCK */}
    <Reveal delay={0}>
      <section className="container-luxe pb-24 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-5">
          <p className="eyebrow">The Practice</p>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1]">A quiet<br/>discipline.</h2>
        </div>
        <div className="md:col-span-7 space-y-6 text-base leading-relaxed text-foreground/80">
          <p>
            Meckie was founded in 1995 with a single conviction: a paved surface should be engineered with
            the same rigour as the building it serves. Thirty years later, that conviction is unchanged —
            and it now informs every set-out, every joint, every inspection on every site we run.
          </p>
          <p>
            We operate from two yards in Harare — Hatfield and Waterfalls — and supply directly to private
            clients, architects and contractors. Our catalogue spans driveway pavers, cobbles, slabs,
            hexagonal pavers, coping, edging, blocks, cladding and feature pieces.
          </p>
          <p>
            We don't subcontract our installation crews. The team that walks your property in week one is
            the team that hands it back to you in week three.
          </p>
        </div>
      </section>
      </Reveal>

      {/* IMAGE */}
      <Reveal delay={100}>
      <section className="container-luxe">
        <div className="relative aspect-[16/8] overflow-hidden">
          <img src={service} loading="lazy" width={1920} height={1100} alt="Architectural driveway installation" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </section>
      </Reveal>

      {/* VALUES */}
      <Reveal delay={200}>
      <section className="container-luxe py-28 md:py-40 grid gap-12 md:grid-cols-3">
        {VALUES.map(([t, d]) => (
          <div key={t} className="border-t border-border pt-8">
            <p className="eyebrow">{t}</p>
            <p className="mt-6 font-display text-2xl leading-[1.15] tracking-wide">{d}</p>
          </div>
        ))}
      </section>
      </Reveal>

      {/* LEADERSHIP */}
       <Reveal delay={300}>
      <section className="bg-surface py-28 md:py-36">
        <div className="container-luxe grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Leadership</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1]">Hands<br/>on every<br/>site.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-base leading-relaxed text-foreground/80 max-w-2xl">
            <p>
              Meckie is run by a small leadership team drawn from civil engineering, architectural drafting
              and master masonry. Every installation is signed off by a director — not delegated.
            </p>
            <p>
              We hold ourselves to a single internal standard: would we be willing to put our name on a
              brass plate at the property's entrance? If not, the work doesn't leave the yard.
            </p>
            <Link to="/contact" className="inline-flex link-underline text-[11px] tracking-[0.22em] uppercase pt-4">
              Speak with the team →
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      {/* CLIENT SHOWCASE */}
       <Reveal delay={400}>
      <section className="container-luxe py-28 md:py-36">
        <p className="eyebrow text-center">A few of the people we've worked with</p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center text-muted-foreground">
          {["Greendale Estate","Jewel Earth","Studio H+H","Westlea Residences","Southview Park"].map((c) => (
            <div key={c} className="font-display text-xl tracking-widest opacity-70">{c}</div>
          ))}
        </div>
      </section>
      </Reveal>
    </PageShell>
  );
}
