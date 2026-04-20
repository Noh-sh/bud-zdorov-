# Skill: Spec-Check (Procedural Review)

This skill is used to verify that a feature or component perfectly matches the technical requirements.

## When to use
- After completing a task.
- When requested by the user: "Run spec-check".

## Procedure
1.  **Identify the Source**: Read the `README.md` or any separate spec file (e.g., `DOCS.md`) to understand the requirements.
2.  **Verify Files**: Check if all expected files (Next.js pages, components, styles) were created.
3.  **Check Localization**:
    - Ensure `messages/*.json` contains all new keys.
    - Ensure `useTranslations` is used correctly in the code.
4.  **Check Styling**:
    - Verify consistent UI tokens (colors, fonts).
    - Check for responsive design (Mobile-Adaptation).
5.  **Test Functionality**: Run localized dev server and check browser output.
6.  **Report**: Provide a checklist based on `spec-reviewer` tone if activated.
