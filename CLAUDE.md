# Pearl River Design — Marketing Site

Lead generation site for a web design agency serving local businesses in Rockland County, NY.  
Goal: convert a local business owner who lands on the page into a form submission with their phone number.

## Key references
- Full build spec: `/Users/paymore/Documents/Claude/Projects/Pearl River Digital/claude-code-prompt.md`
- Design plan: `/Users/paymore/Documents/Claude/Projects/Pearl River Digital/personal-website-plan.md`

## Brand
- Business name: **Pearl River Design** (never "Pearl River Digital")
- Domain: pearlriverdesign.dev
- Location: Pearl River, NY 10965
- Service area: Pearl River, Suffern, Nyack, Nanuet, Spring Valley, Rockland County

## Stack
Next.js 14 App Router (SSG), Tailwind CSS, Framer Motion, next/font (Google).  
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

## Animations (Emil Kowalski philosophy)
- Spring physics: `type: "spring", stiffness: 300, damping: 30`
- Scroll reveals: `whileInView`, `once: true`, 20px Y + fade
- Hero text: words stagger at 0.06s intervals
- Cards: stagger 0.08s on scroll entry
- Hover: Y -2px on cards **or** scale 1.02 on buttons — never both
- Wrap all in `useReducedMotion()` check
- Visitors are 40–60 year old business owners — nothing playful

## Lead form
- POST JSON to `process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL`
- Fields: `name`, `business_name`, `business_type` (dropdown), `phone`, `email`
- Inline success message on submit — no redirect, form stays visible but disabled
- Fallback: `mailto:` href on submit button when JS disabled

## Build order (one section per review)
1. ✅ Scaffold + design tokens + globals.css
2. ✅ layout.tsx (Space Grotesk + Inter + JetBrains Mono, metadata, JSON-LD)
3. Navbar
4. Hero
5. SocialProof
6. HowItWorks
7. Features
8. Pricing
9. ExampleSites
10. LeadForm
11. About + Footer
12. Mobile pass (375px)
13. Lighthouse audit (target: 95+ mobile)
14. Deploy to Vercel + connect domain

## File structure
```
app/
  layout.tsx     — fonts, metadata, JSON-LD
  page.tsx       — imports all section components
  globals.css    — design tokens + base styles
components/
  Navbar.tsx
  Hero.tsx
  SocialProof.tsx
  HowItWorks.tsx
  Features.tsx
  Pricing.tsx
  ExampleSites.tsx
  LeadForm.tsx
  About.tsx
  Footer.tsx
public/
  logo-primary.svg
  logo-inverse.svg
  favicon.ico
.env.local       — NEXT_PUBLIC_ZAPIER_WEBHOOK_URL (fill before launch)
.env.example     — template
```
