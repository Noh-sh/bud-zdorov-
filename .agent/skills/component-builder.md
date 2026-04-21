# Skill: Component-Builder (UI Implementation)

This skill is used to create high-quality, reusable React components for the bud-zdorov project.

## Procedure
1.  **Check Existing**: Per `coding_standards.md`, first check `src/components/` for similar components to reuse or extend.
2.  **Folder Structure**: `src/components/[ComponentName]/`.
3.  **Define Props**: Create a TypeScript interface for component props for strict type safety.
4.  **Implement Logic**: Use React functional components.
5.  **Apply Styles**: Use Tailwind CSS + CSS Modules. Follow `ui-standards`.
6.  **Add Translations**: Create keys in `messages/*.json` and use them via `next-intl`.
7.  **Final Polish**: Apply `ux-best-practices` and strictly follow `mobile-first-workflow` (accessibility, mobile touch targets, responsiveness check).
