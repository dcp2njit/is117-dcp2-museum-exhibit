import { describe, expect, it } from "vitest";

import { getHomePageContent } from "@/lib/content/homepage";

describe("homepage content loader", () => {
  it("loads homepage content from repository markdown and resolves key assets", () => {
    const homepage = getHomePageContent();

    expect(homepage.opening.titleLines).toEqual([
      "History of",
      "Artificial",
      "Intelligence",
    ]);
    expect(homepage.opening.heroFeature.title).toMatch(
      /Babbage designs the engine/i
    );
    expect(homepage.opening.heroFeature.imageUrl).toBeTruthy();
    expect(homepage.opening.primaryRoutes[0]?.title).toBe(
      "Take the seven-era tour"
    );
    expect(homepage.readingModel.promptBlock.prompts).toEqual([
      "Sequence",
      "Proof",
      "Actors",
      "Mechanism",
    ]);
    expect(homepage.scenes.featureEntry.title).toBe(
      "The machine question comes first."
    );
    expect(homepage.scenes.supportEntries).toHaveLength(4);
    expect(homepage.editorialNotesMarkdown).toMatch(
      /repository-managed markdown/i
    );
  });
});
