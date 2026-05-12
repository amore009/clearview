This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Email (Resend)

The contact form (`app/contact/page.tsx`) posts to `app/api/send/route.ts`, which uses [Resend](https://resend.com) to deliver submissions to the team inbox.

### 1. Create a Resend account and API key

1. Sign up at [resend.com](https://resend.com).
2. Open **API Keys** in the dashboard and click **Create API Key**.
3. Give it a name (e.g. `clearview-local`), choose **Sending access**, and copy the generated key — it is only shown once.

### 2. Add the required environment variables

Copy the template and fill in real values:

```bash
cp .env.example .env
```

The file (`.env*` is gitignored) must contain:

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | yes | API key from [resend.com/api-keys](https://resend.com/api-keys). |
| `RESEND_FROM_EMAIL` | no | Sender shown to recipients, e.g. `Clearview Contact <contact@your-domain.com>`. Must be on a domain you've [verified in Resend](https://resend.com/docs/dashboard/domains/introduction). If unset, falls back to `onboarding@resend.dev` (testing only — see note below). |
| `CONTACT_RECEIVER_EMAIL` | yes | Inbox that receives contact form submissions, e.g. `team@your-domain.com`. |

Example `.env`:

```bash
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=Clearview Contact Form <contact@your-domain.com>
CONTACT_RECEIVER_EMAIL=you@example.com
```

Restart `npm run dev` after adding or changing env vars so Next.js picks them up. For production (Vercel, etc.), add the same variables in the hosting dashboard.

### 3. Note on the testing sender

`onboarding@resend.dev` is Resend's shared sender. It works without verifying a domain, but **only delivers to the email address registered on your Resend account** — perfect for local testing, not usable in production. Verify a domain and set `RESEND_FROM_EMAIL` before going live.

### 4. Test it

With the dev server running, submit the contact form at [http://localhost:3000/contact](http://localhost:3000/contact). You should see a `200` from `/api/send` in the terminal and the email arrive at `CONTACT_RECEIVER_EMAIL`. The route logic lives in `app/api/send/route.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
