import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="container-luxe pt-24 pb-20 md:pt-32 md:pb-28">
      <p className="eyebrow reveal">{eyebrow}</p>
      <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
        {title}
      </h1>
      {intro && (
        <p className="reveal reveal-delay-2 mt-8 max-w-xl text-base md:text-lg leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
      <div className="hairline mt-16" />
    </section>
  );
}
