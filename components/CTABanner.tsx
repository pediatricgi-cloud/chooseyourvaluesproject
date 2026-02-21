import type { Route } from 'next';
import Link from 'next/link';

type CTAItem = {
  href: Route;
  label: string;
};

export function CTABanner({ title, actions }: { title: string; actions: CTAItem[] }) {
  return (
    <section className="rounded-xl border-4 border-ink bg-ember px-6 py-8 text-paper md:px-10">
      <h2 className="text-2xl font-black uppercase md:text-3xl">{title}</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {actions.map((action) => (
          <Link key={action.href} href={action.href} className="rounded border-2 border-paper px-4 py-2 text-sm font-bold uppercase hover:bg-paper hover:text-ember">
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
