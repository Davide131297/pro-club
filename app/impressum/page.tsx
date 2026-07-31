import type { Metadata } from "next";
import { FileText, Mail, MapPin, User } from "lucide-react";

import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum von ${site.domain}. Angaben gemäß § 5 DDG.`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-6">
          <FileText className="size-7 shrink-0" aria-hidden="true" />
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Impressum
            </h1>
            <p className="mt-1 text-sm text-zinc-400">
              Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
            </p>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <section className="flex items-start gap-3">
            <User className="mt-0.5 size-5 shrink-0 text-zinc-500" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Diensteanbieter
              </h2>
              <p className="mt-1 font-medium">Davide Chiffi</p>
            </div>
          </section>

          <section className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-zinc-500" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Anschrift
              </h2>
              <address className="mt-1 space-y-1 font-medium not-italic">
                <p>c/o Autorenglück #77263</p>
                <p>Albert-Einstein-Straße 47</p>
                <p>02977 Hoyerswerda</p>
              </address>
            </div>
          </section>

          <section className="flex items-start gap-3">
            <Mail className="mt-0.5 size-5 shrink-0 text-zinc-500" aria-hidden="true" />
            <div>
              <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
                Kontakt
              </h2>
              <p className="mt-1 text-sm">
                <span className="text-zinc-400">E-Mail: </span>
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="font-medium underline decoration-zinc-600 underline-offset-4 transition-colors hover:decoration-white"
                >
                  {site.contactEmail}
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
              Verantwortlich für den Inhalt
            </h2>
            <p className="mt-1 text-sm text-zinc-300">
              Davide Chiffi, Anschrift wie oben.
            </p>
          </section>
        </div>

        <div className="mt-8 space-y-4 border-t border-zinc-800 pt-6 text-xs leading-relaxed text-zinc-400">
          <p>
            Plattform-Streitschlichtung: Die Europäische Kommission stellt eine
            Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>{" "}
            finden. Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
            bereit.
          </p>
          <p>
            Haftung für Links: Diese Website verlinkt auf eigene Unterprojekte
            sowie auf externe Angebote. Für die Inhalte verlinkter externer
            Seiten sind ausschließlich deren Betreiber verantwortlich.
          </p>
          <p>
            {site.name} ist ein privates Community-Projekt und steht in keiner
            Verbindung zu Electronic Arts Inc. EA FC und Pro Clubs sind Marken
            von Electronic Arts Inc.
          </p>
        </div>
      </div>
    </main>
  );
}
