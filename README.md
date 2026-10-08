# Bento Platform - GitHub Pages Site

This repository hosts the [Bento Platform](https://bento-platform.github.io) website: a statically-generated, bilingual (English/French) [Next.js](https://nextjs.org/) site, deployed to GitHub Pages.

## Repository structure

```
bento-platform.github.io/
├── app/
│   ├── page.tsx              # root redirect stub -> /en/
│   ├── sitemap.ts, robots.ts
│   └── [locale]/             # locale-prefixed routes: /en/..., /fr/...
│       ├── layout.tsx        # header/footer chrome, i18n provider
│       ├── page.tsx          # Home
│       ├── goals/page.tsx
│       ├── features/page.tsx
│       └── releases/page.tsx
├── components/                # shared UI (Header, Footer, cards, timelines, ...)
├── content/
│   ├── types.ts               # shared content shapes
│   ├── en/{goals,features,releases}.ts
│   └── fr/{goals,features,releases}.ts
├── messages/{en,fr}.json      # UI chrome strings (nav, buttons, labels) for next-intl
├── i18n/                      # next-intl routing/config
├── lib/                       # site config + SEO metadata helpers
├── public/images/             # screenshots, logo, OG image
└── .github/workflows/deploy.yml
```

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000/en/` (or `/fr/`).

## Building

```bash
npm run build
```

This produces a fully static export in `out/` (`next.config.ts` sets `output: "export"`), which is what gets deployed to GitHub Pages — no Node server runs in production.

## Updating content

### Adding a new release

Edit `content/en/releases.ts` **and** `content/fr/releases.ts`:

- Add the new version at the top of the array with `status: "current"`, and change the previous "current" entry to `status: "released"`.
- Fill in `majorMilestones` / `otherFeatures`.

### Goals / Features

Edit `content/en/goals.ts` / `content/fr/goals.ts` or `content/en/features.ts` / `content/fr/features.ts`. Body/bullet text may contain `[label](url)` markdown-style links, which render as real links via the `InlineText` component.

### Screenshots

Add image files to `public/images/`, reference them as `/images/filename.png` from `content/*/features.ts`, and add their pixel dimensions to `IMAGE_DIMENSIONS` in `components/FeatureShowcase.tsx` (required by `next/image`).

### UI text / adding a language

Chrome strings (nav, buttons, footer, etc.) live in `messages/en.json` / `messages/fr.json`. To add a new language: add the locale to `i18n/routing.ts`, add `messages/<locale>.json`, and add a `content/<locale>/` folder mirroring `content/en/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the static export and deploys it via GitHub Actions to GitHub Pages. In the repo's **Settings → Pages**, the source must be set to **GitHub Actions** (not "Deploy from a branch").

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

For content updates, please ensure:
- Both English and French content are updated together
- Screenshots are clear and up-to-date
- Canadian English spelling is used consistently (e.g., "organize", "standardize")

## Links

- **Main GitHub Organization:** [https://github.com/bento-platform](https://github.com/bento-platform)
- **Documentation:** See individual service repositories for detailed documentation

## License

This website is licensed under the [GNU Lesser General Public License v3.0 (LGPL-3.0)](LICENSE). The Bento Platform software components each have their own licenses - see individual repositories for details.

## Contact

For questions or support regarding Bento Platform, please visit the [GitHub organization](https://github.com/bento-platform) or open an issue in the relevant service repository.
