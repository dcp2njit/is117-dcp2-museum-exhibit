import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

export type MarkdownDocument<TFrontmatter> = {
  content: string;
  data: TFrontmatter;
  filePath: string;
};

export function readMarkdownDocument<TFrontmatter>(
  relativePath: string
): MarkdownDocument<TFrontmatter> {
  const filePath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing markdown document: ${relativePath}`);
  }

  const source = fs.readFileSync(filePath, "utf8");
  const document = matter(source);

  if (
    !document.data ||
    typeof document.data !== "object" ||
    Array.isArray(document.data)
  ) {
    throw new Error(
      `Invalid frontmatter in markdown document: ${relativePath}`
    );
  }

  return {
    content: document.content.trim(),
    data: document.data as TFrontmatter,
    filePath,
  };
}
