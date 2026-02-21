export type Issue = {
  id: string;
  title: string;
  valuesFraming: string;
  policyFraming: string;
  slogans: string[];
};

export const issues: Issue[] = [
  {
    id: 'immigration-stranger',
    title: 'Immigration & the stranger',
    valuesFraming: 'If you value human dignity and neighbor-love, how we treat migrants matters deeply.',
    policyFraming:
      'This campaign highlights concerns about policies that criminalize asylum seekers and normalize cruelty toward families seeking safety.',
    slogans: [
      'Mercy has a border policy.',
      'Neighbors, not scapegoats.',
      'Welcome the stranger. (Matt. 25:35)',
      'Fear is not a family policy.',
      'Choose Your Values: Mercy or Fear'
    ]
  },
  {
    id: 'reproductive-freedom',
    title: 'Reproductive freedom',
    valuesFraming: 'If you value freedom and conscience, personal medical decisions deserve privacy and respect.',
    policyFraming:
      'This campaign highlights concerns about government control over reproductive healthcare and the unequal harm it causes.',
    slogans: [
      'Freedom includes bodily autonomy.',
      'Compassion means trusting families.',
      'Choose Your Values: Freedom or Control',
      'Government is not your doctor.',
      'Care, not coercion.'
    ]
  },
  {
    id: 'lgbtq-rights',
    title: 'LGBTQ rights',
    valuesFraming: 'If you value fairness and dignity, every person deserves equal protection under the law.',
    policyFraming:
      'This campaign highlights concerns about legislation and rhetoric that targets LGBTQ people and limits their civil rights.',
    slogans: [
      'Freedom means freedom for other people, too.',
      'Dignity is not up for debate.',
      'Choose Your Values: Justice or Indifference',
      'Equal rights are family values.',
      'No one belongs in a scapegoat campaign.'
    ]
  },
  {
    id: 'poverty-safety-nets',
    title: 'Poverty & safety nets',
    valuesFraming: 'If you value care for neighbors, public policy should protect children, workers, and seniors from hardship.',
    policyFraming:
      'This campaign highlights concerns about cutting food aid, healthcare, and housing supports while costs rise.',
    slogans: [
      'Family values include feeding kids.',
      'Choose kids over cuts.',
      'Compassion is a public value.',
      'Safety nets save lives.',
      'Choose Your Values: Kids or Tax Breaks'
    ]
  },
  {
    id: 'tax-policy-wealth',
    title: 'Tax policy & wealth',
    valuesFraming: 'If you value fairness, tax policy should reward work and shared prosperity, not only concentrated wealth.',
    policyFraming:
      'This campaign highlights concerns about prioritizing tax advantages for billionaires over investments in public goods.',
    slogans: [
      'Prosperity should be shared.',
      'Choose workers over loopholes.',
      'Budget is a values document.',
      'If you support tax cuts for billionaires, vote Republican.',
      'Fairness belongs in the tax code.'
    ]
  },
  {
    id: 'democracy-truth-norms',
    title: 'Democracy, truth, and civic norms',
    valuesFraming: 'If you value truth and constitutional order, leadership should defend elections, facts, and peaceful democracy.',
    policyFraming:
      'This campaign highlights concerns about election denial, disinformation, and efforts that erode trust in democratic institutions.',
    slogans: [
      'Truth is patriotic.',
      'Choose Your Values: Truth or Chaos',
      'Democracy needs honesty.',
      'Facts are a civic duty.',
      'Reject chaos. Protect the republic.'
    ]
  }
];
