# LifeFlight Queensland Mission Report

A Spotify Wrapped-style personalised awareness tool. User enters a QLD postcode, receives a branded mission report showing LifeFlight activity near their home, with a shareable card and donor CTA.

## Local Setup

```bash
git clone https://github.com/dominicbuckland-del/lifeflight.git
cd lifeflight
npm install
cp .env.local.example .env.local
# Fill in your Supabase credentials
npm run dev
```

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Supabase Table

Run this SQL in your Supabase SQL editor:

```sql
CREATE TABLE email_captures (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text NOT NULL,
  postcode text NOT NULL,
  suburb text,
  missions_count integer,
  created_at timestamp with time zone DEFAULT now()
);
```

## Deploy to Vercel

```bash
vercel deploy --yes --prod
```

Ensure `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set in your Vercel project environment variables.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Supabase (email capture)
- Vercel (deployment)
