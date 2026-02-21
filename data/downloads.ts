export type DownloadCategory = 'Mercy' | 'Freedom' | 'Faith' | 'Economy' | 'Democracy';

export type DownloadAsset = {
  title: string;
  format: 'Print-ready signs' | 'Stencil phrases' | 'Social graphics' | 'QR flyer';
  category: DownloadCategory;
  description: string;
};

export const downloadAssets: DownloadAsset[] = [
  {
    title: 'Mercy Over Fear Yard Sign',
    format: 'Print-ready signs',
    category: 'Mercy',
    description: '11x17 high-contrast poster with bold lettering for front windows or yards.'
  },
  {
    title: 'Freedom for Every Family',
    format: 'Print-ready signs',
    category: 'Freedom',
    description: 'Clean campaign sign layout with stencil-ready headline and QR placeholder.'
  },
  {
    title: 'Act Justly Stencil Set',
    format: 'Stencil phrases',
    category: 'Faith',
    description: 'Short spray-stencil-friendly phrase pack optimized for cardboard and foam board.'
  },
  {
    title: 'Fair Taxes, Strong Communities',
    format: 'Social graphics',
    category: 'Economy',
    description: 'Square social graphic concept with campaign colors and concise caption space.'
  },
  {
    title: 'Truth Matters Flyer',
    format: 'QR flyer',
    category: 'Democracy',
    description: 'Half-page handout placeholder with QR code area linking to issue resources.'
  }
];
