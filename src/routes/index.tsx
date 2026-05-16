import { Reveal } from "@/components/Reveal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { PageShell } from "@/components/PageShell";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import hero from "@/assets/hero-driveway.png";
import service1 from "@/assets/service-driveways.jpg";
import service2 from "@/assets/service-walls.jpg";
import gallery from "@/assets/gallery-greendale.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Meckie Construction — Built for Lasting Impressions." },
      { name: "description", content: "Premium paving and driveway solutions engineered for lasting beauty. Harare, Zimbabwe." },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const STATS = [
  ["30+", "Years of Practice"],
  ["21+", "Paver Products"],
  ["100+", "Projects Delivered"],
  ["1", "City. Harare."],
] as const;

const PILLARS = [
  ["01", "Engineered to last", "Every paver, slab and edging is produced and laid to a tolerance the surface itself never reveals."],
  ["02", "Restraint as a discipline", "We design with one fewer line. The surface, the joint, the shadow — never the gimmick."],
  ["03", "Site-led precision", "Each project is set out, levelled and inspected against drawings before a single piece is bedded."],
  ["04", "A signature, not a trend", "Our installations are intended to age into the property, not out of fashion."],
] as const;

const TESTIMONIALS = [
  { q: "The driveway at our Borrowdale home is the first thing every visitor remarks on. Three years in — still flawless.", a: "Tendai M.", role: "Borrowdale, Harare" },
  { q: "Meckie's team set out our forecourt and perimeter walls with the precision of a surveyor. Quietly excellent.", a: "Architect's office", role: "Greendale Project" },
  { q: "We replaced a tired concrete drive. The result is unrecognisable — and the property valuation reflects it.", a: "R. & N. Chiwenga", role: "Mount Pleasant" },
];

function AnimatedCounter({
  end,
}: {
  end: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);

          let start = 0;

          const duration = 700;
          const increment = end / (duration / 16);

          const timer = setInterval(() => {
            start += increment;

            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      {
        threshold: 0.4,
      }
    );

    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [end]);

  return (
    <div ref={ref}>
      {count}+
    </div>
  );
}

function HomePage() {
  const featured = PRODUCTS.slice(0, 3);

  return (
    <PageShell>
      {/* HERO */}
      <section
  className="
    relative
    h-[64vh]
    sm:h-[68vh]
    md:h-[72vh]
    lg:h-[80vh]
    min-h-[420px]
    lg:min-h-[580px]
    w-full
    overflow-hidden
    -mt-20
    pt-20
  "
>
        <img
          src={hero}
          alt="Premium paved driveway at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />


<div
  className="
    relative
    h-full
    container-luxe
    flex
    flex-col
    justify-center
    pt-2
    sm:pt-4
    md:pt-10
    text-white
    px-4
    sm:px-6
  "
>

<p
  className="
    reveal
    text-[9px]
    sm:text-[11px]
    tracking-[0.28em]
    uppercase
    opacity-90
    mb-4
  "
>
  Meckie Construction · Est. 1995
</p>

<h1
  className="
    reveal
    reveal-delay-1
    font-display
    text-[2rem]
    min-[350px]:text-[2.6rem]
    sm:text-5xl
    md:text-7xl
    lg:text-[6rem]
    leading-[0.92]
    tracking-[-0.04em]
    max-w-[950px]
    mb-8
  "
>
Built for Lasting
<br />
Impressions.
</h1>

<p
  className="
    reveal
    reveal-delay-2
    max-w-[260px]
    sm:max-w-xl
    text-[15px]
    sm:text-base
    md:text-lg
    opacity-90
    leading-[1.7]
    mt-1
  "
>
Premium paving and driveway solutions engineered for lasting beauty.
</p>

<div
  className="
    reveal
    reveal-delay-3
    mt-8
    flex
    flex-col
    min-[300px]:flex-row
    gap-4
  "
>

<Link
  to="/products"
  className="
    inline-flex
    justify-center
    items-center
    text-[10px]
    tracking-[0.22em]
    uppercase
    font-medium
    px-6
    h-11
    text-white
  "
  style={{ background: "var(--brand-orange)" }}
>
View Products
</Link>

<Link
  to="/contact"
  className="
    inline-flex
    justify-center
    items-center
    text-[10px]
    tracking-[0.22em]
    uppercase
    font-medium
    px-6
    h-11
    border
    border-white/70
    hover:bg-white
    hover:text-foreground
    transition-colors
  "
>
Request a Quote
</Link>

</div>
</div>

      </section>

    {/* STATS */}
    <Reveal>
<section className="border-b border-border">
  <div className="container-luxe grid grid-cols-2 md:grid-cols-4 divide-x divide-border">

    {STATS.map(([n, l]) => (
      <div
        key={l}
        className="py-12 px-2 text-center first:pl-0"
      >
        <div className="font-display text-5xl md:text-6xl">

          {n === "1" ? (
            n
          ) : (
            <AnimatedCounter
              end={parseInt(n)}
            />
          )}

        </div>

        <p className="mt-3 eyebrow">
          {l}
        </p>

      </div>
    ))}

  </div>
</section>
</Reveal>

  {/* WHY MECKIE */}
<Reveal>
  <section className="container-luxe py-28 md:py-40 grid gap-16 md:grid-cols-12">

    <div className="md:col-span-4">
      <p className="eyebrow">Why Meckie</p>

      <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1] max-w-sm">
        A practice built<br/>on precision.
      </h2>

      <p className="mt-8 text-sm leading-relaxed text-muted-foreground max-w-sm">
        Three decades of paving the most demanding residential and architectural projects in Harare.
        Our work is the quiet kind — the kind that holds.
      </p>
    </div>

    <div className="md:col-span-8 grid sm:grid-cols-2 gap-x-10 gap-y-14">
      {PILLARS.map(([n, t, d]) => (
        <div key={n}>
          <p className="text-xs tracking-widest text-muted-foreground">{n}</p>

          <h3 className="mt-3 font-display text-2xl tracking-wide">
            {t}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-foreground/75">
            {d}
          </p>
        </div>
      ))}
    </div>

  </section>
</Reveal>

      {/* FEATURED PRODUCTS */}
      <Reveal>
      <section className="container-luxe pb-28 md:pb-40">
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="eyebrow">Featured Catalogue</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Selected surfaces.</h2>
          </div>
          <Link to="/products" className="hidden sm:inline-flex link-underline text-[11px] tracking-[0.22em] uppercase">
            All products →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-x-10 gap-y-16">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
</Reveal>
      {/* SIGNATURE INSTALLATIONS */}
      <Reveal>
      <section className="bg-surface py-28 md:py-40">
        <div className="container-luxe grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden">
            <img src={gallery} loading="lazy" width={1600} height={1200} alt="Signature paved residence" className="absolute inset-0 h-full w-full object-cover" />
          </div>
          <div className="md:col-span-5">
            <p className="eyebrow">Signature Installation</p>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1]">Greendale<br/>Residence.</h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground max-w-md">
              A 420 m² entry forecourt in charcoal driveway pavers, edged with honed wall caps and a
              radial fan at the threshold. Installed in 14 days.
            </p>
            <Link to="/gallery" className="mt-8 inline-flex link-underline text-[11px] tracking-[0.22em] uppercase">
              See the gallery →
            </Link>
          </div>
        </div>
      </section>
</Reveal>

      {/* CTA BANNER */}
      <Reveal>
      <section className="container-luxe py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <h2 className="md:col-span-8 font-display text-5xl md:text-7xl leading-[0.95]">
            Begin with a<br/>site visit.
          </h2>
          <div className="md:col-span-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Share the property, the brief, the timeline. We'll respond with a measured plan within 48 hours.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-7 h-12 text-white"
              style={{ background: "var(--brand-orange)" }}
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
      </Reveal>

      {/* TESTIMONIALS */}
      <Reveal>
      <section className="bg-surface py-28 md:py-36 border-t border-border">
        <div className="container-luxe">
          <p className="eyebrow text-center">In their words</p>
          <div className="mt-16 grid md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <figure key={i} className="border-t border-border pt-8">
                <blockquote className="font-display text-2xl leading-[1.15] tracking-wide">
                  “{t.q}”
                </blockquote>
                <figcaption className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
                  {t.a} · {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
</Reveal>


      {/* SERVICES TEASE */}
      <Reveal>
      <section className="container-luxe py-28 md:py-36 grid md:grid-cols-2 gap-10">
        {[
          { img: service1, title: "Driveways", to: "/services" },
          { img: service2, title: "Perimeter Walls", to: "/services" },
        ].map((s) => (
          <Link key={s.title} to={s.to} className="group block">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={s.img} loading="lazy" width={1600} height={1100} alt={s.title} className="img-zoom absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="mt-6 flex items-baseline justify-between">
              <h3 className="font-display text-3xl tracking-wide">{s.title}</h3>
              <span className="link-underline text-[11px] tracking-[0.22em] uppercase">View →</span>
            </div>
          </Link>
        ))}
      </section>
      </Reveal>
    </PageShell>
  );
}
