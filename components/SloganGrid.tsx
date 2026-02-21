type SloganGridProps = {
  slogans: string[];
};

export function SloganGrid({ slogans }: SloganGridProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {slogans.map((slogan) => (
        <div key={slogan} className="rounded-lg border-2 border-ink bg-paper p-4 text-sm font-bold uppercase tracking-wide text-civic">
          {slogan}
        </div>
      ))}
    </div>
  );
}
