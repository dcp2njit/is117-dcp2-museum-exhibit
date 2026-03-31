#!/usr/bin/env node
/**
 * Converts all images in public/media/ to optimized WebP format.
 *
 * - Generated PNGs → WebP at quality 82, max 1600px wide
 * - Wikimedia JPGs → WebP at quality 80, max 960px wide (portrait photos)
 * - Originals are removed after successful conversion
 * - Updates all source references (.ts, .tsx, .md) from old extensions to .webp
 *
 * Usage: node scripts/optimize-images.mjs
 */

import { readdir, readFile, writeFile, unlink, stat } from "node:fs/promises";
import { join, extname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(fileURLToPath(import.meta.url), "../..");
const MEDIA_DIR = join(ROOT, "public/media");

const DIRS = [
  { path: join(MEDIA_DIR, "generated"), maxWidth: 1600, quality: 82 },
  { path: join(MEDIA_DIR, "wikimedia"), maxWidth: 960, quality: 80 },
];

const SOURCE_DIRS = [
  join(ROOT, "lib"),
  join(ROOT, "components"),
  join(ROOT, "docs"),
  join(ROOT, "app"),
];

const IMAGE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

async function collectSourceFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await collectSourceFiles(full)));
    } else if (/\.(ts|tsx|md|mjs)$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeDir({ path: dirPath, maxWidth, quality }) {
  let entries;
  try {
    entries = await readdir(dirPath);
  } catch {
    return [];
  }

  const conversions = [];
  for (const file of entries) {
    const ext = extname(file).toLowerCase();
    if (!IMAGE_EXTS.has(ext)) continue;

    const inputPath = join(dirPath, file);
    const outputName = basename(file, ext) + ".webp";
    const outputPath = join(dirPath, outputName);

    const inputStat = await stat(inputPath);
    const inputSize = inputStat.size;

    await sharp(inputPath)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality })
      .toFile(outputPath);

    const outputStat = await stat(outputPath);
    const outputSize = outputStat.size;
    const ratio = ((1 - outputSize / inputSize) * 100).toFixed(1);

    await unlink(inputPath);

    conversions.push({
      from: file,
      to: outputName,
      inputSize,
      outputSize,
      ratio,
    });

    console.log(
      `  ${file} → ${outputName}  (${(inputSize / 1024).toFixed(0)}KB → ${(outputSize / 1024).toFixed(0)}KB, -${ratio}%)`
    );
  }
  return conversions;
}

async function updateReferences(conversions) {
  const replacements = conversions.map(({ from, to }) => [from, to]);
  if (replacements.length === 0) return;

  const sourceFiles = [];
  for (const dir of SOURCE_DIRS) {
    sourceFiles.push(...(await collectSourceFiles(dir)));
  }

  let updatedCount = 0;
  for (const filePath of sourceFiles) {
    let content = await readFile(filePath, "utf-8");
    let changed = false;
    for (const [oldName, newName] of replacements) {
      if (content.includes(oldName)) {
        content = content.replaceAll(oldName, newName);
        changed = true;
      }
    }
    if (changed) {
      await writeFile(filePath, content, "utf-8");
      updatedCount++;
    }
  }
  console.log(`\nUpdated references in ${updatedCount} source files.`);
}

async function main() {
  console.log("Optimizing images to WebP...\n");

  const allConversions = [];
  for (const dir of DIRS) {
    console.log(`Processing ${dir.path}:`);
    const conversions = await optimizeDir(dir);
    allConversions.push(...conversions);
  }

  const totalInput = allConversions.reduce((s, c) => s + c.inputSize, 0);
  const totalOutput = allConversions.reduce((s, c) => s + c.outputSize, 0);

  console.log(
    `\nTotal: ${(totalInput / 1024 / 1024).toFixed(1)}MB → ${(totalOutput / 1024 / 1024).toFixed(1)}MB (-${((1 - totalOutput / totalInput) * 100).toFixed(1)}%)`
  );

  console.log("\nUpdating source references...");
  await updateReferences(allConversions);

  console.log("\nDone.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
