# Project Coding Standards: bud-zdorov

This project priorities clean code, performant localized infrastructure, and visual consistency.

## 1. Tech Stack
- **Framework**: Next.js (App Router)
- **Localization**: `next-intl`
- **Styling**: Tailwind CSS + CSS Modules
- **Animations**: Framer Motion

## 2. Reusability Rule (DRY)
- **DO NOT REDESIGN**: If a component (Button, Card, Input) already exists in `src/components/`, you MUST reuse it.
- **PROPS OVER DUPLICATES**: If an existing component needs a small change, add a prop instead of creating a new component.
- **CHECK FIRST**: Always perform an `ls src/components/` before starting a new UI task.

## 3. Localization (i18n)
- **NO HARDCODED STRINGS**: All text must be in `messages/*.json`.
- Use `useTranslations` for client/server components.

## 4. Component Structure
- Folders: `src/components/[ComponentName]/`
- Files: `index.tsx`, `style.module.css` (if needed for custom CSS), `types.ts` (if complex props).

## 5. UI/UX Rules
- Mobile-first approach.
- Use HSL colors defined in `globals.css`.
- Every image needs `alt`.
