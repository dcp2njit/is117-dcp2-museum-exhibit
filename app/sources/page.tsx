import type { Metadata } from "next";

import { SourceArchive } from "@/components/content/source-archive";
import { ScrollySections } from "@/components/site/scrolly-sections";
import { getLicensingChecklist, getSourceArchiveGroups } from "@/lib/content/queries";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildPageMetadata(
  "Sources",
  "Documentary archive for the Algorithmic Aesthetics exhibit, including citations, asset provenance, and licensing notes.",
);

export default function SourcesPage() {
  return (
    <main id="main-content" className="shell">
      <ScrollySections className="page-stack">
        <SourceArchive groups={getSourceArchiveGroups()} checklist={getLicensingChecklist()} />
      </ScrollySections>
    </main>
  );
}