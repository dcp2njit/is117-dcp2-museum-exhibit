import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";
import smartcrop from "smartcrop-sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workspaceRoot = path.resolve(__dirname, "..");
const outputPath = path.join(workspaceRoot, "lib/generated/image-focus-map.ts");
const sourceRoots = ["app", "components", "lib"];

async function collectSourceFiles(directoryPath) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) {
      continue;
    }

    const entryPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      if (entryPath === path.join(workspaceRoot, "lib/generated")) {
        continue;
      }

      files.push(...(await collectSourceFiles(entryPath)));
      continue;
    }

    if (entry.name.endsWith(".ts") || entry.name.endsWith(".tsx")) {
      files.push(entryPath);
    }
  }

  return files;
}

function extractImageSources(contents) {
  const sources = new Set();

  for (const match of contents.matchAll(/imageUrl:\s*"([^"]+)"/g)) {
    sources.add(match[1]);
  }

  for (const match of contents.matchAll(/src="([^"]+)"/g)) {
    const source = match[1];

    if (source.startsWith("/") || source.startsWith("https://")) {
      sources.add(source);
    }
  }

  return [...sources];
}

async function loadImageBuffer(source) {
  if (source.startsWith("http://") || source.startsWith("https://")) {
    const response = await fetch(source, {
      headers: {
        "user-agent": "is117spec-image-focus-generator",
      },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch ${source}: ${response.status} ${response.statusText}`
      );
    }

    return Buffer.from(await response.arrayBuffer());
  }

  return fs.readFile(
    path.join(workspaceRoot, "public", source.replace(/^\//, ""))
  );
}

function clampPercentage(value) {
  return Math.max(0, Math.min(100, value));
}

function inferSuggestedFit(source, width, height) {
  const normalizedSource = source.toLowerCase();
  const aspectRatio = width / height;
  const brandGraphicPattern = /(open-graph|wordmark|logo|banner|social)/;

  if (brandGraphicPattern.test(normalizedSource) && aspectRatio >= 1.45) {
    return "contain";
  }

  return "cover";
}

function inferOrientation(width, height) {
  const aspectRatio = width / height;

  if (aspectRatio > 1.08) {
    return "landscape";
  }

  if (aspectRatio < 0.92) {
    return "portrait";
  }

  return "square";
}

async function analyzeSource(source) {
  const imageBuffer = await loadImageBuffer(source);
  const metadata = await sharp(imageBuffer).metadata();

  if (!metadata.width || !metadata.height) {
    throw new Error(`Missing dimensions for ${source}`);
  }

  const crop = await smartcrop.crop(imageBuffer, {
    width: Math.min(metadata.width, 960),
    height: Math.min(metadata.height, 720),
    boost: [
      {
        x: metadata.width * 0.18,
        y: metadata.height * 0.1,
        width: metadata.width * 0.64,
        height: metadata.height * 0.58,
        weight: 0.35,
      },
    ],
    ruleOfThirds: true,
  });

  const topCrop = crop.topCrop;
  const focusX = ((topCrop.x + topCrop.width / 2) / metadata.width) * 100;
  const focusY = ((topCrop.y + topCrop.height / 2) / metadata.height) * 100;
  const aspectRatio = Number((metadata.width / metadata.height).toFixed(4));

  return {
    aspectRatio,
    height: metadata.height,
    objectPosition: `${clampPercentage(focusX).toFixed(1)}% ${clampPercentage(focusY).toFixed(1)}%`,
    orientation: inferOrientation(metadata.width, metadata.height),
    sourceKind:
      source.startsWith("http://") || source.startsWith("https://")
        ? "remote"
        : "local",
    suggestedFit: inferSuggestedFit(source, metadata.width, metadata.height),
    width: metadata.width,
  };
}

async function main() {
  const sourceFiles = (
    await Promise.all(
      sourceRoots.map((sourceRoot) =>
        collectSourceFiles(path.join(workspaceRoot, sourceRoot))
      )
    )
  ).flat();
  const fileContents = await Promise.all(
    sourceFiles.map((filePath) => fs.readFile(filePath, "utf8"))
  );
  const sources = [
    ...new Set(fileContents.flatMap(extractImageSources)),
  ].sort();
  const entries = [];

  for (const source of sources) {
    try {
      const focusData = await analyzeSource(source);
      entries.push([source, focusData]);
      console.log(
        `focused ${source} -> ${focusData.objectPosition} (${focusData.suggestedFit})`
      );
    } catch (error) {
      console.warn(
        `focus fallback for ${source}: ${error instanceof Error ? error.message : String(error)}`
      );
      entries.push([
        source,
        {
          aspectRatio: 1,
          height: 0,
          objectPosition: "50% 38%",
          orientation: "square",
          sourceKind:
            source.startsWith("http://") || source.startsWith("https://")
              ? "remote"
              : "local",
          suggestedFit: "cover",
          width: 0,
        },
      ]);
    }
  }

  const output = `export type ImageFocusData = {\n  objectPosition: string;\n  width: number;\n  height: number;\n  aspectRatio: number;\n  orientation: "portrait" | "landscape" | "square";\n  sourceKind: "local" | "remote";\n  suggestedFit: "cover" | "contain";\n};\n\nexport const imageFocusMap: Record<string, ImageFocusData> = ${JSON.stringify(Object.fromEntries(entries), null, 2)};\n`;

  await fs.mkdir(path.dirname(outputPath), { recursive: true });
  await fs.writeFile(outputPath, output, "utf8");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
