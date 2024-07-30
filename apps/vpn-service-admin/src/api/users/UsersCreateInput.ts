import { SubscriptionPlansWhereUniqueInput } from "../subscriptionPlans/SubscriptionPlansWhereUniqueInput";

export type UsersCreateInput = {
  email?: string | null;
  password?: string | null;
  subscriptionPlan?: SubscriptionPlansWhereUniqueInput | null;
  username?: string | null;
};
