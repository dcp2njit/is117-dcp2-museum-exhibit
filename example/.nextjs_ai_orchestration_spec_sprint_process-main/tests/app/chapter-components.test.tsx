import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import {
  ChapterHero,
  EditorialAside,
  PullQuote,
  TransitionBlock,
} from "@/components/content/chapter";

describe("chapter components", () => {
  it("renders the shared chapter hero, aside, and transition patterns", () => {
    render(
      <div>
        <ChapterHero
          eyebrow="Test chapter"
          period="Era X"
          title="Shared Reading System"
          lede="A reusable hero for long-form routes."
          links={[{ href: "/next", label: "Next step" }]}
        >
          <p>Chapter body content.</p>
          <EditorialAside label="Aside" title="Secondary framing">
            <p>Context that should remain visually distinct.</p>
          </EditorialAside>
        </ChapterHero>

        <TransitionBlock
          eyebrow="Next"
          title="Move forward"
          description="The chapter should end with a visible handoff."
          href="/forward"
          linkLabel="Continue"
        />

        <PullQuote
          quote="A field is easier to read when each chapter hands the next one a clear problem."
          attribution="Repository editorial guidance"
          source="Chapter reading system"
        />
      </div>
    );

    expect(
      screen.getByRole("heading", { level: 1, name: /shared reading system/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/secondary framing/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /next step/i })).toHaveAttribute(
      "href",
      "/next"
    );
    expect(screen.getByText(/move forward/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /continue/i })).toHaveAttribute(
      "href",
      "/forward"
    );
    expect(
      screen.getByText(
        /a field is easier to read when each chapter hands the next one a clear problem/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/repository editorial guidance/i)
    ).toBeInTheDocument();
  });
});
