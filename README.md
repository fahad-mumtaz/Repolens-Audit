# RepoLens AI

> Turn any GitHub repository into a premium engineering report card.


## What is RepoLens AI?

RepoLens AI is a premium GitHub repository intelligence platform. It analyzes any public repository across four professional lenses and generates a beautiful, shareable report — helping developers improve their projects before sharing with recruiters, clients, contributors, or investors.

This is **not** a code reviewer. It evaluates your repository as a professional product.

## Features

- **Engineering Health** — Structure, TypeScript, tests, CI/CD, lockfiles
- **Launch Readiness** — Deployment config, .env docs, demo links, README setup
- **Open Source Trust** — LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, issue templates
- **Recruiter Impression** — First impression, clarity, screenshots, live URL
- **README Quality Analyzer** — Section-by-section scoring and suggestions
- **Repo X-Ray Map** — Architecture visualization grouped by role
- **Risk Detection** — Flags potential secrets, missing files, security gaps
- **Top 7 Improvement Plan** — Prioritized, actionable roadmap
- **Markdown Export** — Download your full report as a .md file
- **Optional AI Insights** — Plug in your own OpenAI-compatible API key

## Tech Stack

- **Framework** — Next.js 15 App Router
- **Language** — TypeScript
- **Styling** — Tailwind CSS + custom glassmorphism design
- **Animations** — Framer Motion
- **Charts** — Recharts
- **Icons** — Lucide React
- **Validation** — Zod
- **Data source** — GitHub REST API (public, no auth required)
- **AI** — OpenAI-compatible (user-provided key, optional)

## How It Works

1. Paste any public GitHub repository URL
2. RepoLens fetches repo metadata, file tree, README, and community files via the GitHub API
3. Deterministic analyzer scores the repo across 4 lenses (no AI key needed)
4. Beautiful report generated with scores, charts, risks, and improvement plan
5. Optionally connect your own API key for deeper AI insights

## Local Setup

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install

```bash
# Clone the repo
git clone https://github.com/your-username/repolens-ai
cd repolens-ai

# Install dependencies
npm install

# Copy env file
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GITHUB_TOKEN` | Optional | GitHub Personal Access Token. Increases rate limit from 60/hr to 5000/hr. |
| `NEXT_PUBLIC_APP_URL` | Optional | Your deployment URL for shareable links. |

No database required. No backend required. All analysis is done in Next.js API routes.

## Deployment to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables (optional)
vercel env add GITHUB_TOKEN
vercel env add NEXT_PUBLIC_APP_URL
```

Or deploy with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Roadmap

- [ ] GitHub OAuth for private repo support
- [ ] Org-level repository scanning
- [ ] Compare two repositories side-by-side
- [ ] Weekly digest email for monitored repos
- [ ] GitHub Actions integration to run on PRs
- [ ] Public report sharing with custom slugs
- [ ] PDF export

## License

MIT

## Author

Built with care for the developer community.

---

*RepoLens AI — Repository intelligence for developers who care about how they're perceived.*
