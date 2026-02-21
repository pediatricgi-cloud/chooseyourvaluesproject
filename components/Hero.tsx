import type { Route } from 'next';
import Link from 'next/link';

type HeroProps = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: Route };
  secondaryCta: { label: string; href: Route };
};

export function Hero({ title, subtitle, primaryCta, secondaryCta }: HeroProps) {
  return (
    <section className="rounded-xl border-4 border-ink bg-civic px-6 py-14 text-paper shadow-poster md:px-10">
      <p className="mb-3 inline-block rounded bg-gold px-3 py-1 text-xs font-black uppercase tracking-widest text-ink">Public Awareness Campaign</p>
      <h1 className="max-w-3xl text-4xl font-black uppercase leading-tight md:text-6xl">{title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-paper/90">{subtitle}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href={primaryCta.href} className="rounded border-2 border-paper bg-paper px-5 py-3 text-sm font-black uppercase tracking-wide text-civic transition hover:-translate-y-0.5 hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
          {primaryCta.label}
        </Link>
        <Link href={secondaryCta.href} className="rounded border-2 border-paper px-5 py-3 text-sm font-black uppercase tracking-wide text-paper transition hover:-translate-y-0.5 hover:bg-paper hover:text-civic focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold">
          {secondaryCta.label}
        </Link>
      </div>
    </section>
  );
}
