---
name: Nusantara Commerce
colors:
  surface: '#fbf9f8'
  surface-dim: '#dbd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3f3'
  surface-container: '#efeded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e2'
  on-surface: '#1b1c1c'
  on-surface-variant: '#404944'
  inverse-surface: '#303030'
  inverse-on-surface: '#f2f0f0'
  outline: '#707974'
  outline-variant: '#bfc9c3'
  surface-tint: '#306855'
  primary: '#003426'
  on-primary: '#ffffff'
  primary-container: '#0f4c3a'
  on-primary-container: '#82bba4'
  inverse-primary: '#99d3ba'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#ffa454'
  on-secondary-container: '#713b00'
  tertiary: '#003049'
  on-tertiary: '#ffffff'
  tertiary-container: '#004769'
  on-tertiary-container: '#54b8f9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b4efd6'
  primary-fixed-dim: '#99d3ba'
  on-primary-fixed: '#002117'
  on-primary-fixed-variant: '#15503e'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#cae6ff'
  tertiary-fixed-dim: '#8ccdff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004b6f'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e2'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.5'
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: '1.2'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The brand personality is **Professional, Stable, and Inclusive**. It aims to bridge the gap between high-end international retail standards and the vibrant, diverse marketplace of Indonesian MSMEs. The visual language evokes a sense of "Modern Trust"—a digital-first approach that feels secure enough for high-value transactions yet accessible enough for daily local commerce.

The design style is **Corporate Modern with Tactile Nuance**. It leans into a systematic, grid-based layout inspired by modern SaaS and high-end Fintech, utilizing generous white space and a "safe" color palette. To prevent the interface from feeling sterile, we introduce warmth through subtle micro-interactions, soft shadows, and human-centric accent colors that highlight action and progress.

## Colors

The palette is anchored by **Emerald Green** (#0F4C3A), a color associated with growth, stability, and professional prestige in the Southeast Asian market. This serves as the primary brand touchpoint for navigation and headers.

To drive conversions, a **Warm Ochre** (#F2994A) is used as the secondary accent color for Call-to-Actions (CTAs). This creates a high-contrast relationship with the primary green, ensuring buttons are discoverable without appearing aggressive. 

The neutral palette uses cool greys to maintain a clean, "uncluttered" feel. Backgrounds are slightly off-white to reduce eye strain during long browsing sessions, while surfaces like cards and modals remain pure white to stand out.

## Typography

This design system utilizes **Inter** for its exceptional legibility and systematic weight distribution. The typography follows a clear hierarchy to handle high information density, especially within the admin dashboard and complex product descriptions.

- **Headlines:** Use Semi-Bold weights with tighter letter spacing to feel modern and authoritative.
- **Body Text:** Uses a 1.6x line height for maximum readability on both mobile and desktop.
- **Labels:** Small caps or medium weights are used for status badges and metadata to differentiate from standard body content.
- **Responsive Scaling:** On mobile, large display fonts scale down to prevent excessive word-breaking, maintaining a compact but readable header structure.

## Layout & Spacing

The design system employs a **12-column fixed-width grid** for desktop, centering content to maintain focus and premium feel. On mobile, the system transitions to a fluid single-column layout with 16px side margins.

Spacing follows a strict **4px baseline grid**. Components should use `16px` (md) as the default internal padding, while layout sections should use `48px` (2xl) or `64px` (3xl) to create a sense of breathability and high-end positioning. Gutters are fixed at 24px to ensure product cards remain distinct from one another.

## Elevation & Depth

To convey trust and structure, depth is represented through **Tonal Layers** and **Soft Ambient Shadows**. 

1.  **Level 0 (Floor):** Main background, used for the layout wrapper.
2.  **Level 1 (Card):** White surfaces with a very soft, 4% opacity shadow (Y: 2px, Blur: 4px). This is the standard for product cards and feed items.
3.  **Level 2 (Navigation):** Top bars and sticky elements use a slightly more pronounced shadow (Y: 4px, Blur: 8px) with a semi-transparent backdrop blur (12px) to signify they float above content.
4.  **Level 3 (Overlay):** Modals and dropdowns use high-diffusion shadows (Y: 10px, Blur: 20px) to pull the user's attention away from the background.

Data visualizations in the dashboard use flat, low-contrast outlines rather than shadows to ensure precision and "clean" data presentation.

## Shapes

The design uses a **Rounded** (0.5rem) shape language. This strikes a balance between the precision of a professional platform and the approachability of a consumer-facing app. 

- **Standard Elements (Buttons, Inputs):** 8px corner radius.
- **Large Elements (Cards, Containers):** 16px corner radius (`rounded-lg`).
- **Badges/Chips:** Use 100px (Pill-shaped) to distinguish them from interactive input elements.

## Components

### Buttons & Interaction
- **Primary:** Emerald Green with white text. High-contrast, 8px radius.
- **CTA:** Warm Ochre for "Add to Cart" or "Buy Now" to drive urgency and heat.
- **Ghost:** Primary green outline for secondary actions like "View Shop" or "Apply Filter."

### Product Cards
Cards feature a Level 1 elevation. Images are top-aligned with no internal padding, while text and pricing are contained within a 16px padded area. A subtle 1px border (#E0E0E0) is applied to keep cards distinct on mobile.

### Search Bar
Located prominently in the header. Uses a "Light Grey" fill and a magnifying glass icon. On mobile, this expands to a full-screen overlay for easier typing.

### Status Badges
Used for order tracking (e.g., "Selesai," "Dikirim").
- **Success:** Soft green background with dark green text.
- **Pending:** Soft yellow background with dark brown text.
- **Cancelled:** Soft red background with dark red text.

### Data Visualizations (Admin Dashboard)
Charts use the primary Emerald Green as the main data line, with secondary Blues and Purples for multi-set data. Grid lines in charts are kept at 0.5px thickness and 10% opacity to ensure the data remains the focal point.

### Input Fields
Inputs use a white background with a 1px grey border. Upon focus, the border transitions to Primary Emerald with a soft 2px outer glow.