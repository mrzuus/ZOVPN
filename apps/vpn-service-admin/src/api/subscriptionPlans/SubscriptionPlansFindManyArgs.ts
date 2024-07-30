import { SubscriptionPlansWhereInput } from "./SubscriptionPlansWhereInput";
import { SubscriptionPlansOrderByInput } from "./SubscriptionPlansOrderByInput";

export type SubscriptionPlansFindManyArgs = {
  where?: SubscriptionPlansWhereInput;
  orderBy?: Array<SubscriptionPlansOrderByInput>;
  skip?: number;
  take?: number;
};
