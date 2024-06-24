import { SortOrder } from "../../util/SortOrder";

export type BacklogItemOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  folderId?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
