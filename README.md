# React Design System

A reusable and accessible React component library built with **TypeScript, Tailwind CSS, Storybook, Jest and React Testing Library**.

## Why this project?

This repository demonstrates a production-oriented Design System approach:

- reusable React components
- TypeScript APIs
- Tailwind design tokens
- Storybook documentation
- accessibility-first components
- unit tests with Jest + React Testing Library
- components designed to be consumed by React / Next.js applications

## Stack

- React
- TypeScript
- Tailwind CSS
- Storybook
- Jest
- React Testing Library
- Radix UI (accessible dialog primitive)
- Vite

## Components

- Button
- Input
- Badge
- Card
- Alert
- Modal

## Getting started

```bash
npm install
npm run dev
```

Open Storybook at `http://localhost:6006`.

Run tests:

```bash
npm test
```

Type-check:

```bash
npm run typecheck
```

Build Storybook:

```bash
npm run build
```

## Design principles

### Accessibility
Components expose semantic HTML and accessible states such as labels, `aria-invalid`, `aria-describedby`, `aria-busy`, keyboard-friendly focus styles and an accessible dialog primitive.

### Composition
Components stay small and composable so they can be used in different product contexts.

### Consistency
Visual variants are centralized and Tailwind utility classes are merged with `tailwind-merge`.

## Example

```tsx
import { Button, Card, Input } from "@rateb/react-design-system";

export function LoginForm() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Button className="mt-4">Sign in</Button>
    </Card>
  );
}
```

## Roadmap

- [ ] Select / Combobox
- [ ] DataTable
- [ ] Tabs
- [ ] Tooltip
- [ ] Toast
- [ ] Theme / dark mode
- [ ] formal design-token package
- [ ] visual regression testing
- [ ] npm publication
- [ ] Next.js consumer example
- [ ] CI with GitHub Actions

 
