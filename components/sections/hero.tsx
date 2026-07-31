import { ArrowRight, ShieldAlert, Swords } from "lucide-react";

import { blacklistUrl, fsUrl } from "@/lib/site";

const highlights = [
  "Kostenlos",
  "Ohne Download",
  "Login per Discord",
  "Web & Mobil",
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-800">
      {/* Weicher Farbverlauf hinter dem Hero, rein dekorativ. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[32rem] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.28),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[3rem_3rem] [mask-image:radial-gradient(60%_50%_at_50%_0%,black,transparent)]"
      />

      <div className="mx-auto w-full max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-3 py-1 font-mono text-xs tracking-wide text-zinc-300 uppercase">
            <span className="size-1.5 rounded-full bg-blue-500" />
            EA FC · Pro Clubs
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Alles für deinen Pro Club.
            <span className="block bg-linear-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              An einem Ort.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-pretty text-zinc-400 sm:mt-6 sm:text-lg">
            11vs11 Hub ist die Startseite für zwei Community-Projekte rund um
            den Pro Clubs Modus in EA FC: Freundschaftsspiele organisieren und
            unfaire Mitspieler im Blick behalten.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">
            <a
              href={fsUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-hidden"
            >
              <Swords className="size-4" aria-hidden="true" />
              Freundschaftsspiele finden
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={blacklistUrl}
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-600 hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:outline-hidden"
            >
              <ShieldAlert className="size-4" aria-hidden="true" />
              Blacklist ansehen
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-zinc-500 sm:text-sm">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-zinc-600" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
