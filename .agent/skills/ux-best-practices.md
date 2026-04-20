# Skill: UX-Best-Practices (User Experience Logic)

This skill describes how to make the bud-zdorov project intuitive, fast, and easy to use.

## 1. Navigation Flow
- **Clarity**: Users should never wonder "where am I?". Use breadcrumbs or clear active states in the Navbar.
- **Frictionless**: Keep important actions (Booking, Contact) within 1-2 clicks from any page.
- **Back Actions**: Ensure the browser's "back" button and manual "Close" buttons behave as expected.

## 2. Feedback & Interactivity
- **Button States**: Every click must result in visual feedback (tap animation, loading spinner, or immediate change).
- **Forms**:
    - Inline validation (tell them if an email is wrong *before* they hit submit).
    - Friendly success messages (e.g., "Мы получили ваше сообщение! Скоро свяжемся.").
- **Loading**: Use Skeletons for page transitions if content takes time to load.

## 3. Mobile Experience
- **Touch Targets**: Buttons must be at least 44x44px.
- **Responsive Layouts**: Mobile-first design. Stack columns on mobile, expand to grid on desktop.
- **Fast Interaction**: Minimize large image loads on mobile networks (use `next/image` optimization).

## 4. Accessibility (A11y)
- **Contrast**: Ensure text color contrast ratio passes WCAG AAA where possible (especially for medical info).
- **Semantics**: Use `<h1>` through `<h6>` correctly. Use `<button>` for actions and `<a>` for navigation.
- **Screen Readers**: Always provide `alt` text for descriptive images.

## 5. Locales (i18n)
- **Consistency**: Transitioning between RU and EN should not reload the entire app state if possible.
- **Context**: Ensure that translated strings fit the UI design and don't "break" layouts.
