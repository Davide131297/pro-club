# 11vs11 Hub

Landingpage für die Hauptdomain **11vs11hub.de**. Sie bündelt die beiden
Community-Projekte rund um den Pro Clubs Modus in EA FC und verlinkt auf deren
Subdomains:

- **Pro Club FS** – `fs.11vs11hub.de` (Freundschaftsspiele, Matchmaking, Tabelle)
- **Pro Clubs Blacklist** – `blacklist.11vs11hub.de` (gemeldete Spieler, Einsprüche)

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- lucide-react für Icons

Die Seite besteht ausschließlich aus Server Components, kommt ohne Client-JS,
Datenbank und Tracking aus und ist Mobile First gebaut.

## Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft dann auf http://localhost:3000.

Weitere Skripte:

```bash
npm run build       # Produktions-Build
npm run start       # Produktions-Server
npm run lint        # ESLint
npm run type-check  # TypeScript ohne Emit
```

## Konfiguration

Alle Domains sind über Umgebungsvariablen konfigurierbar; ohne gesetzte
Variablen greifen die Produktions-Defaults aus `lib/site.ts`. Vorlage:
[`.env.example`](./.env.example).

| Variable                     | Default                            | Zweck                              |
| ---------------------------- | ---------------------------------- | ---------------------------------- |
| `NEXT_PUBLIC_SITE_URL`       | `https://11vs11hub.de`             | Canonical-URL, Sitemap, OG-Tags    |
| `NEXT_PUBLIC_FS_URL`         | `https://fs.11vs11hub.de`          | Links zu Pro Club FS               |
| `NEXT_PUBLIC_BLACKLIST_URL`  | `https://blacklist.11vs11hub.de`   | Links zur Blacklist                |
| `NEXT_PUBLIC_DISCORD_URL`    | Discord-Invite                     | Community-Button                   |
| `NEXT_PUBLIC_CONTACT_EMAIL`  | `proclubs-fs@proton.me`            | Kontakt in Footer, Impressum, DSE  |

## Struktur

```
app/
  page.tsx              Startseite (Hero, Projekte, Vorteile, Ablauf, FAQ)
  layout.tsx            Metadaten, Fonts, Header/Footer, JSON-LD
  impressum/            Impressum
  datenschutz/          Datenschutzerklärung
  opengraph-image.tsx   Social-Preview-Bild (generiert)
  robots.ts, sitemap.ts SEO
components/
  site-header.tsx, site-footer.tsx, logo.tsx
  sections/             Abschnitte der Startseite
lib/
  site.ts               Zentrale Konfiguration (Domains, Kontakt)
```

## Deployment

Vercel-Projekt anlegen, dieses Repository verbinden und das Repository-Root als
Root Directory belassen (Framework-Preset: Next.js). Anschließend die Domain
`11vs11hub.de` zuweisen. Die Umgebungsvariablen aus `.env.example` sind
optional, solange die Defaults stimmen.

Die Landingpage ist bewusst eigenständig (eigenes Repository, eigene
`package.json`, eigener Build) und teilt keinen Code mit den beiden
Projekt-Repositories.

## Hinweis

Privates Community-Projekt ohne Verbindung zu Electronic Arts. EA FC und Pro
Clubs sind Marken von Electronic Arts Inc.
