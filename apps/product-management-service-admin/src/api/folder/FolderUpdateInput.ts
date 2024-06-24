import { BacklogItemUpdateManyWithoutFoldersInput } from "./BacklogItemUpdateManyWithoutFoldersInput";

export type FolderUpdateInput = {
  backlogItems?: BacklogItemUpdateManyWithoutFoldersInput;
  name?: string | null;
  parentFolder?: string | null;
};
