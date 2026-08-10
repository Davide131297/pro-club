import Link from "next/link";

import { Wordmark } from "@/components/logo";
import { fsUrl } from "@/lib/site";

const navItems = [
  { href: "/#projekte", label: "Projekt" },
  { href: "/#features", label: "Vorteile" },
  { href: "/#so-gehts", label: "So geht's" },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded-lg outline-hidden focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          <Wordmark />
          <span className="sr-only">11vs11 Hub – Startseite</span>
        </Link>

        <nav aria-label="Hauptnavigation" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/#projekte"
            className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden md:hidden"
          >
            Projekt
          </Link>
          <a
            href={fsUrl}
            className="rounded-lg bg-white px-3.5 py-2 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-hidden sm:px-4"
          >
            Jetzt starten
          </a>
        </div>
      </div>
    </header>
  );
}
