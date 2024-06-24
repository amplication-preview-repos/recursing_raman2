import { BacklogItemListRelationFilter } from "../backlogItem/BacklogItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FolderWhereInput = {
  backlogItems?: BacklogItemListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  parentFolder?: StringNullableFilter;
};
