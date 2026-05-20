# DESIGN.md

## Meta
- Last updated: 2026-05-20
- Owner: Avangard Jiu-Jitsu Academy / Nazar Dobrodij
- Status: approved-for-planning

## 1. Design Direction
The Avangard Jiu-Jitsu Academy website should keep the existing Linear-inspired design system from the original repository, but adapt it for a premium modern martial arts academy.

The site should feel:
- premium,
- sporty,
- minimal,
- modern,
- disciplined,
- professional,
- clean and easy to navigate.

The goal is not to create an aggressive MMA-style website. The visual identity should be closer to a premium sports brand: strong, focused, dark, elegant, and structured.

## 2. Reference Direction
- Primary visual system: existing Linear-inspired `DESIGN.md` direction.
- Structural inspiration: Charlotte BJJ website, especially the clean presentation, instructor page structure, strong photo usage, premium spacing, and simple navigation.
- Important rule: Use references only for inspiration. Do not copy text, branding, images, or exact layouts.

## 3. Brand Assets
Existing assets are available and should be used:
- logo,
- brand colors,
- typography direction,
- professional photos,
- selected videos,
- schedule,
- pricing,
- coach list and achievements,
- contact details.

Final text content may be added later, so the design must support structured placeholder content and easy future replacement.

## 4. Color System
Keep the Linear-inspired dark premium system as the base.

### Core colors
- Canvas: near-black / deep dark background.
- Surface 1: lifted dark surface for cards and sections.
- Surface 2: stronger lifted dark surface for important cards.
- Hairline: subtle borders for cards, nav, dividers.
- Ink: near-white text for headlines.
- Ink muted: secondary gray text.
- Ink subtle: tertiary gray text.

### Accent color
Use the existing brand/Linear-inspired accent carefully for:
- primary CTA buttons,
- focus states,
- active navigation states,
- small highlights,
- section eyebrows.

Avoid too many accent colors. The website should feel restrained and premium.

## 5. Typography
Use a modern sans-serif system. Recommended implementation:
- Inter, Geist Sans, or an equivalent modern sans-serif.
- Strong display typography for hero and section headings.
- Clean readable body text.
- Slight negative tracking for large headings.
- Avoid decorative fonts.

Typography should communicate confidence, discipline, and clarity.

## 6. Layout Principles
- Use generous spacing.
- Use strong section hierarchy.
- Use large visual blocks with photos/videos.
- Use cards for coaches, prices, schedule, and FAQ.
- Avoid clutter.
- Avoid too many animations.
- Use a max-width container around 1200–1280px.
- Use responsive grids:
  - desktop: multi-column layouts,
  - tablet: 2-column where appropriate,
  - mobile: single-column, highly readable.

## 7. Responsive Design
Desktop and mobile are both important. There is no single priority between laptop and phone, but mobile must not be neglected.

Mobile requirements:
- hero must be readable,
- CTAs must be easy to tap,
- navigation must be simple,
- pricing and schedule must be easy to scan,
- contact buttons must be obvious,
- media must not make the page slow or broken.

## 8. Page/Section Style
### Hero
- Strong first impression.
- Academy name visible.
- Location: Rivne, Ukraine.
- BJJ focus clear.
- Premium visual: large photo or video background/side visual.
- CTAs: Telegram, Instagram, phone, or primary contact button.

### About Academy
- Short, confident copy.
- Focus on discipline, community, training culture, and BJJ.
- Should work with placeholder content until final copy is ready.

### Coaches
- Strong cards or profile sections.
- Use real photos.
- Show names, belt ranks/roles, achievements, and short descriptions.
- Inspired by clean instructor presentation from Charlotte BJJ, but original in layout and content.

### Schedule
- Clear, structured, mobile-friendly.
- Should support groups, days, times, and notes.

### Pricing
- Clean pricing cards.
- Avoid confusing tables if cards are clearer.
- Show abonnement options clearly.

### Gallery/Media
- Use professional photos and selected videos.
- Keep media optimized.
- Avoid heavy autoplay experiences on mobile unless carefully implemented.

### Contact
- Include address, phone, Telegram, Instagram, email, and Google Maps.
- Contact actions should be visible and easy.

### FAQ / Trial Training
- Optional but recommended.
- Helps newcomers understand how to start, what to bring, whether beginners can join, and how to contact the academy.

## 9. Components
Recommended components:
- `Header`
- `MobileNav`
- `HeroSection`
- `SectionHeader`
- `Container`
- `Button`
- `CTAGroup`
- `CoachCard`
- `PricingCard`
- `ScheduleTable` or `ScheduleGrid`
- `MediaCard`
- `ContactCard`
- `MapBlock`
- `FAQAccordion`
- `Footer`

## 10. Interaction Rules
- Keep interactions smooth and minimal.
- Use subtle hover states.
- Use clear focus states.
- Avoid excessive motion.
- Animations should support the premium feeling, not distract.
- Navigation should be predictable.

## 11. Accessibility
- Maintain strong color contrast.
- Use semantic headings.
- Add alt text for meaningful images.
- Buttons and links must be keyboard-accessible.
- Do not rely only on color to communicate meaning.
- Tap targets on mobile should be comfortable.

## 12. Content Tone
Ukrainian copy should sound:
- professional,
- clear,
- confident,
- not childish,
- not overly aggressive,
- welcoming for beginners,
- credible for athletes and parents.

Example tone direction:
- “Тренуйся в середовищі, де дисципліна, техніка та команда мають значення.”
- “Avangard Jiu-Jitsu Academy — простір для дітей, підлітків і дорослих, які хочуть розвиватися через бразильське джіу-джитсу.”

Final copy may be written later; components should not depend on final text being complete.

## 13. Visual Do / Don’t
### Do
- Use strong real photos.
- Use dark premium surfaces.
- Keep layout clean.
- Make CTAs obvious.
- Show coaches and real academy credibility.
- Optimize for mobile.

### Don’t
- Do not make the site look like a cheap fight club template.
- Do not overuse red, flames, grunge, or aggressive MMA clichés.
- Do not create separate pages for children/adults/beginners in the first release.
- Do not overload the homepage with too much text.
- Do not copy Charlotte BJJ content or exact layouts.
