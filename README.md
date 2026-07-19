# Himanshu Ranjan — Portfolio

A premium, minimal portfolio built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. Features glassmorphism UI, dark/light mode, an animated aurora gradient background, and scroll-triggered motion via Framer Motion.

## Design

- **Type:** Space Grotesk (display) + Inter (body)
- **Palette:** deep ink dark mode / soft paper light mode, with an indigo → violet → cyan aurora gradient as the accent
- **Signature element:** the animated aurora mesh background behind a floating glass navbar
- **Radius:** 24px rounded cards (`rounded-4xl`)
- **Accessibility:** visible focus rings, semantic landmarks, reduced-motion support, skip-to-content link

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form (EmailJS)

1. Create a free account at https://www.emailjs.com
2. Create an email service and a template with `from_name`, `from_email`, `message` variables
3. Copy `.env.local.example` to `.env.local` and fill in your service ID, template ID, and public key

```bash
cp .env.local.example .env.local
```

## Editing content

- **Projects:** `data/projects.ts`
- **Skills:** `components/skills.tsx`
- **Hero copy / role:** `components/hero.tsx`
- **Colors / fonts:** `tailwind.config.ts`
- **Resume:** drop your PDF at `public/resume.pdf` (the hero's "Resume" button links there)

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com) — it detects Next.js automatically. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in the Vercel project settings before deploying.

## 3D hero

The hero now includes a Three.js scene (`@react-three/fiber` + `@react-three/drei`): a distorted, glowing icosahedron with a slow-drifting particle field, colored to match the aurora palette and gently parallaxing toward the cursor. It's:

- **Lazy-loaded** via `next/dynamic` (`ssr: false`) so it never blocks the initial page load or adds to the main bundle
- **Skipped automatically** if the visitor has `prefers-reduced-motion` enabled, or if the browser has no WebGL support — the CSS aurora background still shows either way
- Editable in `components/three/scene.tsx` (colors, distort amount, particle count) and `components/three-hero.tsx` (enable/disable logic)


