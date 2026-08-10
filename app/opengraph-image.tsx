import { ImageResponse } from "next/og";

import { fsUrl, hostOf, site } from "@/lib/site";

export const alt = `${site.name} – ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          padding: 72,
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            11
          </div>
          <div style={{ fontSize: 34, fontWeight: 600 }}>11vs11 Hub</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1 }}>
            Alles für deinen Pro Club.
          </div>
          <div style={{ fontSize: 34, color: "#a1a1aa" }}>
            Freundschaftsspiele, Matchmaking und Tabelle für EA FC Pro Clubs.
          </div>
        </div>

        <div style={{ display: "flex", gap: 20, fontSize: 26, color: "#71717a" }}>
          <div style={{ display: "flex" }}>{hostOf(site.url)}</div>
          <div style={{ display: "flex" }}>·</div>
          <div style={{ display: "flex" }}>{hostOf(fsUrl)}</div>
        </div>
      </div>
    ),
    size,
  );
}
