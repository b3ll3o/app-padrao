# Project Overview

This is a Next.js project bootstrapped with `create-next-app`. It utilizes React for the user interface and TypeScript for type safety. The project structure follows typical Next.js conventions, with pages defined in the `app/` directory.

# Building and Running

To get started with the project, follow these steps:

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. The page auto-updates as you edit files in `app/`.

## Build

Build the application for production:

```bash
npm run build
```

## Start

Start the production server:

```bash
npm run start
```

## Linting

Run ESLint to check for code quality and style issues:

```bash
npm run lint
```

# Development Conventions

*   **Linting:** The project uses ESLint with configurations from `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` to enforce code style and best practices.
*   **Type Checking:** TypeScript is used throughout the project for static type checking, enhancing code reliability and maintainability. The configuration is defined in `tsconfig.json`.
*   **Styling:** (Based on common Next.js setups, assuming Tailwind CSS given `@tailwindcss/postcss` in `package.json`) The project likely uses Tailwind CSS for styling, configured via `postcss.config.mjs`.
