import { eraRecords, exhibitEpilogue, homeContent } from "@/lib/content/site-content";
import { eraSourceOrder, licensingChecklist, sourceRecords } from "@/lib/content/sources";
import type { EraRecord, EraSlug, SourceRecord } from "@/lib/content/types";

const eraRecordMap = new Map(eraRecords.map((era) => [era.slug, era]));
const sourceRecordMap = new Map(sourceRecords.map((source) => [source.id, source]));

export function getHomeContent() {
  return homeContent;
}

export function getAllEras() {
  return eraRecords;
}

export function getExhibitEpilogue() {
  return exhibitEpilogue;
}

export function getEraBySlug(slug: EraSlug): EraRecord {
  const era = eraRecordMap.get(slug);

  if (!era) {
    throw new Error(`Unknown era slug: ${slug}`);
  }

  return era;
}

export function getSourcesByIds(ids: string[]): SourceRecord[] {
  return ids.flatMap((id) => {
    const source = sourceRecordMap.get(id);
    return source ? [source] : [];
  });
}

export function getHomeReferences() {
  return getSourcesByIds(homeContent.referenceIds);
}

export function getSourcesForEra(slug: EraSlug) {
  return sourceRecords.filter((source) => source.eras.includes(slug));
}

export function getSourceArchiveGroups() {
  return eraSourceOrder.map((group) => ({
    ...group,
    sources: getSourcesForEra(group.slug),
  }));
}

export function getLicensingChecklist() {
  return licensingChecklist;
}