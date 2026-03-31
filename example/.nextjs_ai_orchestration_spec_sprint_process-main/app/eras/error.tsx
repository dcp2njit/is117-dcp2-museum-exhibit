"use client";

import Link from "next/link";

export default function ErasError({
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
          This era couldn&apos;t load
        </h2>
        <p className="mt-3 text-(--ink-72) text-sm leading-6">
          {error.message ||
            "An unexpected error occurred while loading this era."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center rounded-md bg-[rgba(34,24,18,0.94)] px-5 py-3 text-sm font-semibold text-white hover:bg-(--accent-strong)"
          >
            Try again
          </button>
          <Link
            href="/"
            className="text-sm font-semibold text-(--accent-strong) hover:underline"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}
