import { SortOrder } from "../../util/SortOrder";

export type TokenOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isValid?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
};
