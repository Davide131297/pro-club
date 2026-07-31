import type { Metadata } from "next";

import { blacklistUrl, fsUrl, hostOf, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung für ${site.domain}.`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8">
        <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Datenschutzerklärung
        </h1>
        <p className="mt-2 text-sm text-zinc-400">
          Diese Erklärung gilt für die Startseite {site.domain}. Für die
          Unterprojekte auf {hostOf(fsUrl)} und {hostOf(blacklistUrl)} gelten
          die dort hinterlegten Datenschutzerklärungen.
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-zinc-300">
          <section>
            <h2 className="text-base font-semibold text-white">
              1. Verantwortlicher
            </h2>
            <address className="mt-2 space-y-1 text-zinc-400 not-italic">
              <p>Davide Chiffi</p>
              <p>c/o Autorenglück #77263</p>
              <p>Albert-Einstein-Straße 47</p>
              <p>02977 Hoyerswerda</p>
              <p>
                E-Mail:{" "}
                <a
                  href={`mailto:${site.contactEmail}`}
                  className="text-white underline decoration-zinc-600 underline-offset-4 hover:decoration-white"
                >
                  {site.contactEmail}
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white">
              2. Umfang der Verarbeitung
            </h2>
            <p className="mt-2 text-zinc-400">
              Diese Startseite ist eine reine Informationsseite. Es gibt kein
              Nutzerkonto, kein Kontaktformular und keine Kommentarfunktion. Es
              werden keine Cookies gesetzt, die nicht technisch notwendig sind,
              und es findet keine Analyse deines Verhaltens statt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white">
              3. Server-Logfiles beim Hosting
            </h2>
            <p className="mt-2 text-zinc-400">
              Beim Aufruf der Seite verarbeitet unser Hosting-Dienstleister
              technisch notwendige Zugriffsdaten, insbesondere IP-Adresse,
              Datum und Uhrzeit des Zugriffs, aufgerufene Adresse, Referrer
              sowie Browser- und Betriebssystemangaben. Diese Daten sind
              erforderlich, um die Seite auszuliefern, ihre Stabilität zu
              gewährleisten und Missbrauch abzuwehren. Rechtsgrundlage ist Art.
              6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren
              und störungsfreien Betrieb). Die Daten werden nur kurzfristig
              gespeichert und nicht mit anderen Datenquellen zusammengeführt.
            </p>
            <p className="mt-2 text-zinc-400">
              Hosting-Dienstleister ist Vercel Inc., 440 N Barranca Ave #4133,
              Covina, CA 91723, USA. Mit Vercel besteht ein Vertrag zur
              Auftragsverarbeitung; die Übermittlung in die USA wird auf
              Standardvertragsklauseln gestützt.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white">
              4. Schriftarten
            </h2>
            <p className="mt-2 text-zinc-400">
              Die verwendeten Schriftarten (Geist) werden beim Build-Vorgang
              lokal eingebunden und von unserem eigenen Server ausgeliefert. Es
              besteht dadurch keine Verbindung zu Google-Servern.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white">
              5. Externe Links
            </h2>
            <p className="mt-2 text-zinc-400">
              Diese Seite verlinkt auf unsere Unterprojekte ({hostOf(fsUrl)},{" "}
              {hostOf(blacklistUrl)}) sowie auf externe Angebote wie Discord.
              Erst beim Klick auf einen solchen Link werden Daten an den
              jeweiligen Anbieter übertragen. Auf deren Verarbeitung haben wir
              keinen Einfluss; es gelten die Datenschutzhinweise des jeweiligen
              Anbieters.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white">
              6. Deine Rechte
            </h2>
            <p className="mt-2 text-zinc-400">
              Du hast das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art.
              16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der
              Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20
              DSGVO) sowie das Recht, einer Verarbeitung auf Grundlage
              berechtigter Interessen zu widersprechen (Art. 21 DSGVO). Wende
              dich dafür an die oben genannte E-Mail-Adresse.
            </p>
            <p className="mt-2 text-zinc-400">
              Außerdem steht dir ein Beschwerderecht bei einer
              Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-white">
              7. Änderungen dieser Erklärung
            </h2>
            <p className="mt-2 text-zinc-400">
              Wir passen diese Datenschutzerklärung an, sobald sich der
              Funktionsumfang der Seite oder die Rechtslage ändert. Es gilt
              jeweils die hier veröffentlichte Fassung.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
