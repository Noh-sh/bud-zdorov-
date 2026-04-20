# Skill: Mobile-Adaptation (Responsive Design)

This skill ensures that every page and component is fully optimized for mobile devices from the start.

## 1. Layout Strategy
- **Mobile-First**: Design for 375px width first, then scale up to 1440px using media queries or Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`).
- **Flex/Grid**: Use `flex-col` for mobile and `lg:flex-row` for desktop. Use auto-filling grids for lists.

## 2. Interactive Elements
- **Touch Targets**: All interactive elements (buttons, links) must be at least 44x44px to be easily clickable with a thumb.
- **Spacing**: Increase padding for mobile to avoid accidental clicks and improve readability on small screens.

## 3. Performance
- **Image Optimization**: Use `sizes` prop in `next/image` to ensure small versions of images are loaded on mobile devices (e.g., `sizes="(max-width: 768px) 100vw, 50vw"`).
- **Lazy Loading**: Ensure non-critical off-screen elements are lazy-loaded.

## 4. Typography
- **Scalable Units**: Use `rem` or Tailwind's scale. Ensure primary text is at least `16px` on mobile for legibility.
- **Line Height**: Increase line height slightly on mobile to prevent text from looking cramped.

## 5. Verification
- Use the browser tool to check `localhost` at mobile dimensions (emulated phone).
- Test navigation (mobile menu, burger icon) specifically.
