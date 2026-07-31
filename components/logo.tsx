import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-blue-500 to-blue-700 text-[13px] font-bold tracking-tight text-white shadow-lg shadow-blue-600/20",
        className,
      )}
      aria-hidden="true"
    >
      11
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Logo />
      <span className="text-base font-semibold tracking-tight">
        11vs11 <span className="text-zinc-400">Hub</span>
      </span>
    </span>
  );
}
