import { SortOrder } from "../../util/SortOrder";

export type SubscriptionPlansOrderByInput = {
  createdAt?: SortOrder;
  duration?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
