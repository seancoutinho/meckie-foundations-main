import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Signature Installations · Meckie" },
      {
        name: "description",
        content:
          "Selected installations across Harare — Greendale, Jewel Earth Workshop, Westlea and Southview Park.",
      },
      {
        property: "og:title",
        content: "Meckie — Our Work Speaks for Itself",
      },
      {
        property: "og:description",
        content:
          "A visual archive of paved driveways, courtyards and perimeter walls across Harare.",
      },
      {
        property: "og:image",
        content: "/assets/gallery-greendale.jpg",
      },
    ],
  }),
  component: GalleryPage,
});

const PROJECTS = [
  {
    title: "Greendale Residence",
    suburb: "Greendale, Harare",
    scope: "Residential roadway paving · Charcoal herringbone paver installation",
    after: "/assets/gallery-greendale.png",
    before: "/assets/before-4.png",
  },

  {
    title: "Jewel Earth Workshop",
    suburb: "Industrial, Harare",
    scope: "Commercial parking paving · Heavy-duty charcoal herringbone pavers",
    after: "/assets/gallery-jewel.png",
    before: "/assets/before-3.png",
  },

  {
    title: "Westlea Project",
    suburb: "Westlea, Harare",
    scope: "Driveway & courtyard paving · Dual-tone interlocking dog bone pavers installation",
    after: "/assets/gallery-westlea.png",
    before: "/assets/before-1.png",
  },
  {
    title: "Southview Park",
    suburb: "Fidelity, Harare",
    scope: "Residential entrance paving · Hexagonal interlocking paver installation",
    after: "/assets/gallery-southview.png",
    before: "/assets/before-2.png",
  },
] as const;

function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Selected Work"
        title="Our work speaks for itself."
        intro="A small set of recent installations, paired with their before — because the surface is only half the story."
      />

      <Reveal>
        <section className="container-luxe pb-32 space-y-32">
          {PROJECTS.map((p, i) => (
            <article
              key={p.title}
              className="grid md:grid-cols-12 gap-8 items-end"
            >
              <div
                className={`md:col-span-9 ${
                  i % 2 ? "md:col-start-4" : ""
                }`}
              >
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <img
                    src={p.after}
                    loading="lazy"
                    width={1600}
                    height={1100}
                    alt={`${p.title} — after`}
                    className="img-zoom absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>

              <div
                className={`md:col-span-3 ${
                  i % 2 ? "md:col-start-1 md:row-start-1" : ""
                }`}
              >
                <p className="eyebrow">Project 0{i + 1}</p>

                <h2 className="mt-4 font-display text-3xl leading-[1.05] tracking-wide">
                  {p.title}
                </h2>

                <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                  {p.suburb}
                </p>

                <p className="mt-6 text-sm leading-relaxed text-foreground/75">
                  {p.scope}
                </p>

                <div className="mt-8 flex items-end gap-4">
                  <figure>
                    <div className="relative w-32 aspect-square overflow-hidden">
                      <img
                        src={p.before}
                        loading="lazy"
                        width={400}
                        height={400}
                        alt={`${p.title} — before`}
                        className="absolute inset-0 h-full w-full object-cover grayscale opacity-80"
                      />
                    </div>

                    <figcaption className="mt-2 text-[10px] tracking-widest uppercase text-muted-foreground">
                      Before
                    </figcaption>
                  </figure>
                </div>
              </div>
            </article>
          ))}
        </section>
      </Reveal>
    </PageShell>
  );
}