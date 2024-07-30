import { SubscriptionPlans as TSubscriptionPlans } from "../api/subscriptionPlans/SubscriptionPlans";

export const SUBSCRIPTIONPLANS_TITLE_FIELD = "name";

export const SubscriptionPlansTitle = (record: TSubscriptionPlans): string => {
  return record.name?.toString() || String(record.id);
};
