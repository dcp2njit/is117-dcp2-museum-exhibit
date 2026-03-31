import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { SiteFooter } from "@/components/site/site-footer";

describe("site footer", () => {
  it("uses route-based return links that match the shared navigation model", () => {
    render(<SiteFooter />);

    expect(
      screen.getByRole("link", { name: /read the seven-era run/i })
    ).toHaveAttribute("href", "/eras/precursors-to-machine-intelligence");

    expect(screen.getByRole("link", { name: /^overview$/i })).toHaveAttribute(
      "href",
      "/"
    );

    expect(screen.getByRole("link", { name: /reading map/i })).toHaveAttribute(
      "href",
      "/reading-maps/intellectual-lineage"
    );

    expect(
      screen.queryByRole("link", { name: /opening chapter/i })
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: /seven eras/i, hidden: false })
    ).toBeInTheDocument();
  });
});
