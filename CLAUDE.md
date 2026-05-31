# Pearl River Design — Marketing Site

Lead generation site for a web design agency serving local businesses in Rockland County, NY.  
Goal: convert a local business owner who lands on the page into a form submission with their phone number.

## Status
**LIVE** — `https://pearlriverdesign.vercel.app` (custom domain `pearlriverdesign.dev` to connect)  
**GitHub** — `https://github.com/RestiveTuba/pearlriverdesign`  
All sections built, mobile-tested, Lighthouse 97/100/100/100, form end-to-end verified.

## Key references
- Full build spec: `/Users/paymore/Documents/Claude/Projects/Pearl River Digital/claude-code-prompt.md`
- Design plan: `/Users/paymore/Documents/Claude/Projects/Pearl River Digital/personal-website-plan.md`

## Brand
- Business name: **Pearl River Design** (never "Pearl River Digital")
- Domain: pearlriverdesign.dev
- Location: Pearl River, NY 10965
- Service area: Pearl River, Suffern, Nyack, Nanuet, Spring Valley, Rockland County

## Stack
Next.js 14 App Router (SSG + one serverless route), Tailwind CSS, Framer Motion, next/font (Google).  
No UI libraries. No component kits. Everything built from scratch.

## Design system
```
--navy:      #0D1F3C   hero bg, CTAs, logo mark, footer bg
--charcoal:  #1C1C1E   body text, headings on light
--warm-gray: #F4F3EF   alternating section backgrounds
--muted:     #6A6A66   secondary text, captions, labels
--border:    rgba(0,0,0,0.08)
```

- **Fonts**: Space Grotesk 700 (headings, `--font-space-grotesk`) · Inter 400/500 (body, `--font-inter`) · JetBrains Mono 400 (labels, `--font-jetbrains-mono`)
- **Border radius**: 2px everywhere — sharp edges, never pill shapes
- **Buttons**: solid navy fill, white text, 2px radius, no shadows
- **No gradients. No glassmorphism. No border glow effects.**
- **Section alternates**: white → warm-gray → white → navy → white
- **No em dashes anywhere** — use commas, colons, or periods instead

## Animations (Emil Kowalski philosophy)
- Spring physics: `type: "spring", stiffness: 300, damping: 30`
- Scroll reveals: `whileInView`, `once: true`, 20px Y + fade
- Hero text: words stagger at 0.06s intervals
- Cards: stagger 0.08s on scroll entry
- Hover: Y -2px on cards **or** scale 1.02 on buttons — never both
- Wrap all in `useReducedMotion()` check
- Visitors are 40-60 year old business owners — nothing playful

## Lead form
- Form POSTs to `/api/submit` (Next.js serverless route at `app/api/submit/route.ts`)
- That route forwards to Zapier server-side — avoids browser CORS restriction
- Zapier webhook URL stored as `ZAPIER_WEBHOOK_URL` (server-only, no NEXT_PUBLIC_ prefix)
- Fields: `name`, `business_name`, `business_type` (dropdown), `phone`, `email`
- Inline success state on submit — form replaced by confirmation message
- Fallback: `mailto:` link when JS disabled

## Pricing
- **Standard:** $1,000 one-time — custom site, hosting, SSL, live in 1-2 business days
- **Pro:** $1,000 upfront + $50/month — everything in Standard plus custom domain, video hero, monthly updates, ongoing SEO

## File structure
```
app/
  layout.tsx              — fonts, metadata, JSON-LD LocalBusiness schema
  page.tsx                — imports all section components
  globals.css             — design tokens + base styles
  api/submit/route.ts     — server-side Zapier proxy (POST)
components/
  Navbar.tsx
  Hero.tsx
  StatsBar.tsx
  HowItWorks.tsx
  Features.tsx
  Pricing.tsx
  ExampleSites.tsx
  LeadForm.tsx
  About.tsx
  Footer.tsx
  Logo.tsx
public/
  logo-primary.svg
  logo-inverse.svg
  examples/               — brooks-plumbing.png, chen-electrical.png, martinez-roofing.png
scripts/
  screenshot-examples.mjs — Puppeteer script to recapture example site screenshots
.env.local                — ZAPIER_WEBHOOK_URL (set in Vercel, not needed locally unless testing form)
.env.example              — template
```

## Vercel env vars
- `ZAPIER_WEBHOOK_URL` — server-only, set in Vercel production environment
- `NEXT_PUBLIC_ZAPIER_WEBHOOK_URL` — legacy, can be removed from Vercel dashboard
