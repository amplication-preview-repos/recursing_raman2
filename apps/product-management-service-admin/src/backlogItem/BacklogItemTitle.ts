import { BacklogItem as TBacklogItem } from "../api/backlogItem/BacklogItem";

export const BACKLOGITEM_TITLE_FIELD = "title";

export const BacklogItemTitle = (record: TBacklogItem): string => {
  return record.title?.toString() || String(record.id);
};
