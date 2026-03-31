"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="shell page-stack">
      <section className="placeholder-block">
        <p className="placeholder-eyebrow">Application error</p>
        <h1 className="placeholder-title">Something went wrong</h1>
        <p className="placeholder-copy">{error.message || "An unexpected error occurred."}</p>
        <div className="hero-actions">
          <button className="button-link button-link--primary" onClick={reset} type="button">
            Try again
          </button>
        </div>
      </section>
    </main>
  );
}