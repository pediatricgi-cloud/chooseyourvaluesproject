import type { DownloadAsset } from '@/data/downloads';

export function DownloadAssetCard({ asset }: { asset: DownloadAsset }) {
  return (
    <article className="rounded-lg border-2 border-ink bg-white p-5 shadow-poster">
      <p className="text-xs font-bold uppercase tracking-wide text-ember">{asset.format} · {asset.category}</p>
      <h3 className="mt-2 text-lg font-black text-civic">{asset.title}</h3>
      <p className="mt-2 text-sm text-ink/90">{asset.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {['PDF', 'PNG', 'SVG'].map((fmt) => (
          <button
            key={fmt}
            type="button"
            className="rounded border border-civic px-3 py-1 text-xs font-bold uppercase text-civic transition hover:bg-civic hover:text-paper"
            aria-label={`Download ${asset.title} as ${fmt}`}
          >
            {fmt}
          </button>
        ))}
      </div>
    </article>
  );
}
