import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#101418',
        paper: '#f8f7f2',
        ember: '#d4471e',
        civic: '#0f2a43',
        gold: '#efb821',
        sage: '#2e6b5e'
      },
      boxShadow: {
        poster: '0 8px 0 0 #101418'
      }
    }
  },
  plugins: []
};

export default config;
