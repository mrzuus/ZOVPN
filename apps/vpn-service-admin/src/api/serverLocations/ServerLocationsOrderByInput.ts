import { SortOrder } from "../../util/SortOrder";

export type ServerLocationsOrderByInput = {
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  updatedAt?: SortOrder;
};
