'use client';

import { useMemo, useState } from 'react';
import { DownloadAssetCard } from '@/components/DownloadAssetCard';
import { downloadAssets, type DownloadCategory } from '@/data/downloads';

const categories: DownloadCategory[] = ['Mercy', 'Freedom', 'Faith', 'Economy', 'Democracy'];

export default function DownloadsPage() {
  const [activeCategory, setActiveCategory] = useState<DownloadCategory | 'All'>('All');

  const filteredAssets = useMemo(() => {
    if (activeCategory === 'All') return downloadAssets;
    return downloadAssets.filter((asset) => asset.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-10">
      <section>
        <h1 className="section-title">Downloads</h1>
        <p className="mt-3 max-w-3xl text-sm text-ink/90">
          Find campaign materials, stencil-friendly phrases, and social graphics for local organizing. All links are placeholders for Version 1.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-bold uppercase tracking-wide text-civic">Filter by category</h2>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className={`rounded border px-3 py-1 text-xs font-bold uppercase ${
              activeCategory === 'All' ? 'border-civic bg-civic text-paper' : 'border-civic text-civic hover:bg-civic hover:text-paper'
            }`}
            onClick={() => setActiveCategory('All')}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`rounded border px-3 py-1 text-xs font-bold uppercase ${
                activeCategory === category ? 'border-civic bg-civic text-paper' : 'border-civic text-civic hover:bg-civic hover:text-paper'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {filteredAssets.map((asset) => (
          <DownloadAssetCard key={asset.title} asset={asset} />
        ))}
      </section>

      <section className="rounded-lg border-2 border-ink bg-paper p-5">
        <h2 className="section-title">Usage guidance</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/90">
          <li>Use materials on personal property or where you have explicit permission.</li>
          <li>Avoid unauthorized painting or posting on public or private surfaces.</li>
          <li>Respect local laws and community spaces while advocating your values.</li>
        </ul>
      </section>
    </div>
  );
}
