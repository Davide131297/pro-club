const DEFAULT_SITE_URL = "https://11vs11hub.de";

function clean(value: string | undefined, fallback: string) {
  const raw = value?.trim();

  if (!raw) {
    return fallback;
  }

  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;

  return withProtocol.replace(/\/$/, "");
}

export const site = {
  name: "11vs11 Hub",
  domain: "11vs11hub.de",
  tagline: "Die Tools der EA FC Pro Clubs Community",
  description:
    "11vs11 Hub bündelt zwei Tools für EA FC Pro Clubs: Pro Club FS für Freundschaftsspiele, Matchmaking und Tabelle sowie die Pro Clubs Blacklist für gemeldete Spieler.",
  url: clean(process.env.NEXT_PUBLIC_SITE_URL, DEFAULT_SITE_URL),
  discordUrl: clean(
    process.env.NEXT_PUBLIC_DISCORD_URL,
    "https://discord.gg/vsg4gDaceX",
  ),
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "proclubs-fs@proton.me",
} as const;

export const fsUrl = clean(
  process.env.NEXT_PUBLIC_FS_URL,
  "https://fs.11vs11hub.de",
);

export const blacklistUrl = clean(
  process.env.NEXT_PUBLIC_BLACKLIST_URL,
  "https://blacklist.11vs11hub.de",
);

export function hostOf(url: string) {
  return url.replace(/^https?:\/\//i, "").replace(/\/$/, "");
}
