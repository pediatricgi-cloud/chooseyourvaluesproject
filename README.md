# Choose Your Values (Version 1)

A production-ready Next.js + TypeScript + Tailwind starter site for the **Choose Your Values** campaign.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## Edit campaign content quickly

Most content is in the `data/` folder so you can update messaging without touching page layouts:

- `data/site.ts` → tagline, values pillars, homepage slogans, scripture list, faith sign ideas
- `data/issues.ts` → all issue sections, framing text, and slogans
- `data/downloads.ts` → downloadable asset placeholders and categories

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New Project** and import the repo.
3. Keep default build settings (Next.js auto-detected).
4. Deploy.

## Notes

- Join form is frontend-only (mock submit) for V1.
- Download buttons are placeholders you can connect to real files later.
- Update `public/og-image.jpg` and `public/icon.svg` with final assets.
