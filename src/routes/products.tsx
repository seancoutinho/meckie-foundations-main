import { Reveal } from "@/components/Reveal";
import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { CATEGORIES, PRODUCTS, type ProductCategory } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { Search } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Premium Paving Catalogue · Meckie" },
      { name: "description", content: "Driveway pavers, cobbles, slabs, hexagonal pavers, coping, blocks, cladding and architectural feature pieces." },
      { property: "og:title", content: "Meckie Catalogue — Premium Paving" },
      { property: "og:description", content: "An architectural catalogue of paving, slabs and feature pieces, engineered in Harare." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<ProductCategory | "All">("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      if (active !== "All" && p.category !== active) return false;
      if (q.trim() && !`${p.name} ${p.spec} ${p.description}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
  }, [active, q]);

  return (
    <PageShell>
      <PageHeader
        eyebrow="The Catalogue"
        title="A library of architectural surfaces."
        intro="Twenty-one engineered products — from driveway pavers to feature medallions — produced to a single standard."
      />
 <Reveal delay={0}>
      <section className="container-luxe pb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-wrap gap-x-1 gap-y-2 -ml-3">
            {(["All", ...CATEGORIES] as const).map((c) => {
              const isActive = active === c;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c as ProductCategory | "All")}
                  className={`relative px-3 py-2 text-[11px] tracking-[0.22em] uppercase font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                  {isActive && (
                    <span
                      className="absolute left-3 right-3 -bottom-px h-px"
                      style={{ background: "var(--brand-orange)" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the catalogue"
              className="w-full bg-transparent border-b border-border focus:border-foreground outline-none pl-7 pr-2 py-3 text-sm placeholder:text-muted-foreground transition-colors"
            />
          </div>
        </div>
      </section>
      </Reveal>

 <Reveal delay={100}>
      <section className="container-luxe pb-32">
        {filtered.length === 0 ? (
          <p className="py-24 text-center text-muted-foreground">No products match that search.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>
      </Reveal>
    </PageShell>
  );
}
