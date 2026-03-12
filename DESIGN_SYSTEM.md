# VK Automation Design System

## Visual Direction
- Tone: premium industrial, technical, and trustworthy
- Style: high-contrast editorial layouts with controlled orange accents
- UI density: content-forward sections with strong hierarchy and reduced dead space

## Typography
- Display: `Sora` for headings and hero statements
- Body: `Manrope` for long-form readability
- Technical labels: `IBM Plex Mono` for metadata, kickers, and micro-labels

## Color System
- Primary accent: `#E67E22` (`brand-orange`)
- Base text: industrial charcoal spectrum (`industrial-700` to `industrial-900`)
- Surfaces: warm off-white and translucent glass panels (`surface-panel`)
- Dark surfaces: gradient dark panels for high-emphasis zones (`dark-panel`)

## Layout Rules
- Main containers:
  - `container-wide` for full section layouts
  - `container-editorial` for tighter reading sections
- Vertical rhythm:
  - `section-padding` for primary sections
  - `section-padding-sm` for support sections
- Use split-column layouts to avoid empty zones on desktop

## Reusable UI Primitives
- `section-kicker`: uppercase mono metadata strip
- `surface-panel`: soft glass card for foreground forms and content blocks
- `dark-panel`: high-contrast CTA/summary blocks
- `subtle-grid` and `mesh-glow`: texture layers for depth without visual clutter

## Motion Principles
- Framer Motion only for purposeful reveals and hierarchy cues
- Keep transitions short and smooth (0.45s to 0.9s)
- Avoid decorative continuous motion unless it communicates context

## SEO and Content Architecture
- Centralized SEO component: `src/components/Seo.tsx`
- Per-page metadata includes:
  - title
  - description
  - canonical URL
  - Open Graph / Twitter tags
  - structured data (LocalBusiness default)
- Site-level metadata and contacts are centralized in `src/lib/siteConfig.ts`

## Page Composition
- Route shell: `Header` + page content + `Footer`
- Inner pages start with `PageHero` for consistent hierarchy
- Home page sequence:
  - Hero
  - About
  - Industries
  - Services
  - Clients
  - Contact

## Form and Contact Pattern
- Contact form posts to Supabase edge function endpoint:
  - `/functions/v1/send-contact-email`
- UX states included:
  - submitting
  - success
  - error
- Fallback messaging appears if env configuration is missing

## Build and Validation
- Build command: `npm run build`
- Validate no TypeScript / lint diagnostics before release
- Keep content and partner metadata in shared config where possible
