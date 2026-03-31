import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import EmbeddingsLatentSpaceAndLlmMathPage from "@/app/guides/embeddings-latent-space-and-llm-math/page";
import IntellectualLineageReadingMapPage from "@/app/reading-maps/intellectual-lineage/page";

describe("learning bridges", () => {
  it("renders the intellectual lineage reading map", () => {
    render(<IntellectualLineageReadingMapPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /intellectual lineage and key papers/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /seven eras through their decisive texts/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /alan turing, on computable numbers/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /attention is all you need/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /safety and interpretability thread/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /capability, deployment, and understanding do not move together/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /one modern thread through six turning points/i,
      })
    ).toBeInTheDocument();
    expect(screen.getAllByText(/connects forward:/i).length).toBeGreaterThan(5);
  });

  it("renders the embeddings and latent-space math guide", () => {
    render(<EmbeddingsLatentSpaceAndLlmMathPage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /embeddings, latent space, and the minimum llm math/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /three ideas do most of the work/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/similarity is a geometric comparison/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/embeddings are coordinates, not hidden meanings/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/latent space is a teaching map, not a literal atlas/i)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /see the neighborhood story instead of only reading it/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByAltText(
        /conceptual latent-space landscape illustration showing warm clustered semantic neighborhoods/i
      )
    ).toBeInTheDocument();
  });
});
