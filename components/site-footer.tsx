import Link from "next/link";

import { Wordmark } from "@/components/logo";
import { fsUrl, hostOf, site } from "@/lib/site";

const columns = [
  {
    title: "Projekt",
    links: [{ href: fsUrl, label: "Pro Club FS", external: true }],
  },
  {
    title: "Community",
    links: [
      { href: site.discordUrl, label: "Discord", external: true },
      {
        href: `mailto:${site.contactEmail}`,
        label: "Kontakt",
        external: true,
      },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum", external: false },
      { href: "/datenschutz", label: "Datenschutz", external: false },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-800 bg-black">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              Community-Tool für den Pro Clubs Modus in EA FC. Kostenlos, ohne
              Download, direkt im Browser.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                        {...(link.href.startsWith("http")
                          ? { rel: "noopener noreferrer" }
                          : {})}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-zinc-800 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.domain}
          </p>
          <p>
            Kein offizielles Angebot von EA Sports. EA FC und Pro Clubs sind
            Marken von Electronic Arts Inc.
          </p>
        </div>
      </div>

      <p className="sr-only">
        Erreichbar unter {hostOf(site.url)} und {hostOf(fsUrl)}.
      </p>
    </footer>
  );
}
