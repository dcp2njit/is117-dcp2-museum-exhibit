import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";

describe("sitemap", () => {
  it("includes all known routes", () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);

    expect(urls.some((u) => u.endsWith("localhost:3000"))).toBe(true);
    expect(urls.some((u) => u.includes("/people-and-institutions"))).toBe(true);
    expect(
      urls.some((u) => u.includes("/eras/precursors-to-machine-intelligence"))
    ).toBe(true);
    expect(
      urls.some((u) => u.includes("/eras/foundation-models-and-generative-ai"))
    ).toBe(true);
    expect(entries.length).toBeGreaterThanOrEqual(11);
  });
});
