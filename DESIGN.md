---
name: Clinical Capital Architecture
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#58413c'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8c716b'
  outline-variant: '#e0bfb8'
  surface-tint: '#ab351a'
  primary: '#ab351a'
  on-primary: '#ffffff'
  primary-container: '#f56a4a'
  on-primary-container: '#5e0f00'
  inverse-primary: '#ffb4a3'
  secondary: '#526069'
  on-secondary: '#ffffff'
  secondary-container: '#d3e2ed'
  on-secondary-container: '#56656e'
  tertiary: '#5d5e63'
  on-tertiary: '#ffffff'
  tertiary-container: '#94959a'
  on-tertiary-container: '#2c2e32'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0600'
  on-primary-fixed-variant: '#891d03'
  secondary-fixed: '#d6e5ef'
  secondary-fixed-dim: '#bac9d3'
  on-secondary-fixed: '#0f1d25'
  on-secondary-fixed-variant: '#3b4951'
  tertiary-fixed: '#e2e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1c1f'
  on-tertiary-fixed-variant: '#45474b'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  surface-muted: '#F8F9FA'
  surface-glass: rgba(255, 255, 255, 0.8)
  border-subtle: '#E9ECEF'
  stat-increase: '#2ECC71'
  stat-caution: '#F1C40F'
typography:
  headline-display:
    fontFamily: Outfit
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Outfit
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-bold:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 80px
  section-gap: 120px
  container-max: 1280px
---

## Brand & Style

This design system is engineered for a premium B2B Revenue Cycle Management (RCM) platform where financial precision meets healthcare empathy. The brand personality is authoritative, sophisticated, and technologically advanced, aimed at hospital administrators and private practice owners who value efficiency and transparency.

The visual style follows a **Corporate / Modern** aesthetic with a **Minimalist** foundation. It prioritizes clarity through generous whitespace and a "Financial-Services-Meets-Healthcare" feel—moving away from generic medical tropes toward a high-end, data-driven interface. The design evokes trust through structured layouts, intentional color pops, and a rhythmic use of scale that highlights critical financial performance metrics.

## Colors

The palette is anchored by a high-energy Coral (#F56A4A), used strategically for calls to action and critical success metrics. This warm tone differentiates the product from the cold blues typical of the industry while maintaining professionalism.

- **Primary:** Reserved for the most important interactions and data points.
- **Secondary:** A soft healthcare blue used for background washes, decorative icons, and non-critical accents.
- **Neutrals:** Deep Charcoal (#1A1A1A) provides high-contrast legibility for typography, while Pure White (#FFFFFF) serves as the primary canvas to ensure a clean, clinical feel.
- **Named Colors:** "Surface-muted" is used for alternating sections to provide visual breaks without disrupting the minimalist flow.

## Typography

The typography strategy pairs **Outfit** for headlines—offering a geometric, modern, and slightly high-end feel—with **Inter** for body copy to ensure maximum readability in data-heavy contexts.

- **Display & Large Headlines:** Use tight letter-spacing and bold weights to command attention in hero sections and major financial summaries.
- **Body Copy:** Set with a generous 1.6 line-height to reduce cognitive load when reading complex medical billing information.
- **Labels:** Utilize uppercase styling with slight tracking for category tags and secondary metadata to create a clear information hierarchy.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to maintain a premium, editorial feel, while transitioning to a fluid 1-column layout for mobile. 

- **Grid:** A 12-column grid with 24px gutters is the standard.
- **Rhythm:** Spacing follows an 8px linear scale. Section headers should maintain a "Section-Gap" (120px) to allow the design to breathe.
- **Asymmetry:** For service highlights, use an asymmetric layout (e.g., a 7-column image paired with a 5-column text block) to break the monotony of standard B2B grids.
- **Mobile:** Margins shrink to 20px, and large display type scales down to "headline-lg-mobile" to ensure touch targets remain accessible and text remains legible without excessive scrolling.

## Elevation & Depth

Hierarchy is established using **Tonal Layers** and **Ambient Shadows** to create a sense of physical importance.

- **Soft Elevation:** Primary cards use a subtle shadow (`0 4px 20px rgba(0,0,0,0.05)`) combined with a `1px` border in `#E9ECEF`. This "float" effect suggests interactivity without being distracting.
- **Surface Tiering:** Use the secondary blue (#E3F2FD) or light gray (#F8F9FA) as background containers to group related content, creating "islands" of information.
- **Interactions:** On hover, cards should lift slightly (shadow deepens to `0 8px 30px rgba(0,0,0,0.08)`) and borders may transition to the primary Coral to indicate focus.

## Shapes

The shape language is consistently **Rounded**, striking a balance between the precision of financial software and the approachability of healthcare services.

- **Components:** Standard buttons, input fields, and small cards use a `0.5rem` (8px) radius.
- **Large Containers:** Hero image containers and major section cards use a `1rem` (16px) radius to soften the overall interface.
- **Icons:** Enclose line icons in circular or soft-rounded squares with a background of the secondary blue to create "focal points."

## Components

### Buttons
- **Primary:** Solid #F56A4A with white text. High-contrast, 8px corner radius.
- **Secondary:** Outlined with a 1.5px border of the primary color or a solid wash of the secondary blue for a softer appearance.

### Cards
- **Floating Stats:** Minimal padding (24px), large headline-sm for the metric, and a label-sm for the description. Use a primary color vertical accent bar on the left edge.
- **Service Cards:** Use asymmetric layouts—varying the height of cards in a grid to create a sophisticated, modern rhythm.

### Form Inputs
- **Style:** 1px border (#E9ECEF), 8px radius, with 16px horizontal padding. On focus, the border transitions to Primary Coral with a subtle glow.

### Lists & Accordions
- **FAQs:** Use clean, border-only accordions with minimalist "+" and "-" line icons. Maintain generous vertical padding (20px+) between items.

### Specialty Grids
- Use "Structured Specialty Grids" where each cell has a subtle icon, a bold headline-sm, and body-md text. This reinforces the "Architecture" aspect of the brand.