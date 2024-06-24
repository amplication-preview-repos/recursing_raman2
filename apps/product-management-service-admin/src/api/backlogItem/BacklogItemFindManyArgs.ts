import { BacklogItemWhereInput } from "./BacklogItemWhereInput";
import { BacklogItemOrderByInput } from "./BacklogItemOrderByInput";

export type BacklogItemFindManyArgs = {
  where?: BacklogItemWhereInput;
  orderBy?: Array<BacklogItemOrderByInput>;
  skip?: number;
  take?: number;
};
