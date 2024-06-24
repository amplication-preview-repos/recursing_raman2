import { BacklogItem } from "../backlogItem/BacklogItem";

export type Folder = {
  backlogItems?: Array<BacklogItem>;
  createdAt: Date;
  id: string;
  name: string | null;
  parentFolder: string | null;
  updatedAt: Date;
};
