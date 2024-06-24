import { Folder } from "../folder/Folder";

export type BacklogItem = {
  createdAt: Date;
  description: string | null;
  folder?: Folder | null;
  id: string;
  status?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
