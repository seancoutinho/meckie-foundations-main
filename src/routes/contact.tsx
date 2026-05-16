import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Meckie Construction · Harare" },
      { name: "description", content: "Visit our Hatfield or Waterfalls yard, or send a project enquiry. We respond within 48 hours." },
      { property: "og:title", content: "Contact Meckie Construction" },
      { property: "og:description", content: "Two yards in Harare. One standard of response. Begin a project with us." },
    ],
  }),
  component: ContactPage,
});

const LOCATIONS = [
  {
    name: "Hatfield Yard",
    address: "7 Dawlish Road, Chadcombe, Hatfield, Harare",
    map: "https://www.google.com/maps?q=7+Dawlish+Road+Chadcombe+Hatfield+Harare&output=embed",
  },
  {
    name: "Waterfalls Yard",
    address: "3243 Masotsha Ndlovu, Waterfalls, Harare",
    map: "https://www.google.com/maps?q=3243+Masotsha+Ndlovu+Waterfalls+Harare&output=embed",
  },
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Begin a project with Meckie."
        intro="Tell us about the property, the brief and the timeline. We'll respond with a measured plan within 48 hours."
      />

<Reveal>
      <section className="container-luxe pb-32 grid md:grid-cols-12 gap-16">
        {/* LEFT — details */}
        <div className="md:col-span-5 space-y-12">
          <div>
            <p className="eyebrow">Direct</p>
            <ul className="mt-6 space-y-4 text-base">
              <li><a href="tel:+263772989306" className="link-underline">+263 772 989 306</a></li>
              <li><a href="mailto:sales@meckieconstruction.co.zw" className="link-underline">sales@meckieconstruction.co.zw</a></li>
              <li>
                <a
                  href="https://wa.me/+263719989306"
                  target="_blank" rel="noreferrer"
                  className="inline-flex items-center gap-3 mt-2 px-5 h-11 text-[11px] tracking-[0.22em] uppercase font-medium text-white"
                  style={{ background: "var(--brand-green)" }}
                >
                  WhatsApp the studio
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-10">
            {LOCATIONS.map((loc) => (
              <div key={loc.name}>
                <p className="eyebrow">{loc.name}</p>
                <p className="mt-4 text-base leading-relaxed">{loc.address}</p>
                <div className="mt-5 aspect-[16/10] overflow-hidden border border-border">
                  <iframe
                    src={loc.map}
                    title={`Map of ${loc.name}`}
                    loading="lazy"
                    className="h-full w-full grayscale contrast-[0.95]"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="eyebrow">Hours</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Mon – Fri · 08:00 – 17:00<br/>
              Sat · 08:00 – 13:00
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div className="md:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-8"
          >
            <p className="eyebrow">Project Enquiry</p>

            <div className="grid md:grid-cols-2 gap-8">
              <FormField label="Full name" name="name" required />
              <FormField label="Email" type="email" name="email" required />
              <FormField label="Phone" name="phone" />
              <FormField label="Suburb / location" name="suburb" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <FormSelect label="Service" name="service" options={["Driveway","Perimeter wall","Both","Materials only","Other"]} />
              <FormSelect label="Approximate area" name="area" options={["Under 100 m²","100 – 300 m²","300 – 600 m²","600 m²+","Not yet sure"]} />
            </div>

            <div className="space-y-2">
              <label className="eyebrow block">Project notes</label>
              <textarea
                name="notes"
                rows={5}
                className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base resize-none transition-colors"
                placeholder="Tell us about the property, the brief and your ideal start date."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="inline-flex items-center text-[11px] tracking-[0.22em] uppercase font-medium px-8 h-12 text-white"
                style={{ background: "var(--brand-orange)" }}
              >
                Send Enquiry
              </button>
              {sent && (
                <p className="mt-6 text-sm text-foreground/80">
                  Thank you. A director will respond within 48 hours.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
      </Reveal>
    </PageShell>
  );
}

function FormField({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label className="eyebrow block">{label}{required && " *"}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}

function FormSelect({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div className="space-y-2">
      <label className="eyebrow block">{label}</label>
      <select
        name={name}
        defaultValue=""
        className="w-full bg-transparent border-b border-border focus:border-foreground outline-none py-3 text-base transition-colors"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => <option key={o} value={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}
