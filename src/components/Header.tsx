import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);


  const path = useRouterState({
    select: (s) => s.location.pathname,
  });

  const { theme, toggle } = useTheme();

 
  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
<header
  className="
    fixed
    top-0
    inset-x-0
    z-50
    bg-background/95
    backdrop-blur-lg
    border-b
    border-border
    transition-all
    duration-500
  "
>
      <div
        className="
          container-luxe
          flex
          items-center
          justify-between
          h-[88px]
          lg:h-[100px]
          px-5
          lg:px-6
        "
      >

        {/* Logo */}

        <Link
          to="/"
          className="
            flex
            items-center
            shrink-0
            transition-transform
            duration-300
            hover:scale-[1.02]
          "
        >
   <img
  src="https://i.ibb.co/hJQSF5sQ/logo-transparent-background.png"
  alt="Meckie Construction"
  className="
    h-[85px]
    sm:h-[95px]
    lg:h-[110px]
    w-auto
    object-contain
    mt-2
  "
/>
        </Link>

        {/* Desktop Nav */}

        <nav
          className="
            hidden
            lg:flex
            items-center
            gap-10
          "
        >
          {NAV.map((item) => {
            const active =
              item.to === "/"
                ? path === "/"
                : path.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className="
                  relative
                  text-[11px]
                  tracking-[0.22em]
                  uppercase
                  font-medium
                  text-foreground/75
                  hover:text-foreground
                  transition-colors
                  duration-300
                "
              >
                {item.label}

                <span
                  className="
                    absolute
                    -bottom-2
                    left-1/2
                    -translate-x-1/2
                    h-[1.5px]
                    bg-[var(--brand-orange)]
                    transition-all
                    duration-500
                  "
                  style={{
                    width: active ? "18px" : "0px",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}

        <div className="flex items-center gap-3">

          {/* Theme Toggle */}

          <button
  onClick={toggle}
  aria-label="Toggle theme"
  className="
    hidden
    sm:inline-flex
    h-10
    w-10
    items-center
    justify-center
    border
    border-foreground/70
    text-foreground
    hover:bg-foreground
    hover:text-background
    transition-all
    duration-300
  "
>
  {theme === "light" ? (
    <Moon className="h-4 w-4" />
  ) : (
    <Sun className="h-4 w-4" />
  )}
</button>

          {/* CTA */}

         <Link
  to="/contact"
  className="
    hidden
    md:inline-flex
    items-center
    justify-center
    text-[11px]
    tracking-[0.24em]
    uppercase
    font-medium
    px-6
    h-10
    border
    border-foreground/70
    text-foreground
    hover:bg-foreground
    hover:text-background
    transition-all
    duration-300
  "
>
  Request Quote
</Link>

          {/* Mobile Menu */}

          <button
            onClick={() => setOpen((v) => !v)}
            className="
              lg:hidden
              inline-flex
              h-10
              w-10
              items-center
              justify-center
            "
            aria-label="Menu"
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-[max-height,opacity]
          duration-500
          ${
            open
              ? "max-h-[85vh] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <div
          className="
            container-luxe
            py-10
            flex
            flex-col
            gap-7
            border-t
            border-border
            bg-background
          "
        >

          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="
                font-display
                text-3xl
                tracking-wide
              "
              style={{
                animationDelay: `${i * 60}ms`,
              }}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={toggle}
            className="
              self-start
              mt-2
              text-[11px]
              tracking-[0.22em]
              uppercase
              text-muted-foreground
            "
          >
            {theme === "light"
              ? "Dark mode"
              : "Light mode"}
          </button>

        </div>
      </div>
    </header>
  );
}