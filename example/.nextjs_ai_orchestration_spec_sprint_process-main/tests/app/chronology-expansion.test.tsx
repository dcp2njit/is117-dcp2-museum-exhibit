import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ComputationInformationFieldFormationPage from "@/app/eras/computation-information-field-formation/page";
import PrecursorsToMachineIntelligencePage from "@/app/eras/precursors-to-machine-intelligence/page";

describe("chronology expansion", () => {
  it("renders the adjacent Era 1 package and its handoff into Era 2", () => {
    render(<PrecursorsToMachineIntelligencePage />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /precursors to machine intelligence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /continue to era 2: computation, information, and field formation/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(/formal logic to computability/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /key texts and archives/i,
      })
    ).toBeInTheDocument();
  });

  it("adds explicit adjacent-era navigation to the existing Era 2 route", () => {
    render(<ComputationInformationFieldFormationPage />);

    expect(
      screen.getByRole("link", {
        name: /back to era 1: precursors to machine intelligence/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", {
        name: /continue to era 3: symbolic optimism and early ai programs/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /why dartmouth is a meeting point, not a lone origin/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /turing makes dartmouth possible without causing it alone/i
      )
    ).toBeInTheDocument();
  });
});
