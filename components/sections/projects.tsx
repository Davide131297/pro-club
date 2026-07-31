import {
  ArrowUpRight,
  BellRing,
  Bot,
  CalendarClock,
  Check,
  Gavel,
  ListChecks,
  Search,
  ShieldAlert,
  Swords,
  Table2,
  Users,
} from "lucide-react";
import type { ComponentType } from "react";

import { blacklistUrl, fsUrl, hostOf } from "@/lib/site";

type Project = {
  name: string;
  href: string;
  tag: string;
  summary: string;
  icon: ComponentType<{ className?: string }>;
  features: { icon: ComponentType<{ className?: string }>; text: string }[];
  cta: string;
  accent: {
    ring: string;
    glow: string;
    chip: string;
    icon: string;
  };
};

const projects: Project[] = [
  {
    name: "Pro Club FS",
    href: fsUrl,
    tag: "Freundschaftsspiele & Liga",
    summary:
      "Legt euer Team an, findet Gegner für eure Wunschzeiten, meldet Ergebnisse und verfolgt die Gesamttabelle – alles an einem Ort.",
    icon: Swords,
    features: [
      { icon: Users, text: "Team anlegen, Kader und Rollen verwalten" },
      { icon: Search, text: "Automatische Gegnersuche für eure Zeitfenster" },
      { icon: CalendarClock, text: "Spielanfragen stellen und Termine planen" },
      { icon: Table2, text: "Gesamttabelle und Teamstatistiken" },
      { icon: Bot, text: "Discord-Bot für Suche, Ergebnisse und Tabelle" },
      { icon: BellRing, text: "Benachrichtigungen im Web und auf dem Handy" },
    ],
    cta: "Zu Pro Club FS",
    accent: {
      ring: "hover:border-blue-500/50",
      glow: "bg-blue-500/10",
      chip: "border-blue-500/30 bg-blue-500/10 text-blue-300",
      icon: "text-blue-400",
    },
  },
  {
    name: "Pro Clubs Blacklist",
    href: blacklistUrl,
    tag: "Fair Play & Meldungen",
    summary:
      "Die Community-Liste für Spieler, die negativ auffallen. Gemeldet wird nur mit Discord-Login – hinter jeder Meldung steht ein echter Account.",
    icon: ShieldAlert,
    features: [
      { icon: ListChecks, text: "Öffentliche, durchsuchbare Liste" },
      { icon: Users, text: "Spieler mit Begründung melden" },
      { icon: Bot, text: "Discord-Login gegen Fake-Meldungen" },
      { icon: Gavel, text: "Einspruch für zu Unrecht gelistete Spieler" },
      { icon: Search, text: "Hinweis auf wiederkehrende Muster" },
      { icon: BellRing, text: "Sortiert nach Anzahl der Meldungen" },
    ],
    cta: "Zur Blacklist",
    accent: {
      ring: "hover:border-rose-500/50",
      glow: "bg-rose-500/10",
      chip: "border-rose-500/30 bg-rose-500/10 text-rose-300",
      icon: "text-rose-400",
    },
  },
];

export function Projects() {
  return (
    <section id="projekte" className="scroll-mt-20 border-b border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-mono text-xs font-semibold tracking-wider text-zinc-500 uppercase">
            Die Projekte
          </h2>
          <p className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Zwei Tools, ein Ziel: bessere Pro Clubs Spiele
          </p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Jedes Projekt läuft auf einer eigenen Subdomain und lässt sich
            unabhängig nutzen. Beide sind kostenlos und laufen direkt im
            Browser.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.name}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 transition-colors sm:p-8 ${project.accent.ring}`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-24 -right-24 size-56 rounded-full blur-3xl ${project.accent.glow}`}
                />

                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl border border-zinc-800 bg-black">
                    <Icon
                      className={`size-5 ${project.accent.icon}`}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide ${project.accent.chip}`}
                  >
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight sm:text-2xl">
                  {project.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-zinc-500">
                  {hostOf(project.href)}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                  {project.summary}
                </p>

                <ul className="mt-6 grid gap-3">
                  {project.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-zinc-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-zinc-300">
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <a
                    href={project.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-hidden sm:w-auto"
                  >
                    {project.cta}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
