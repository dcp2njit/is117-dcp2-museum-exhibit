import { eraRecords, homeContent } from "@/lib/content/site-content";
import { sourceRecords } from "@/lib/content/sources";

export function getContentIntegrityIssues() {
  const issues: string[] = [];
  const sourceIds = new Set(sourceRecords.map((source) => source.id));
  const duplicateSourceIds = new Set<string>();

  for (const source of sourceRecords) {
    if (duplicateSourceIds.has(source.id)) {
      issues.push(`Duplicate source id detected: ${source.id}`);
      continue;
    }

    duplicateSourceIds.add(source.id);

    if (!source.title || !source.url || !source.use || !source.licenseNotes) {
      issues.push(`Source ${source.id} is missing a required field.`);
    }

    if (source.eras.length === 0) {
      issues.push(`Source ${source.id} is not assigned to any era.`);
    }
  }

  for (const era of eraRecords) {
    if (!era.archiveItems.length) {
      issues.push(`Era ${era.slug} has no archive items.`);
    }

    if (!era.contextBlocks.length) {
      issues.push(`Era ${era.slug} has no context blocks.`);
    }

    if (!era.timelineItems.length) {
      issues.push(`Era ${era.slug} has no timeline items.`);
    }

    for (const archiveItem of era.archiveItems) {
      if (!archiveItem.title || !archiveItem.image || !archiveItem.alt || !archiveItem.caption || !archiveItem.credit) {
        issues.push(`Archive item ${era.slug}/${archiveItem.id} is missing a required field.`);
      }

      if (!sourceIds.has(archiveItem.sourceId)) {
        issues.push(`Archive item ${era.slug}/${archiveItem.id} references missing source ${archiveItem.sourceId}.`);
      }
    }

    for (const block of era.contextBlocks) {
      if (!block.title || !block.body || !block.supportImage || !block.supportAlt || !block.supportCaption) {
        issues.push(`Context block ${era.slug}/${block.id} is missing a required field.`);
      }

      if (!sourceIds.has(block.supportSourceId)) {
        issues.push(`Context block ${era.slug}/${block.id} references missing source ${block.supportSourceId}.`);
      }
    }

    for (const referenceId of era.referenceIds) {
      if (!sourceIds.has(referenceId)) {
        issues.push(`Era ${era.slug} references missing source ${referenceId}.`);
      }
    }
  }

  for (const referenceId of homeContent.referenceIds) {
    if (!sourceIds.has(referenceId)) {
      issues.push(`Home content references missing source ${referenceId}.`);
    }
  }

  return issues;
}

export function assertContentIntegrity() {
  const issues = getContentIntegrityIssues();

  if (issues.length > 0) {
    throw new Error(issues.join("\n"));
  }
}