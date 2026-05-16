import type { Product } from "@/lib/products";

const WA = "https://wa.me/263772000000?text=";

export function ProductCard({ product }: { product: Product }) {
  const enquire = `${WA}${encodeURIComponent(`Hello Meckie, I'd like to enquire about: ${product.name} (${product.id}).`)}`;
  return (
    <article className="group">
      <div className="relative aspect-square overflow-hidden bg-surface-2">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="img-zoom h-full w-full object-cover"
        />
      </div>
      <div className="pt-6 flex items-start justify-between gap-6">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3 className="mt-2 font-display text-2xl tracking-wide">{product.name}</h3>
          <p className="mt-2 text-xs text-muted-foreground">{product.spec}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-sm font-medium" style={{ color: "var(--brand-orange)" }}>
            {product.price}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-foreground/75 max-w-md">{product.description}</p>
      <a
        href={enquire}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase font-medium link-underline"
      >
        Enquire on WhatsApp →
      </a>
    </article>
  );
}
