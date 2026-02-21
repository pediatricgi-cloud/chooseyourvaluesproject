type ScriptureListProps = {
  references: string[];
};

export function ScriptureList({ references }: ScriptureListProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {references.map((reference) => (
        <li key={reference} className="rounded border border-civic/30 bg-civic/5 px-4 py-3 font-semibold text-civic">
          {reference}
        </li>
      ))}
    </ul>
  );
}
