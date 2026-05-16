import { Reveal } from "@/components/Reveal";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/PageShell";
import driveways from "@/assets/service-driveways.jpg";
import walls from "@/assets/service-walls.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Driveways & Perimeter Walls · Meckie" },
      { name: "description", content: "Two services. One standard. Driveway design and installation, and engineered perimeter walls across Harare." },
      { property: "og:title", content: "Meckie Services — Driveways & Walls" },
      { property: "og:description", content: "From consultation to final inspection — a four-step practice for paving and perimeter walls." },
    ],
  }),
  component: ServicesPage,
});

const STEPS = [
  ["01", "Consultation", "A site visit. We listen first, measure second. No obligation, no template proposal."],
  ["02", "Design & Quote", "Drawings, material schedule and a fixed quote — issued within 48 hours."],
  ["03", "Installation", "Set-out, base preparation, bedding, laying, jointing — overseen by a director."],
  ["04", "Final Inspection", "A walk-through with the client. We sign off only when you do."],
] as const;

function ServiceBlock({
  img, eyebrow, title, body, reverse = false,
}: { img: string; eyebrow: string; title: string; body: string; reverse?: boolean }) {
  return (
     <Reveal delay={0}>
    <section className="container-luxe py-24 md:py-32 grid md:grid-cols-12 gap-12 items-center">
      <div className={`md:col-span-7 ${reverse ? "md:order-2" : ""}`}>
        <div className="relative aspect-[5/4] overflow-hidden">
          <img src={img} loading="lazy" width={1600} height={1100} alt={title} className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </div>
      <div className={`md:col-span-5 ${reverse ? "md:order-1" : ""}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95]">{title}</h2>
        <p className="mt-8 text-base leading-relaxed text-foreground/80 max-w-md">{body}</p>
        <Link to="/contact" className="mt-8 inline-flex link-underline text-[11px] tracking-[0.22em] uppercase">
          Discuss a project →
        </Link>
      </div>
    </section>
    </Reveal>
  );
}

function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="Two services. One standard."
        intro="We do two things, well. Driveway and architectural surface installation, and engineered perimeter walls — both delivered against the same internal standard since 1995."
      />

      <ServiceBlock
        img={driveways}
        eyebrow="Service 01"
        title="Driveways."
        body="From a single residential entrance to a 1,200 m² estate forecourt — we set out, prepare, bed and lay every metre to a tolerance the surface itself never reveals. Includes drainage, edging and feature inlays."
      />

      <ServiceBlock
        img={walls}
        eyebrow="Service 02"
        title="Perimeter walls."
        body="Engineered boundary walls in architectural block, finished with stacked stone cladding or smooth render. Built with footings, reinforcement and capping detailed by the team that designs them."
        reverse
      />

      {/* PROCESS */}
       <Reveal delay={100}>
      <section className="bg-surface py-28 md:py-36 border-t border-border">
        <div className="container-luxe">
          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-5">
              <p className="eyebrow">The Process</p>
              <h2 className="mt-6 font-display text-5xl md:text-6xl leading-[0.95]">Four steps.<br/>No surprises.</h2>
            </div>
            <p className="md:col-span-7 text-base leading-relaxed text-muted-foreground max-w-xl">
              From the first conversation to the final walk-through — a sequence we have refined over three decades and several hundred installations.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-4 gap-px bg-border border border-border">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="bg-surface p-8 md:p-10">
                <p className="text-xs tracking-widest text-muted-foreground">{n}</p>
                <h3 className="mt-4 font-display text-2xl tracking-wide">{t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>
    </PageShell>
  );
}
