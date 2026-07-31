import { Plus } from "lucide-react";

export const faqItems = [
  {
    question: "Was ist 11vs11 Hub?",
    answer:
      "11vs11 Hub ist die Startseite für zwei Community-Projekte rund um den Pro Clubs Modus in EA FC. Von hier kommst du zu Pro Club FS für Freundschaftsspiele und zur Pro Clubs Blacklist für gemeldete Spieler.",
  },
  {
    question: "Kostet die Nutzung etwas?",
    answer:
      "Nein. Beide Projekte sind kostenlos nutzbar. Es gibt keine Bezahlfunktionen und keine Abos.",
  },
  {
    question: "Brauche ich einen Account?",
    answer:
      "Zum Stöbern nicht. Für eigene Teams und Spielanfragen brauchst du einen Account bei Pro Club FS, für Meldungen und Einsprüche auf der Blacklist einen Discord-Login.",
  },
  {
    question: "Für welche Plattformen ist das gedacht?",
    answer:
      "Für alle. Ihr spielt EA FC auf PlayStation, Xbox oder PC – organisiert wird im Browser, am Handy genauso wie am Rechner.",
  },
  {
    question: "Wie wird verhindert, dass Spieler zu Unrecht gemeldet werden?",
    answer:
      "Melden geht nur mit Discord-Login, damit hinter jeder Meldung ein echter Account steht. Wer gelistet ist, kann Einspruch einlegen. Zusätzlich wird auf wiederkehrende Muster hingewiesen, wenn ein Spieler mehrfach aus demselben Grund gemeldet wird.",
  },
  {
    question: "Ist das ein offizielles Angebot von EA?",
    answer:
      "Nein. Es handelt sich um ein privates Community-Projekt ohne Verbindung zu Electronic Arts. EA FC und Pro Clubs sind Marken von Electronic Arts Inc.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
          FAQ
        </h2>
        <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
          Häufige Fragen
        </p>

        <div className="mt-8 max-w-3xl divide-y divide-zinc-800 border-y border-zinc-800">
          {faqItems.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium marker:content-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-hidden">
                {item.question}
                <Plus
                  className="size-4 shrink-0 text-zinc-500 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-zinc-400">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
