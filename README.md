# Mahin Ibn Mahmud — Portfolio

A clean, modern portfolio website for a Public Health Professional, built with Next.js 14 + TypeScript + Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
```

The static output goes to the `out/` directory.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles sections)
│   └── globals.css         # Global styles + Tailwind directives
├── components/
│   ├── hero/               # Hero section (photo, bio, contacts)
│   ├── skills/             # Skills carousel + category summary
│   ├── education/          # Alternating timeline
│   ├── experience/         # Accordion work experience cards
│   ├── research/           # Side-by-side research project cards
│   ├── achievements/       # Award cards + volunteer rows
│   ├── footer/             # Footer
│   └── ui/                 # Shared: Navbar, SectionHeader
├── lib/
│   └── data.ts             # All portfolio content (edit here)
└── types/
    └── portfolio.ts        # TypeScript interfaces
```

## Customisation

All content lives in `src/lib/data.ts`. Update that file to change:
- Name, bio, contact details, quote
- Skills list
- Education milestones
- Work experience entries
- Research project titles
- Achievements and volunteering entries

### Profile photo

Place a photo named `photo.jpg` in the `public/` directory. If no photo is found, a styled monogram placeholder renders automatically.

## Deployment

The site exports as fully static HTML (`output: "export"` in `next.config.ts`). Drop the `out/` folder on any static host — Vercel, Netlify, GitHub Pages.
