import { SubscriptionPlans } from "../subscriptionPlans/SubscriptionPlans";

export type Users = {
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  subscriptionPlan?: SubscriptionPlans | null;
  updatedAt: Date;
  username: string | null;
};
