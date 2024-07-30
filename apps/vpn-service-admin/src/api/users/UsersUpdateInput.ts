import { SubscriptionPlansWhereUniqueInput } from "../subscriptionPlans/SubscriptionPlansWhereUniqueInput";

export type UsersUpdateInput = {
  email?: string | null;
  password?: string | null;
  subscriptionPlan?: SubscriptionPlansWhereUniqueInput | null;
  username?: string | null;
};
