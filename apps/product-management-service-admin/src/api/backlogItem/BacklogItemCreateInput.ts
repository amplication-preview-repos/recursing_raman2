import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";

export type BacklogItemCreateInput = {
  description?: string | null;
  folder?: FolderWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
};
