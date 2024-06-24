import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";

export type BacklogItemUpdateInput = {
  description?: string | null;
  folder?: FolderWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
