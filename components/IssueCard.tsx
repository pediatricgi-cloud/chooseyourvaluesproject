import Link from 'next/link';
import type { Issue } from '@/data/issues';

export function IssueCard({ issue }: { issue: Issue }) {
  return (
    <article id={issue.id} className="rounded-xl border-2 border-ink bg-white p-6 shadow-poster scroll-mt-24">
      <h2 className="text-2xl font-black text-civic">{issue.title}</h2>
      <p className="mt-3 text-sm font-semibold text-ember">{issue.valuesFraming}</p>
      <p className="mt-3 text-sm text-ink/90">{issue.policyFraming}</p>
      <ul className="mt-4 list-disc space-y-1 pl-5 text-sm">
        {issue.slogans.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <Link href="/downloads" className="mt-5 inline-block rounded bg-civic px-4 py-2 text-sm font-bold text-paper hover:bg-ember">
        Use these signs
      </Link>
    </article>
  );
}
