import { CTABanner } from '@/components/CTABanner';
import { Hero } from '@/components/Hero';
import { PillarCard } from '@/components/PillarCard';
import { ScriptureList } from '@/components/ScriptureList';
import { SloganGrid } from '@/components/SloganGrid';
import { faithReferences, featuredSlogans, siteConfig, valuePillars } from '@/data/site';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero
        title={siteConfig.name}
        subtitle="A values-first campaign inviting people to align policy choices with mercy, freedom, truth, justice, and care for neighbors."
        primaryCta={{ label: 'Explore the Issues', href: '/issues' }}
        secondaryCta={{ label: 'Download Signs', href: '/downloads' }}
      />

      <section className="space-y-4">
        <h2 className="section-title">What this is</h2>
        <p className="max-w-3xl text-base text-ink/90">
          Choose Your Values helps communities reflect on whether the policies they support match their deepest commitments.
          We believe values are public: mercy, fairness, freedom, truth, and practical care for neighbors should shape how we vote and advocate.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="section-title">Values pillars</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {valuePillars.map((pillar) => (
            <PillarCard key={pillar.title} {...pillar} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="section-title">Featured sign slogans</h2>
        <SloganGrid slogans={featuredSlogans} />
      </section>

      <section className="rounded-lg border-2 border-civic bg-civic/5 p-6">
        <h2 className="section-title">Faith & values</h2>
        <p className="mt-3 max-w-3xl text-sm text-ink/90">
          For many people, values are rooted in faith traditions that call us toward mercy, justice, and neighbor-love.
          These references are offered as reflection points.
        </p>
        <div className="mt-4">
          <ScriptureList references={faithReferences} />
        </div>
      </section>

      <CTABanner
        title="Bring Choose Your Values to your community"
        actions={[
          { href: '/downloads', label: 'Downloads' },
          { href: '/join', label: 'Join' },
          { href: '/about', label: 'About' }
        ]}
      />
    </div>
  );
}
