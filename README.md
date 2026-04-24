# getbigriginsurance.com

Next.js 14 (App Router) marketing site for **GetBigRigInsurance** — the trucking insurance brand of Vantage Point Risk Partners LLC, focused on new authority truckers and owner operators.

- Phone: Call or text 541-681-8793
- Email: richard@vantagepointrisk.com
- Quote flow: `/get-a-quote` (Sembley two-step embedded intake)

## Stack

- Next.js 14 App Router
- React 18, TypeScript
- Tailwind CSS, mobile-first
- Markdown blog posts in `content/blog/` (auto-rendered, no DB)
- Schema.org JSON-LD on every page
- Built for Vercel deployment

## Pages (13)

1. `/` — Homepage
2. `/new-authority`
3. `/owner-operator`
4. `/how-much-does-trucking-insurance-cost`
5. `/what-insurance-do-i-need-new-trucking-authority`
6. `/trucking-insurance-companies-compared`
7. `/best-trucking-insurance-for-owner-operators`
8. `/trucking-insurance-reviews`
9. `/faq`
10. `/about`
11. `/get-a-quote`
12. `/blog`
13. `/contact`

## Local development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Adding blog posts

Drop a Markdown file into `content/blog/`:

```markdown
---
title: "Post title"
date: 2026-04-25
tags: [new-authority, coverage]
excerpt: "First two sentences of the post."
---

Post body in Markdown.
```

Vercel rebuilds on every commit.

## Deployment

Push to GitHub. Connect the repo to Vercel. Map the `getbigriginsurance.com` domain in Vercel's project settings.
