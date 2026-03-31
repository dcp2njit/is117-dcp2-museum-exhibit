import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import PeopleAndInstitutionsPage from "@/app/people-and-institutions/page";

describe("people and institutions page", () => {
  it("renders the dedicated narrative index with people, institutions, and source anchors", () => {
    render(<PeopleAndInstitutionsPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /who carries the story/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /grouped figures, not one flat roster/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByText(/builders and deployers/i)).toBeInTheDocument();

    expect(
      screen.getByText(/public interpreters of the stack/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/safety and alignment voices/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /where the public era becomes organizational/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /earlier source anchors kept in view/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /andrej karpathy/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /^openai$/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 3,
        name: /dartmouth proposal and naming moment/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /github/i }).length
    ).toBeGreaterThan(0);
    expect(screen.getAllByRole("img").length).toBeGreaterThan(2);
  });
});
