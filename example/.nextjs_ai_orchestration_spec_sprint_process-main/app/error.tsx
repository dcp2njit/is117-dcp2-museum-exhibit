"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="page-shell">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="font-(family-name:--font-display) text-2xl tracking-tight text-foreground">
          Something went wrong
        </h2>
        <p className="mt-3 text-(--ink-72) text-sm leading-6">
          {error.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={reset}
          className="mt-6 inline-flex items-center rounded-md bg-[rgba(34,24,18,0.94)] px-5 py-3 text-sm font-semibold text-white hover:bg-(--accent-strong)"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
