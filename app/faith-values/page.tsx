import { ScriptureList } from '@/components/ScriptureList';
import { faithReferences, faithSignIdeas } from '@/data/site';

export const metadata = {
  title: 'Faith & Values'
};

export default function FaithValuesPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="section-title">Faith & Values</h1>
        <p className="max-w-3xl text-sm text-ink/90">
          This campaign is grounded in compassion, justice, mercy, and care for neighbors. For people of faith,
          these commitments can be a direct expression of spiritual conviction in public life.
        </p>
        <p className="max-w-3xl text-sm text-ink/90">
          Choose Your Values welcomes people of faith and no faith. The goal is values-centered reflection that leads
          to practical solidarity and responsible civic action.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Scripture references</h2>
        <ScriptureList references={faithReferences} />
      </section>

      <section className="space-y-4">
        <h2 className="section-title">Faith-themed sign ideas</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {faithSignIdeas.map((idea) => (
            <li key={idea} className="rounded border border-civic/30 bg-white p-3 text-sm font-semibold text-civic">
              {idea}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
