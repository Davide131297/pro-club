import {
  Gift,
  Handshake,
  MessagesSquare,
  Smartphone,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Gift,
    title: "Komplett kostenlos",
    text: "Keine Gebühren, keine Premium-Stufen. Beide Projekte sind frei nutzbar.",
  },
  {
    icon: MessagesSquare,
    title: "Discord im Zentrum",
    text: "Login über Discord und ein Bot, der Spiele und Ergebnisse direkt in euren Server bringt.",
  },
  {
    icon: Smartphone,
    title: "Für unterwegs gebaut",
    text: "Mobile First entwickelt – funktioniert am Handy genauso gut wie am Desktop.",
  },
  {
    icon: Handshake,
    title: "Aus der Community",
    text: "Entstanden aus dem Alltag von Pro Clubs Teams, nicht am Reißbrett.",
  },
  {
    icon: ShieldCheck,
    title: "Fair Play zuerst",
    text: "Ergebnisse werden gegenseitig bestätigt, Meldungen brauchen einen echten Account.",
  },
  {
    icon: Sparkles,
    title: "Wird weiterentwickelt",
    text: "Neue Funktionen kommen regelmäßig dazu – Feedback aus der Community fließt direkt ein.",
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-b border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Warum 11vs11 Hub
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Gebaut für Teams, die regelmäßig spielen
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition-colors hover:border-zinc-700 sm:p-6"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-lg border border-zinc-800 bg-black">
                  <Icon className="size-4.5 text-zinc-300" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {feature.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
