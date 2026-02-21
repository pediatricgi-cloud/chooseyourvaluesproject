import Link from 'next/link';
import { IssueCard } from '@/components/IssueCard';
import { issues } from '@/data/issues';

export const metadata = {
  title: 'Issues'
};

export default function IssuesPage() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="section-title">Issues</h1>
        <p className="mt-3 max-w-3xl text-sm text-ink/90">
          These issues are framed through a values lens. Each section includes example messaging the campaign may use
          to help people connect policy consequences to core commitments.
        </p>
      </section>

      <section className="rounded-lg border border-civic/30 bg-white p-4">
        <p className="text-xs font-bold uppercase tracking-wide text-civic">Jump to issue</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {issues.map((issue) => (
            <Link key={issue.id} href={`#${issue.id}`} className="rounded border border-civic px-3 py-1 text-xs font-semibold text-civic hover:bg-civic hover:text-paper">
              {issue.title}
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6">
        {issues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </section>
    </div>
  );
}
