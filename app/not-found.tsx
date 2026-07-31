import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
      <p className="font-mono text-sm text-zinc-500">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-zinc-400">
        Diese Seite gibt es nicht (mehr). Zurück zur Startseite und von dort zu
        den beiden Projekten.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
      >
        Zur Startseite
      </Link>
    </main>
  );
}
