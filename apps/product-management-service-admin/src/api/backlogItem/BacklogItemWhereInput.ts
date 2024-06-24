import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FolderWhereUniqueInput } from "../folder/FolderWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type BacklogItemWhereInput = {
  description?: StringNullableFilter;
  folder?: FolderWhereUniqueInput;
  id?: StringFilter;
  status?: "Option1";
  title?: StringNullableFilter;
};
