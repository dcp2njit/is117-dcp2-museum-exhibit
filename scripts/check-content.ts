import { getContentIntegrityIssues } from "../lib/content/integrity";
import { eraRecords } from "../lib/content/site-content";
import { sourceRecords } from "../lib/content/sources";

const issues = getContentIntegrityIssues();

if (issues.length > 0) {
  console.error("Content integrity check failed.\n");

  for (const issue of issues) {
    console.error(`- ${issue}`);
  }

  process.exit(1);
}

console.log(
  `Content integrity passed for ${eraRecords.length} eras and ${sourceRecords.length} sources.`,
);