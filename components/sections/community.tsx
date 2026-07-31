import { MessagesSquare } from "lucide-react";

import { site } from "@/lib/site";

export function Community() {
  return (
    <section className="border-b border-zinc-800">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/2 size-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-6 sm:items-center sm:text-center">
            <span className="inline-flex size-11 items-center justify-center rounded-xl border border-zinc-800 bg-black">
              <MessagesSquare
                className="size-5 text-indigo-400"
                aria-hidden="true"
              />
            </span>

            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Komm in die Community
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-400 sm:mx-auto sm:text-base">
                Gegner suchen, Fragen stellen, Bugs melden oder Ideen für neue
                Funktionen einbringen – auf unserem Discord läuft alles
                zusammen.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={site.discordUrl}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black focus-visible:outline-hidden"
              >
                Discord beitreten
              </a>
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-600 hover:bg-zinc-900 focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:outline-hidden"
              >
                E-Mail schreiben
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
