import type { ValuePillar } from '@/data/site';

export function PillarCard({ title, summary }: ValuePillar) {
  return (
    <article className="rounded-lg border-2 border-ink bg-white p-5 shadow-poster">
      <h3 className="text-xl font-black uppercase text-civic">{title}</h3>
      <p className="mt-2 text-sm text-ink/90">{summary}</p>
    </article>
  );
}
