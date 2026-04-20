# Skill: UI-Standards (Visual Consistency)

This skill defines the "Look & Feel" of the bud-zdorov project. Follow these rules to ensure visual integrity across all pages.

## 1. Design Tokens (Colors)
Maintain the palette defined in `globals.css`:
- **Background**: `#f0fdf4` (Mint 50) - Primary background for a fresh, clean feel.
- **Foreground**: `#064e3b` (Forest Green) - Used for primary text to ensure readability.
- **Primary**: `#10b981` (Emerald 500) - Used for main CTA buttons and key highlights.
- **Accent**: `#34d399` (Emerald 400) - Used for hover states and secondary elements.
- **Gradients**: Use `emerald-400` to `emerald-950` for large headlines and heroic elements.

## 2. Typography
- **Headlines**: `Playfair Display`. Use `font-black` and negative letter spacing (`tracking-[-0.05em]`) for a premium "editorial" look.
- **Subtitles/UI**: `Outfit`. Use for navigational elements and medium-sized headings.
- **Body Text**: `Inter`. Use for long-form content to ensure maximum readability.

## 3. Component Styling
- **Buttons**:
    - Rounded corners (default `rounded-xl` or more).
    - Subtle hover scale/opacity transitions.
    - Glassmorphism effects for floating elements (blurred background).
- **Cards**:
    - Borderless or very subtle borders.
    - Soft shadows or background color shifts.
- **Images**:
    - Always use `next/image`.
    - Apply smooth masks or gradients when images blend into the background.

## 4. Animations
- **Entrance**: Use `.animate-slide-up` (0.8s) for text blocks.
- **Background**: Use `.animate-fade` (0.6s) for layout containers.
- **Interactive**: Hover effects should be `duration-300` and `ease-out`.
