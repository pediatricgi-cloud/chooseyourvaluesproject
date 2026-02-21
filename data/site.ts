export const siteConfig = {
  name: 'Choose Your Values',
  tagline: 'Choose your values. Vote like it.',
  description:
    'A values-first public awareness campaign encouraging people to align policy choices with mercy, freedom, truth, justice, and care for neighbors.'
};

export type ValuePillar = {
  title: string;
  summary: string;
};

export const valuePillars: ValuePillar[] = [
  { title: 'Mercy', summary: 'Choose policies that protect dignity, compassion, and human worth.' },
  { title: 'Freedom', summary: 'Defend freedom as shared liberty, not selective control.' },
  { title: 'Truth', summary: 'Support leaders and institutions that respect facts and honesty.' },
  { title: 'Neighborliness', summary: 'Care for families, newcomers, and communities in practical ways.' },
  { title: 'Justice', summary: 'Advance fairness in law, economy, and opportunity for everyone.' }
];

export const featuredSlogans: string[] = [
  'Choose Your Values: Mercy or Fear',
  'Choose Your Values: Freedom or Control',
  'Choose Your Values: Neighbors or Scapegoats',
  'Choose Your Values: Truth or Chaos',
  'Choose Your Values: Kids or Tax Breaks',
  'Choose Your Values: Justice or Indifference',
  'Love your neighbor. Policy counts.',
  'Compassion is a public value.'
];

export const faithReferences = ['Micah 6:8', 'Matthew 25:35', 'Leviticus 19:34', 'Proverbs 14:31'];

export const faithSignIdeas = [
  'Act justly. Love mercy. (Micah 6:8)',
  'Welcome the stranger. (Matt. 25:35)',
  'Love the foreigner as yourself. (Lev. 19:34)',
  'Kindness to the needy honors God. (Prov. 14:31)',
  'Faith without compassion is empty.',
  'Mercy is a public witness.',
  'Neighbor-love is policy, too.',
  'Protect the vulnerable. Practice your faith.',
  'Justice is not optional.',
  'Choose mercy over fear.'
];
