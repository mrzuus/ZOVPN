import { SortOrder } from "../../util/SortOrder";

export type UsersOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  password?: SortOrder;
  subscriptionPlanId?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
