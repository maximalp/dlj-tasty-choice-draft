# DLJ — Tasty Choice Draft

A fair, joke-themed draft order tool. Each team claims a cat food flavor;
every flavor was already secretly shuffled onto a draft slot before anyone
picked, so claiming a flavor never affects your odds of any given slot.

## How it works

- **Setup** — paste your league's flavor list (defaults to the real list
  already baked into `lib/flavors.js`) and seal it. The server shuffles
  slot 1..N onto the flavors and never sends that mapping to the browser
  until reveal.
- **Claim** — everyone opens the same URL, types their team name, and taps
  an unclaimed flavor. Claiming is atomic on the server (Redis `HSETNX`),
  so two people tapping the same flavor at the same instant can't both win it.
- **Reveal** — anyone taps "Reveal draft order" once claims are in. The
  server only includes the position mapping in its response after this flag
  is set.

## Local setup

```bash
npm install
cp .env.local.example .env.local   # fill in your Redis credentials and a RESET_PIN
npm run dev
```

## Deploying to Vercel

1. Push this project to a GitHub repo and import it in Vercel (or run
   `vercel` from this folder).
2. In your Vercel project, go to **Storage** and add a Redis database from
   the Marketplace (Upstash for Redis). This provisions the database and
   injects credentials into your project's environment variables
   automatically — no separate account needed.
3. Add a `RESET_PIN` environment variable in **Project Settings →
   Environment Variables** — any short string. This is what gates the
   Reset tin button; without it, resets are refused entirely.
4. Redeploy so the new environment variables are picked up
   (`vercel --prod`, or just push again).
5. Open the deployed URL. The flavor list is pre-filled with your league's
   real names from `lib/flavors.js` — tap **Seal the tin** to lock it in,
   then share the link.

Note: the env var names Vercel's Redis integration injects can vary
slightly (`UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`, or
`KV_REST_API_URL` / `KV_REST_API_TOKEN`). `lib/redis.js` checks both, but
if the app can't connect, check **Project Settings → Environment
Variables** for the exact names and update `.env.local` for local dev.

## Serving this at maximlp.com/dljcatfood

This app is now configured with `basePath: "/dljcatfood"` in
`next.config.js`, which means **local dev also moves** —
`npm run dev` now serves the app at `http://localhost:3000/dljcatfood`,
not the bare root. That's intentional: it means what you test locally
matches what you'll actually ship, instead of the subpath routing only
getting exercised for the first time in production.

Getting the exact URL `maximlp.com/dljcatfood` working requires wiring
together two separate Vercel projects — this app, and your existing
portfolio project, which owns the domain. This is Next.js's "Multi
Zones" pattern. Steps:

1. **Deploy this project on its own first**, same as the steps above,
   and note the `*.vercel.app` URL Vercel gives it.
2. **Give this project its own custom domain too** — even a throwaway
   subdomain like `dljcatfood-app.maximlp.com` works, and you never
   need to visit it directly. Vercel treats deployments without any
   custom domain attached as preview builds (marked `noindex`, and
   potentially inconsistent across redeploys), which you don't want
   for something a rewrite depends on.
3. **In your portfolio's repo**, add a rewrite that forwards
   `/dljcatfood/*` to this project's URL, keeping the same prefix on
   both ends:

   If the portfolio is Next.js, add to its `next.config.js`:
   ```js
   async rewrites() {
     return [
       {
         source: "/dljcatfood/:path*",
         destination: "https://YOUR-DLJ-PROJECT.vercel.app/dljcatfood/:path*",
       },
     ];
   }
   ```

   If it's anything else (static HTML, another framework), add a
   `vercel.json` in the portfolio's root instead:
   ```json
   {
     "rewrites": [
       {
         "source": "/dljcatfood/:path*",
         "destination": "https://YOUR-DLJ-PROJECT.vercel.app/dljcatfood/:path*"
       }
     ]
   }
   ```
4. **Redeploy the portfolio project** so the rewrite takes effect, then
   visit `www.maximlp.com/dljcatfood` and run through the full flow —
   seal, claim, reveal — to confirm the proxying didn't break anything
   along the way.

If you ever rename the path away from `/dljcatfood`, it needs to change
in three places: `next.config.js`, `lib/basePath.js`, and the rewrite
rule in the portfolio project.

## Editing the flavor list

Edit the array in `lib/flavors.js` — that's what pre-fills the setup
screen on every deploy. You can still overwrite it in the setup textarea
before sealing without touching the code.

## Resetting a draft

The **Reset tin** button wipes everything (flavor list, claims, positions)
back to empty. It's gated behind the `RESET_PIN` you set in your
environment variables — tapping it opens a modal asking for that PIN,
and `/api/reset` checks it server-side before deleting anything. Share
the PIN only with whoever should be able to reset the draft. There's
still no other auth beyond that PIN — anyone with the link can seal or
reveal, which is fine for a friend league but worth knowing.

There's no manual refresh button — the app polls the server every 3.5
seconds on its own, so claims show up automatically within a few
seconds for everyone.

## Claim sound

Tapping a flavor plays `public/sounds/meow.mp3` — a real cat meow, not a
synthesized one. It's a re-encode (MP3, loudness-normalized) of
["Felis silvestris catus.ogg"](https://commons.wikimedia.org/wiki/File:Felis_silvestris_catus.ogg)
by Jeanot on Wikimedia Commons, licensed CC BY-SA 2.5. Swap the file to
change the sound; no code changes needed as long as the path stays the same.
