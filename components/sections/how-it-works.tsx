import { fsUrl } from "@/lib/site";

const steps = [
  {
    title: "Team anlegen",
    text: "Meldet euch bei Pro Club FS an, erstellt euer Team und ladet eure Mitspieler dazu.",
    href: fsUrl,
    linkLabel: "Team erstellen",
  },
  {
    title: "Gegner finden",
    text: "Tragt eure Wunschzeiten ein oder stellt eine direkte Spielanfrage. Passende Gegner findet ihr über die automatische Spielsuche.",
    href: fsUrl,
    linkLabel: "Spiel suchen",
  },
  {
    title: "Ergebnis melden",
    text: "Nach dem Spiel tragt ihr das Ergebnis ein. Beide Teams bestätigen es, danach fließt es in die Gesamttabelle ein.",
    href: fsUrl,
    linkLabel: "Tabelle ansehen",
  },
];

export function HowItWorks() {
  return (
    <section id="so-gehts" className="scroll-mt-20 border-b border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            So geht&apos;s
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            In drei Schritten zum nächsten Spiel
          </p>
        </div>

        <ol className="mt-10 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-7"
            >
              <span className="font-mono text-sm text-zinc-600">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {step.text}
              </p>
              <a
                href={step.href}
                className="mt-4 inline-block text-sm font-medium text-blue-400 underline-offset-4 transition-colors hover:text-blue-300 hover:underline"
              >
                {step.linkLabel} →
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
