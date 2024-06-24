import { BacklogItemCreateNestedManyWithoutFoldersInput } from "./BacklogItemCreateNestedManyWithoutFoldersInput";

export type FolderCreateInput = {
  backlogItems?: BacklogItemCreateNestedManyWithoutFoldersInput;
  name?: string | null;
  parentFolder?: string | null;
};
