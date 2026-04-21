# Skill: Mobile-First-Workflow (Mandatory Responsiveness)

This skill mandates a strictly "Mobile-First" approach to UI development. Follow these rules to ensure every component is optimized for performance and usability on small screens.

## 1. Tailwind Classes: The Correct Order
Always write classes for mobile (smallest screen) first, then scale up using responsive prefixes.
- **BAD**: `flex flex-row lg:flex-col` (Base is desktop-like, then mobile is an afterthought)
- **GOOD**: `flex flex-col lg:flex-row` (Base is mobile-optimized, then scaled for desktop)

## 2. Interactive Elements (Touch Targets)
- All clickable elements (buttons, links, inputs) **MUST** have a minimum height/width of `44px` or `11rem` equivalent on mobile.
- Use `p-3` or `p-4` for mobile buttons to ensure they are thumb-friendly.
- Ensure adequate spacing between interactive elements to prevent accidental taps.

## 3. Responsive Typography
- Never use fixed pixel sizes for text.
- Use Tailwind's scale: `text-sm`, `text-base`, `text-lg`.
- Use the following pattern for headings:
  - Mobile: `text-2xl`
  - Desktop: `lg:text-4xl`

## 4. Mobile Layout Checks
Before finishing any UI task, you **MUST** use the browser tool to:
1. Navigate to `localhost:3000`.
2. Resize the viewport to **375px** width.
3. Check for:
   - **Horizontal scrolling**: There should be NONE.
   - **Text truncation**: Ensure text doesn't break out of containers.
   - **Overlapping**: Check that elements aren't overlapping on top of each other.
   - **Navigation**: Verify that the burger menu (if any) works correctly.

## 5. Non-Negotiable Rules
- Avoid `fixed` positioning unless absolutely necessary (e.g., sticky headers).
- Use `w-full` for containers on mobile.
- Prefer `grid-cols-1 lg:grid-cols-2` over explicit width percentages.
