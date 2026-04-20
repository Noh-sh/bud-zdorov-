# Rules: Next.js App Router Conventions

This document defines industry-standard patterns for building robust Next.js applications using the App Router.

## 1. Component Strategy
- **Server First**: All components are Server Components by default.
- **Use Client**: Only add `"use client"` at the leaf level (buttons, interactive forms).
- **Colocation**: Keep `loading.tsx`, `error.tsx`, and `not-found.tsx` in the same directory as the `page.tsx` they serve.

## 2. Performance (Core Web Vitals)
- **Image Optimization**: Strictly use `next/image`. Always provide `width`, `height`, and `alt`.
- **Font Optimization**: Use `next/font/google` to prevent Layout Shift.
- **Dynamic Imports**: Use `next/dynamic` for heavy client-side libraries.

## 3. Data Fetching & Mutations
- **Server Actions**: Use Server Actions for all mutations (forms).
- **Streaming**: Use React Suspense with `loading.tsx` to stream slow data segments.
- **Revalidation**: Call `revalidatePath()` or `revalidateTag()` immediately after mutations.

## 4. Metadata
- Define `Metadata` statically or via `generateMetadata()` for every page for SEO.
