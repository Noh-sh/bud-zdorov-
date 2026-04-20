# Rules: Data Validation Standards (with Zod)

To ensure stability and security, we strictly validate all data entering or leaving the application.

## 1. Zod Integration
- Use **Zod** as the primary schema validation library.
- Define schemas for:
    - Environment variables.
    - API Request bodies.
    - Server Action inputs.

## 2. Validation Procedure
- **Fail Fast**: Validate data at the boundary (e.g., at the start of a Server Action).
- **Type Safety**: Use `z.infer<typeof schema>` to derive TypeScript types from Zod schemas.
- **User Feedback**: Provide specific error messages from Zod directly to the UI for better UX.

## 3. Empty States & Defaults
- Avoid `undefined` where possible; use explicit defaults in Zod schemas (`.default()`).
- Handle missing data gracefully with `.optional()` or `.nullable()`.
