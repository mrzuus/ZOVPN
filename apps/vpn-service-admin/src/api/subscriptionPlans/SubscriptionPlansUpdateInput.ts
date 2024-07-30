import { UsersUpdateManyWithoutSubscriptionPlansItemsInput } from "./UsersUpdateManyWithoutSubscriptionPlansItemsInput";

export type SubscriptionPlansUpdateInput = {
  duration?: number | null;
  name?: string | null;
  price?: number | null;
  usersItems?: UsersUpdateManyWithoutSubscriptionPlansItemsInput;
};
