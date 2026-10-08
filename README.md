# Htet Naing Aung — Portfolio

Personal portfolio of a full stack developer (Java, Kotlin, Angular, AI), live at **https://htetnaing-hub.github.io/Portfolio/**.

[![Deploy to GitHub Pages](https://github.com/htetnaing-hub/Portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/htetnaing-hub/Portfolio/actions/workflows/deploy.yml)

## Tech stack

- **React 19** + **TypeScript** (strict) on **Vite**
- **Tailwind CSS v4** with light/dark themes
- **Motion** for scroll-reveal animations (respects reduced-motion settings)
- **Lucide** and **React Icons** for icons, **Inter** and **JetBrains Mono** fonts
- **GitHub Actions** lints, builds and deploys to GitHub Pages on every push to `main`

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/Portfolio/
npm run build      # type-check and build to dist/
npm run lint
```

## Updating content

All text, links, experience, projects, skills and certifications live in
[`src/data/profile.ts`](src/data/profile.ts). Images go in `public/images/`, PDFs in `public/files/`.
Edit, push to `main`, and the site redeploys automatically.
