# The Happy Quail: Coming Soon Page

A fully responsive "Coming soon" landing page for **The Happy Quail**, a Bar and restaurant ran by Emma and Heber of Rodriguez Events. Opening 19th October for breakfast, lunch, hot & soft drinks. Opening for evenings & weekends with wine, cocktails & G&Ts from late November. Built with Next.js, Tailwind CSS, shadcn/ui and Motion.

## Features

- Two-panel card layout that stacks on mobile and splits into two columns on large screens
- Image gallery with previous/next arrows and clickable thumbnails
- Blurred brand panel background that follows the active gallery slide
- Staggered entrance animations and hover/tap micro-interactions
- Accessible controls (`aria-label`s, semantic markup)

## Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Motion](https://motion.dev/) (`motion/react`)
- [Lucide React](https://lucide.dev/) icons
- TypeScript

## Project Structure

```
thehappyquail/
├── app/
│   ├── layout.tsx          # Fonts and root layout
│   └── page.tsx            # Page shell with background blobs
├── components/
│   ├── coming-soon.tsx     # Card container, owns the gallery state
│   ├── brand-panel.tsx     # Left panel: blurred background, logo, socials
│   ├── gallery.tsx         # Right panel: slides, arrows, thumbnails
│   ├── logo.tsx            # Arc text, rooster and wordmark
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── slides.ts           # Shared gallery data
│   └── utils.ts
└── public/        
    └── assets/             # hero_1.jpg, hero_2.jpg, hero_3.jpg, logotype_white_v1.webp
```

## License

[MIT](LICENSE)