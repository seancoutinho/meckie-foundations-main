import { Reveal } from "@/components/Reveal";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <Reveal>
    <footer className="mt-14 border-t border-border bg-surface">
      <div className="container-luxe py-20 grid gap-14 md:grid-cols-12">

        {/* Brand Section */}
        <div className="md:col-span-5">

          <img
            src="https://i.ibb.co/hJQSF5sQ/logo-transparent-background.png"
            alt="Meckie Construction"
            className="
              h-[120px]
              lg:h-[150px]
              w-auto
              object-contain
              mb-3
            "
          />

          <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mt-2">
            Construction · Est. 1995
          </p>

          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Premium paving, driveways and architectural surfaces —
            engineered in Harare, installed with the discipline of
            three decades.
          </p>

          <div className="hairline mt-10" />

          <p className="mt-6 text-xs italic text-muted-foreground">
            "Construction Excellence. Every Project. Every Time."
          </p>

        </div>

        {/* Navigation */}
        <div className="md:col-span-3">

          <p className="eyebrow">Navigate</p>

          <ul className="mt-6 space-y-4 text-sm">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/products", "Products"],
              ["/services", "Services"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link
                  to={to}
                  className="
                    link-underline
                    text-foreground/80
                    hover:text-foreground
                    transition-colors
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        {/* Contact */}
        <div className="md:col-span-4">

          <p className="eyebrow">Visit</p>

          <ul className="mt-6 space-y-6 text-sm leading-relaxed text-foreground/80">

            <li>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Hatfield
              </span>

              7 Dawlish Road, Chadcombe,
              Hatfield, Harare
            </li>

            <li>
              <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">
                Waterfalls
              </span>

              3243 Masotsha Ndlovu,
              Waterfalls, Harare
            </li>

            <li className="flex flex-wrap gap-3 items-center">

              <a
                href="tel:+263772989306"
                className="link-underline"
              >
                +263 77 298 9306
              </a>

              <span className="text-muted-foreground">
                ·
              </span>

              <a
                href="mailto:sales@meckieconstruction.co.zw"
                className="link-underline"
              >
                sales@meckieconstruction.co.zw
              </a>

            </li>

          </ul>

        </div>
      </div>

      {/* Bottom Footer */}

      <div className="border-t border-border">
        <div className="
          container-luxe
          h-16
          flex
          items-center
          justify-between
          text-[11px]
          tracking-widest
          uppercase
          text-muted-foreground
        ">
          <span>
            © {new Date().getFullYear()} Meckie Driveways (Pvt) Ltd
          </span>

          <span className="hidden md:inline">
            Harare · Zimbabwe
          </span>
        </div>
      </div>

    </footer>
    </Reveal>
  );
}