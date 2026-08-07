# Nebil Keno — Portfolio

Network & cloud engineering portfolio, fully static — no backend.

## Stack

- **React 19** — UI
- **Vite 5** — dev server & build
- **Tailwind CSS 3** — styling
- **Framer Motion** — animation (typewriter, reveals, tilt/magnetic effects)
- **Tabler Icons** — icon set
- **ESLint 9** — linting

Live data (GitHub stats, top languages, contribution graph) is fetched client-side from GitHub's public REST API and `github-contributions-api.jogruber.de` — no keys, no server.

## Development

```bash
npm install
npm run dev
```

## Deploy

Pushes to `main` deploy to GitHub Pages via GitHub Actions.
