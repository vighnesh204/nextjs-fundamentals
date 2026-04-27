# Next.js — Intro for React Developers

---

## What is Next.js?

Next.js is a **full-stack framework built on top of React**.

You still write React. Same JSX, same components, same `useState`, `useEffect`, `useRef`.
Next.js just adds things React doesn't have out of the box.

---

## Quick Facts

| | |
|---|---|
| **Developed by** | [Vercel](https://vercel.com) |
| **Latest version** | Next.js 15 (2024) |
| **Language** | JavaScript / TypeScript |
| **Built on** | React |

---

## Why Not Just React?

Plain React runs **only in the browser**. That causes 3 real problems:

- **SEO** — Google sees an empty `<div>`, not your content
- **Slow first load** — browser downloads JS, runs it, then renders
- **No backend** — you need a separate server for APIs and database

Next.js solves all three.

---

## Key Features

| Feature | What it does |
|---|---|
| **File-based Routing** | Folder structure = routes, no library needed |
| **Server Components** | Run React on the server, not just the browser |
| **Server Actions** | Call server functions directly from components |
| **Route Handlers** | Built-in API endpoints, no Express needed |
| **SSG / SSR / ISR / CSR** | Choose how each page renders |
| **`next/image`** | Auto lazy load, WebP conversion, no layout shift |
| **`next/font`** | Loads fonts at build time, zero layout shift |
| **`next/link`** | Prefetches pages automatically on hover |
| **Middleware** | Run logic before any request hits a page |
| **TypeScript support** | Built-in, zero config |

---

## Two Types of Components

This is the biggest new concept in Next.js.

### Server Component (default)
- Runs on the server, not the browser
- Can fetch data directly with `async/await`
- No `useState`, no `useEffect`, no event handlers

```tsx
// No "use client" = Server Component
export default async function Products() {
  const data = await fetch("https://api.example.com/products").then(r => r.json());
  return <ul>{data.map(p => <li key={p.id}>{p.name}</li>)}</ul>;
}
```

### Client Component (what you already know)
- Runs in the browser — same as React
- Needs `useState`, `useEffect`, click handlers

```tsx
"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

> **Rule:** Default to Server Components. Add `"use client"` only when you need interactivity.

---

## Rendering Modes

Next.js can render pages in different ways — you pick per page:

- **SSG** — built once at build time → fastest (blogs, docs)
- **SSR** — rendered fresh on every request → always up-to-date (dashboards)
- **ISR** — static but auto-updates in background (e-commerce, news)
- **CSR** — renders in browser, same as React (highly interactive UI)

---

> **One line:** Next.js = React + routing + server rendering + built-in API + production optimizations.