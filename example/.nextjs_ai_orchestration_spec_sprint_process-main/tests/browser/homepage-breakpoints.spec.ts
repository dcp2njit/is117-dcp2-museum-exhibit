import { expect, test } from "@playwright/test";

const reviewViewports = [
  { label: "mobile-390", width: 390, height: 844 },
  { label: "tablet-768", width: 768, height: 1024 },
  { label: "tablet-1024", width: 1024, height: 1280 },
  { label: "laptop-1280", width: 1280, height: 1400 },
  { label: "desktop-1440", width: 1440, height: 1400 },
  { label: "desktop-1728", width: 1728, height: 1400 },
] as const;

async function assertShellLandmarks(page: import("@playwright/test").Page) {
  await expect(page.locator("header")).toHaveCount(1);
  await expect(page.locator("main")).toHaveCount(1);
  await expect(page.locator("footer")).toHaveCount(1);
  await expect(page.locator("nav")).toHaveCount(2);
}

for (const viewport of reviewViewports) {
  test(`homepage breakpoint audit ${viewport.label}`, async ({
    page,
  }, testInfo) => {
    const consoleWarnings: string[] = [];

    page.on("console", (message) => {
      if (message.type() === "warning") {
        consoleWarnings.push(message.text());
      }
    });

    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });
    await page.goto("/");

    await assertShellLandmarks(page);

    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /history of artificial intelligence/i,
      })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: /seven turns that built modern ai/i,
      })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: /branch without breaking the argument/i,
      })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: /enter through scenes, texts, and institutions/i,
      })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", {
        level: 2,
        name: /leave with the whole argument intact/i,
      })
    ).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1
    );

    expect(hasHorizontalOverflow).toBe(false);
    expect(consoleWarnings).toEqual([]);

    if (viewport.width === 390) {
      const touchTargets = await Promise.all([
        page.getByRole("link", { name: /start with era 1/i }).boundingBox(),
        page
          .getByRole("link", { name: /read straight through from era 1/i })
          .boundingBox(),
      ]);

      for (const box of touchTargets) {
        expect(box).not.toBeNull();
        expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
      }
    }

    if (viewport.width >= 1280) {
      const openingVisualGroups = await page
        .locator("#home-opening > div")
        .first()
        .locator("xpath=./div[2]/div")
        .evaluate((element) =>
          Array.from(element.children).map((child) => {
            const rect = child.getBoundingClientRect();

            return {
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              left: Math.round(rect.left),
              top: Math.round(rect.top),
            };
          })
        );

      expect(openingVisualGroups).toHaveLength(2);
      expect(openingVisualGroups[0].height).toBeGreaterThanOrEqual(
        openingVisualGroups[1].height - 2
      );
      expect(
        Math.abs(openingVisualGroups[0].top - openingVisualGroups[1].top)
      ).toBeLessThanOrEqual(1);

      const chronologyHeaderWidths = await page
        .locator("#home-chronology > div > div")
        .first()
        .evaluate((element) =>
          Array.from(element.children).map((child) =>
            Math.round(child.getBoundingClientRect().width)
          )
        );

      expect(chronologyHeaderWidths).toHaveLength(2);
      expect(chronologyHeaderWidths[1]).toBeGreaterThan(
        chronologyHeaderWidths[0]
      );

      const chronologyCardWidths = await page
        .locator("#home-chronology .carousel-touch")
        .evaluate((element) =>
          Array.from(element.children)
            .filter((child) => !child.classList.contains("carousel-progress"))
            .map((child) => Math.round(child.getBoundingClientRect().width))
        );

      expect(chronologyCardWidths).toHaveLength(7);
      expect(
        Math.max(...chronologyCardWidths) - Math.min(...chronologyCardWidths)
      ).toBeLessThanOrEqual(1);

      const chronologyLedgerWidths = await page
        .locator("#home-chronology > div > div")
        .first()
        .locator("xpath=./div[2]")
        .evaluate((element) =>
          Array.from(element.children).map((child) =>
            Math.round(child.getBoundingClientRect().width)
          )
        );

      expect(chronologyLedgerWidths).toHaveLength(3);
      expect(
        Math.max(...chronologyLedgerWidths) -
          Math.min(...chronologyLedgerWidths)
      ).toBeLessThanOrEqual(1);

      const scenesHeaderChildren = await page
        .locator("#home-scenes > div")
        .first()
        .evaluate((element) => element.children.length);

      expect(scenesHeaderChildren).toBe(1);

      const readingModelZoneWidths = await page
        .locator("#home-reading-model > div")
        .first()
        .evaluate((element) =>
          Array.from(element.children).map((child) =>
            Math.round(child.getBoundingClientRect().width)
          )
        );

      expect(readingModelZoneWidths).toHaveLength(2);
      expect(readingModelZoneWidths[1]).toBeGreaterThan(
        readingModelZoneWidths[0]
      );

      const readingModelEvidence = page
        .locator("#home-reading-model > div")
        .first()
        .locator("xpath=./div")
        .nth(1);
      const readingModelEvidenceDisplay = await readingModelEvidence.evaluate(
        (element) => getComputedStyle(element).display
      );
      expect(readingModelEvidenceDisplay).toBe("grid");

      const scenesDesktopGroups = await page
        .locator("#home-scenes > div")
        .nth(1)
        .evaluate((element) =>
          Array.from(element.children).map((child) => {
            const rect = child.getBoundingClientRect();

            return {
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              left: Math.round(rect.left),
              top: Math.round(rect.top),
            };
          })
        );

      expect(scenesDesktopGroups).toHaveLength(2);
      expect(scenesDesktopGroups[1].width).toBeGreaterThan(
        scenesDesktopGroups[0].width
      );
      expect(
        Math.abs(scenesDesktopGroups[0].top - scenesDesktopGroups[1].top)
      ).toBeLessThanOrEqual(1);
      expect(scenesDesktopGroups[1].left).toBeGreaterThan(
        scenesDesktopGroups[0].left
      );
      expect(
        scenesDesktopGroups[1].height - scenesDesktopGroups[0].height
      ).toBeLessThanOrEqual(500);

      const scenesRightGridChildren = await page
        .locator("#home-scenes > div")
        .nth(1)
        .locator("xpath=./div[2]")
        .evaluate((element) =>
          Array.from(element.children).map((child) => {
            const rect = child.getBoundingClientRect();

            return {
              width: Math.round(rect.width),
              height: Math.round(rect.height),
              left: Math.round(rect.left),
              top: Math.round(rect.top),
            };
          })
        );

      expect(scenesRightGridChildren).toHaveLength(4);
      const scenesRightGridTops = [
        ...new Set(scenesRightGridChildren.map((child) => child.top)),
      ].sort((a, b) => a - b);
      const scenesRightGridWidths = scenesRightGridChildren.map(
        (child) => child.width
      );
      const scenesRightGridRowCounts = scenesRightGridTops.map(
        (top) =>
          scenesRightGridChildren.filter((child) => child.top === top).length
      );

      expect(scenesRightGridTops).toHaveLength(2);
      expect(scenesRightGridRowCounts).toEqual([2, 2]);
      expect(Math.max(...scenesRightGridWidths)).toBeGreaterThan(
        Math.min(...scenesRightGridWidths)
      );
      expect(scenesRightGridTops[1]).toBeGreaterThan(scenesRightGridTops[0]);

      const footerQuickReturn = page.locator(
        'footer [aria-label="Quick return links"]'
      );
      await expect(footerQuickReturn).toHaveCount(1);

      const footerColumns = await page
        .locator("footer > div > div")
        .nth(1)
        .evaluate((element) =>
          Array.from(element.children).map((child) => child.tagName)
        );

      expect(footerColumns).toHaveLength(3);
    }

    await page.screenshot({
      path: testInfo.outputPath(`${viewport.label}.png`),
      fullPage: true,
    });
  });
}
