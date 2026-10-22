# vite-react-starter

Vite 8 + React 19 + TypeScript + TanStack Router + Tailwind CSS 4 starter with ESLint, Prettier, Husky, lint-staged, and commitlint.

## Prerequisites

- **Node.js** ≥ 22.22.1
- **pnpm** ≥ 11

## Connect to a new repo

### Path A — Use this template (preferred)

Once this repo is marked as a GitHub **template**:

1. On GitHub open this repository → **Use this template** → create a new repo with your project name.
2. Clone it:

```bash
git clone https://github.com/<you>/<your-new-repo>.git
cd <your-new-repo>
```

3. Personalize:

- Rename `"name"` in `package.json`
- Set `<title>` in `index.html` and `appTitle` / `projectName` in `src/consts/config.ts`
- Copy env: `cp .env.template .env.local` and fill values (optional)

4. Install and run:

```bash
pnpm install
pnpm serve
```

### Path B — Clone starter, then point at a brand-new empty repo

1. Clone the starter into a new folder:

```bash
git clone https://github.com/<you>/vite-react-starter.git my-app
cd my-app
```

2. Drop starter git history and start fresh:

```bash
rm -rf .git
git init
```

3. Create an **empty** GitHub repo (no README, no license, no `.gitignore`).

4. Add the remote and push:

```bash
git remote add origin https://github.com/<you>/<your-new-repo>.git
```

5. Personalize (`package.json` name, `index.html` title, `src/consts/config.ts`), then:

```bash
pnpm install
cp .env.template .env.local
git add .
git commit -m "chore(dx): initial commit from vite-react-starter"
git branch -M main
git push -u origin main
```

6. Start the app:

```bash
pnpm serve
```

### Cursor MCP (optional)

```bash
cp .cursor/mcp.json.example .cursor/mcp.json
```

Fill any API keys in `.cursor/mcp.json` (that file is gitignored).

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm serve` | Dev server on port 3001 |
| `pnpm build` | Full lint + format, then production build |
| `pnpm preview` | Preview the production build on port 3002 |
| `pnpm lint` | ESLint (type-aware) |
| `pnpm format` | Prettier write |
| `pnpm routes:generate` | Generate TanStack `routeTree.gen.ts` |
| `pnpm routes:watch` | Watch and regenerate routes |

Husky installs on `pnpm install` via the `prepare` script (`pre-commit` → lint-staged, `commit-msg` → commitlint, `pre-push` → lint + format).

Skip commitlint once: `SKIP_COMMITLINT=1 git commit -m "..."`

## Sentry (optional)

Runtime:

- `VITE_SENTRY_DSN` in `.env.local` — if empty, Sentry init is a no-op.

Build upload (only when both are set):

- `SENTRY_ORG`
- `SENTRY_PROJECT` (defaults to package project name)
- `SENTRY_AUTH_TOKEN`

## Stack

- Vite 8 (Rolldown) · React 19 · TypeScript · TanStack Router
- Tailwind CSS 4 · ESLint 10 flat config · Prettier
- Husky · lint-staged · commitlint (conventional, scoped)
- Optional Sentry (`@sentry/react` + Vite plugin)

See `COPYRIGHT` for license terms.
