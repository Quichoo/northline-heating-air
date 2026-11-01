# Northline Heating & Air Website — Implementation Specification

## Problem Statement

Northline Heating & Air is a fictional family-owned HVAC company in Burnsville, MN that needs a professional, trustworthy one-page website. The current project is a bare Vite + React template with placeholder content. The site must communicate reliability, urgency (24/7 emergency, same-day guarantee), and local family-owned warmth—while driving phone calls as the primary conversion.

## Solution

Build a complete, polished single-page React website with the following sections: Header, Hero, Services, Why Choose Northline, Special Offer, Emergency Service, Contact, Footer. Use the provided brand identity (colors, typography, copy) exactly. Implement with React components, Sass styling, Motion for subtle animations, Lucide React for icons. Ensure responsive design, accessibility, and performance best practices.

## User Stories

1. As a homeowner with a broken furnace in January, I want to immediately see a phone number and "24/7 Emergency" so I can call without searching.
2. As a homeowner whose AC failed in July, I want to see "Same-Day Service or Diagnostic Fee Free" so I trust they'll come today.
3. As a prospective customer comparing HVAC companies, I want to quickly scan services (AC Repair, Heating Repair, Installation, Maintenance) to confirm they handle my need.
4. As a skeptical customer, I want to see "Family-Owned," "Honest & Reliable," "Friendly Support," "24/7 Emergency" so I feel this is a trustworthy local business, not a corporate call center.
5. As a mobile user, I want the navigation to work smoothly on my phone and the Call Now button to be thumb-reachable.
6. As a keyboard user, I want to tab through all interactive elements with visible focus states.
7. As a user with reduced motion preference, I want animations to be disabled or minimal.

## Implementation Decisions

### Architecture
- **Component structure**: Each section = one React component (Header, Hero, Services, WhyChoose, SpecialOffer, Emergency, Contact, Footer) + shared UI components (Button, Logo, NavLink, IconWrapper, Section, Container)
- **Styling**: Sass modules per component + global tokens (_tokens.scss, _reset.scss, _typography.scss, _buttons.scss, _layout.scss)
- **State**: Minimal—only mobile nav toggle (useState), scroll-spy for active nav highlight (useEffect + IntersectionObserver)
- **Animations**: Motion (Framer Motion) for entrance reveals (fade-up, stagger), hover/tap feedback on buttons, respect prefers-reduced-motion

### Visual System (from PRODUCT.md)
- **Colors**: Deep Navy (#20364B) primary dark, Cooling Blue (#397EAD) cool accent, Heating Red (#D65345) warm accent/CTA, Warm Cream (#F7F3EA) light background, White (#FFFFFF)
- **Typography**: Montserrat ExtraBold/Bold for headings, Inter Regular for body, Montserrat SemiBold for buttons
- **Spacing scale**: 4px base unit, consistent rhythm (more space above headings than below)
- **Border radius**: 8px buttons, 12px cards, 16px large containers
- **Shadows**: Layered, soft (elevation system: level 1–3)
- **Icons**: Lucide React, 24px default, consistent stroke width (2px)

### Sections & Content (verbatim from brief)

**Header**
- Logo: Text-only "NORTHLINE / HEATING & AIR" (reusable Logo component)
- Nav links: Services, Why Choose Us, Special Offer, Emergency, Contact
- CTA: "Call Now" button (tel:+15550100199)
- Mobile: Hamburger menu, slide-down drawer

**Hero**
- Headline: "YOUR COMFORT. OUR PRIORITY."
- Sub-headline: "Reliable Heating & Cooling Services for Your Home."
- Description: "From unexpected HVAC problems to routine maintenance, Northline Heating & Air is here to help keep your family comfortable."
- Offer badge: "SAME-DAY SERVICE OR YOUR DIAGNOSTIC FEE IS FREE!"
- Primary CTA: "Call Now" (tel:+15550100199)
- Secondary CTA: "Explore Our Services" (scroll to #services)
- Emergency indicator: "24/7 Emergency Service" with icon
- Image placeholder: 16:9 aspect, labeled "Hero image: Family comfort / technician at work"

**Services** (#services)
- Four cards, each: Lucide icon, service name, 1-sentence description
  1. AC Repair (Snowflake icon) — "Fast, reliable air conditioning repair to restore your cool."
  2. Heating & Furnace Repair (Flame icon) — "Expert heating system and furnace repair when you need warmth most."
  3. Installation (Home icon) — "Professional HVAC system installation for new construction and replacements."
  4. HVAC Maintenance (Wrench icon) — "Seasonal tune-ups that prevent breakdowns and extend system life."

**Why Choose Northline** (#why-choose)
- Four value props, icon + headline + short description:
  1. Family-Owned Business (Users icon) — "Locally owned and operated. We treat your home like our own."
  2. Honest and Reliable Service (ShieldCheck icon) — "Transparent pricing. No upsells. No surprises."
  3. Friendly Customer Support (MessageCircle icon) — "Real people answer the phone. Friendly voices, clear answers."
  4. 24/7 Emergency HVAC Service (Clock icon) — "Day or night, weekend or holiday—we're here when it matters."

**Special Offer** (#special-offer)
- Headline: "SAME-DAY SERVICE OR YOUR DIAGNOSTIC FEE IS FREE!"
- Description: "When your HVAC system fails, you can't wait days for a repair. We guarantee same-day service or your diagnostic fee is on us."
- CTA: "Call Now" (tel:+15550100199)
- Visual treatment: High-contrast band (Deep Navy background, Heating Red accent)

**Emergency Service** (#emergency)
- Headline: "HVAC TROUBLE DOESN'T WAIT. NEITHER DO WE."
- Description: "Middle of the night? Holiday weekend? Hottest day of summer? Northline provides 24/7 emergency HVAC service across Burnsville. One call gets a real technician dispatched—no answering service, no callbacks."
- CTA: "Call Now" (tel:+15550100199)
- Visual: Heating Red accent, urgent but not alarmist

**Contact** (#contact)
- Phone prominent: "(555) 010-0199"
- CTA: "Call Now" button (tel:+15550100199)
- No form, no email, no address invented

**Footer**
- Logo (text-only)
- Description: "Northline Heating & Air — Reliable heating and cooling for Burnsville, MN families."
- Nav links (repeat header)
- Phone: (555) 010-0199
- Brand promise: "Your family's comfort comes first."

### Technical Requirements
- **Responsive breakpoints**: Mobile ≤640px, Tablet 641–1024px, Desktop ≥1025px
- **Smooth scroll**: CSS scroll-behavior + JS fallback for nav links
- **Active nav highlight**: IntersectionObserver on section IDs
- **Accessibility**: Semantic HTML5 (header, nav, main, section, footer), heading hierarchy (h1 → h2 → h3), alt text on all images, ARIA labels on icon-only buttons, focus-visible outlines, color contrast ≥4.5:1
- **Performance**: Code-split non-critical sections (lazy load below fold), preload hero image placeholder, minimize bundle (direct imports, no barrel files)
- **SEO**: Page title "Northline Heating & Air | Burnsville HVAC Repair & Installation", meta description from hero description, Open Graph tags
- **Reduced motion**: @media (prefers-reduced-motion: reduce) disables Motion animations

### File Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.jsx
│   │   ├── Button.module.scss
│   │   ├── Logo.jsx
│   │   ├── Logo.module.scss
│   │   ├── NavLink.jsx
│   │   ├── IconWrapper.jsx
│   │   ├── Container.jsx
│   │   ├── Section.jsx
│   │   └── index.js
│   ├── Header/
│   │   ├── Header.jsx
│   │   ├── Header.module.scss
│   │   ├── MobileNav.jsx
│   │   └── index.js
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── Hero.module.scss
│   │   ├── HeroImagePlaceholder.jsx
│   │   └── index.js
│   ├── Services/
│   │   ├── Services.jsx
│   │   ├── Services.module.scss
│   │   ├── ServiceCard.jsx
│   │   └── index.js
│   ├── WhyChoose/
│   │   ├── WhyChoose.jsx
│   │   ├── WhyChoose.module.scss
│   │   ├── ValueCard.jsx
│   │   └── index.js
│   ├── SpecialOffer/
│   │   ├── SpecialOffer.jsx
│   │   ├── SpecialOffer.module.scss
│   │   └── index.js
│   ├── Emergency/
│   │   ├── Emergency.jsx
│   │   ├── Emergency.module.scss
│   │   └── index.js
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   ├── Contact.module.scss
│   │   └── index.js
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   ├── Footer.module.scss
│   │   └── index.js
├── styles/
│   ├── _tokens.scss
│   ├── _reset.scss
│   ├── _typography.scss
│   ├── _buttons.scss
│   ├── _layout.scss
│   ├── globals.scss
├── hooks/
│   ├── useScrollSpy.js
│   ├── useReducedMotion.js
├── App.jsx
├── main.jsx
```

## Testing Decisions
- **Lint**: ESLint (existing config) — must pass
- **Build**: `npm run build` — must succeed, no warnings
- **Manual verification**: 
  - All nav links scroll to correct section
  - All phone CTAs use tel:+15550100199
  - Mobile nav opens/closes, links work
  - No horizontal overflow at 320px, 768px, 1440px
  - Keyboard navigation works (Tab, Enter, Escape)
  - Focus states visible
  - Reduced motion respected
  - Color contrast verified (DevTools)
  - Heading hierarchy correct (h1 once, then h2, h3)

## Out of Scope
- Contact form, email, physical address
- Online booking, chat, scheduling
- Customer testimonials, reviews, ratings
- Employee bios, certifications, awards
- Financing, free estimates, additional guarantees
- Service area beyond Burnsville, MN
- Blog, resources, FAQ pages
- Multi-page site
- Backend, CMS, analytics

## Further Notes
- Image placeholders must be visually intentional (not gray boxes)—use brand colors, labeled with intended content, easy to swap via single prop
- Logo component isolated for later replacement
- All copy used verbatim from brief—no additions, no modifications
- Motion animations: entrance fade-up (staggered), button hover/tap scale, card hover lift—single authored moment per section type, not scattered
- Build must pass `npm run lint` and `npm run build` with zero errors