import { UsersCreateNestedManyWithoutSubscriptionPlansItemsInput } from "./UsersCreateNestedManyWithoutSubscriptionPlansItemsInput";

export type SubscriptionPlansCreateInput = {
  duration?: number | null;
  name?: string | null;
  price?: number | null;
  usersItems?: UsersCreateNestedManyWithoutSubscriptionPlansItemsInput;
};
