# Durelay

Durelay is a webhook infrastructure concept for accepting, verifying, and reliably delivering webhook traffic at scale.

## What it covers

- **Relay Endpoints** — accept one inbound webhook and fan it out to multiple destinations in parallel.
- **Queue Endpoints** — send inbound webhooks to dedicated, durable queues.
- **Direct Connect** — use short-lived, scoped credentials for direct queue access.
- **Delivery reliability** — fast `202 Accepted` responses, automatic retries, and inspectable delivery logs.
- **Security** — HMAC request signing and per-tenant isolation.

## Technology

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- pnpm

## Getting started

### Prerequisites

- Node.js 24
- pnpm 11

### Install and run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server. |
| `pnpm build` | Create a production build. |
| `pnpm start` | Run the production build. |
| `pnpm lint` | Run ESLint. |
| `pnpm typecheck` | Run TypeScript checks. |

## Project structure

- `src/app` — application routes and page-level styles
- `src/components` — shared interface components
- `public/brand` — Durelay brand assets

## Repository hygiene

`node_modules` and `.next` are intentionally excluded. They contain installed dependencies and generated Next.js build output, and can be recreated locally.
