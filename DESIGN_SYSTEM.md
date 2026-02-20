# VK Automation - Professional Industrial Website

## Design System

### Color Palette
- **Primary**: Industrial Orange `#E67E22` - Used sparingly as accent color
- **Base**: White and off-white (`#FAFAF9`, `#F5F5F4`) for backgrounds
- **Industrial Grays**: 50-900 scale for text and borders
- **Dark**: Industrial 900 (`#1C1917`) for headings and footer

### Typography
- **Headings**: IBM Plex Sans (700 weight, -0.01em tracking)
- **Body**: Inter (400/500/600 weights)
- **Technical**: IBM Plex Mono (for specifications and technical data)
- **Labels**: Uppercase, 0.15em tracking, small size

### Layout Principles
- **No cards or boxes** - Editorial document flow
- **No rounded corners** - Disabled globally in Tailwind
- **No gradients** (except for subtle accent lines)
- **Orange accents** - Dividers, highlights, hover states only
- **Wide spacing** - Generous padding (py-20/32/40)
- **Circuit patterns** - Technical grid backgrounds

### Animation Philosophy
- **Minimal motion** - Opacity fades and 4-12px translations only
- **Scroll-triggered** - useInView from Framer Motion
- **Smooth scrolling** - Lenis with weighted easing
- **Hover transitions** - 200-300ms duration only

## Page Sections

### 1. Header
- Fixed position with backdrop blur on scroll
- Orange underline on hover for nav links
- Mobile-responsive hamburger menu
- Logo: VK|AUTO with orange divider

### 2. Hero
- Full viewport height
- Circuit pattern background
- Orange accent lines (horizontal gradients)
- Three technical metrics (uptime, response time, support)
- CTA button with orange border
- Animated scroll indicator

### 3. About
- Company narrative (3 paragraphs)
- Capabilities grid with checkmarks (6 items)
- Three-column focus areas:
  - Engineering Excellence
  - Technical Standards
  - Service Commitment
- Orange accent line at top

### 4. Products
- Tabbed interface with 4 products:
  - PLC-500 Series
  - HMI-Touch Pro
  - VFD-Ultra Series
  - Safety Controller SC-300
- Split layout: details left, specs right
- Technical specifications in bordered table format
- Applications list with orange bullets
- Request specs CTA

### 5. Industries
- Six automation capabilities:
  - Complete Automation Systems
  - PLC & Control Panels
  - Variable Frequency Drives
  - Motion Control Systems
  - Industrial Networking
  - System Retrofitting
- Grid layout (3 columns on desktop)
- Icons in bordered containers
- Applications for each industry
- Orange divider at bottom

### 6. Services
- Three main services:
  - System Design & Engineering
  - Installation & Commissioning
  - Technical Support & Maintenance
- Two-column layout (icon/title left, details right)
- Six detail points per service
- Orange bullets for lists

### 7. Clients
- Eight technology partners:
  - Siemens, Allen-Bradley, Schneider Electric, ABB
  - Mitsubishi, Omron, Phoenix Contact, Eaton
- Grid layout with hover effect (orange border)
- Partner category labels in mono font

### 8. Contact
- Split layout: form left, info right
- Four form fields (name, email, company, message)
- Orange focus states on inputs
- Three contact methods (email, phone, address)
- Business hours with 24/7 emergency highlight
- Orange accent line at top

### 9. Footer
- Dark industrial background (#1C1917)
- Four columns:
  - Company info
  - Quick links
  - Services
  - Contact
- Bottom bar with copyright and links
- Orange hover states on links

## Technical Stack
- **React 18.3.1** + TypeScript
- **Vite 5.4.2** - Build system
- **Tailwind CSS 3.4.1** - Styling
- **Framer Motion 12.25.0** - Animations
- **Lenis 1.1.10** - Smooth scrolling
- **Lucide React 0.344.0** - Icons

## Custom Utilities (index.css)
- `.section-padding` - Responsive vertical spacing
- `.container-wide` - Max-width container with padding
- `.mono-label` - Uppercase technical labels
- `.text-technical` - Mono font for specs
- `.orange-divider` - Gradient line
- `.orange-line` - Solid 2px line
- `.orange-dot::before` - Bullet point pseudo-element
- `.circuit-pattern` - Grid background
- `.grid-subtle` - Fine grid lines
- `.hover-orange` - Orange on hover

## File Structure
```
src/
├── App.tsx (main layout with Lenis)
├── index.css (global styles + utilities)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Products.tsx
│   ├── Industries.tsx
│   ├── Services.tsx
│   ├── Clients.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
```

## Key Features
✅ Light professional industrial theme
✅ Industrial orange (#E67E22) accent color
✅ IBM Plex Sans typography for headings
✅ Circuit patterns and technical graphics
✅ No cards, no rounded corners, editorial flow
✅ Minimal subtle animations
✅ Fully responsive mobile/tablet/desktop
✅ Accessible navigation and forms
✅ Fast performance with Vite
✅ Smooth scrolling with Lenis

## Build Commands
```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

**Status**: ✅ Complete and running at http://localhost:5173/
**Theme**: Light professional industrial with controlled orange accents
**Style**: Engineering-focused, not marketed
