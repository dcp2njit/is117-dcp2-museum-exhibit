import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SiteHeader } from "@/components/site/site-header";

let mockPathname = "/";

vi.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
}));

describe("site header", () => {
  beforeEach(() => {
    mockPathname = "/";
    window.history.replaceState({}, "", "/");
  });

  it("uses durable main navigation and homepage-only section links", async () => {
    window.history.replaceState({}, "", "/#home-chronology");

    render(<SiteHeader />);

    expect(screen.getByRole("link", { name: /seven eras/i })).toHaveAttribute(
      "href",
      "/eras/precursors-to-machine-intelligence"
    );

    expect(
      screen.getByRole("navigation", { name: /homepage sections/i })
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByRole("link", { name: /timeline/i })).toHaveAttribute(
        "aria-current",
        "location"
      );
    });

    expect(screen.getByRole("link", { name: /seven eras/i })).toHaveAttribute(
      "aria-current",
      "page"
    );
  });

  it("highlights the active route and hides homepage section links off the homepage", () => {
    mockPathname = "/people-and-institutions";
    window.history.replaceState({}, "", "/people-and-institutions");

    render(<SiteHeader />);

    expect(
      screen.queryByRole("navigation", { name: /homepage sections/i })
    ).not.toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /people & institutions/i })
    ).toHaveAttribute("aria-current", "page");
  });

  it("opens the mobile navigation dialog from the menu trigger", async () => {
    mockPathname = "/people-and-institutions";
    window.history.replaceState({}, "", "/people-and-institutions");

    render(<SiteHeader />);

    fireEvent.click(
      screen.getByRole("button", { name: /open navigation menu/i })
    );

    expect(
      await screen.findByRole("dialog", { name: /site navigation/i })
    ).toBeInTheDocument();

    expect(
      screen.getAllByRole("link", { name: /people & institutions/i })[0]
    ).toHaveAttribute("aria-current", "page");
  });
});
