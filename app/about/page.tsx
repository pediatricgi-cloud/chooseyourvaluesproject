export const metadata = {
  title: 'About'
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="section-title">About Choose Your Values</h1>
        <p className="mt-3 max-w-3xl text-sm text-ink/90">
          This campaign exists to help people examine whether public policies align with the values they claim:
          mercy, freedom, fairness, truth, and care for neighbors. We believe voting is one of the clearest moral choices we make together.
        </p>
      </section>

      <section>
        <h2 className="section-title">Our tone</h2>
        <p className="mt-3 max-w-3xl text-sm text-ink/90">
          We are firm and honest about policy consequences. We aim to be non-accusatory, focused on reflection, and grounded in shared human dignity.
        </p>
      </section>

      <section>
        <h2 className="section-title">How to participate</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink/90">
          <li>Share signs in your yard, window, or community space with permission.</li>
          <li>Host a neighborhood values conversation.</li>
          <li>Share campaign graphics online and invite respectful dialogue.</li>
          <li>Join the list to volunteer, design, or support outreach.</li>
        </ul>
      </section>

      <section className="rounded border border-civic/30 bg-civic/5 p-4">
        <h2 className="text-lg font-black text-civic">Press / contact (placeholder)</h2>
        <p className="mt-2 text-sm text-ink/90">Email: press@chooseyourvalues.org</p>
        <p className="text-sm text-ink/90">Media kit: coming soon</p>
      </section>
    </div>
  );
}
