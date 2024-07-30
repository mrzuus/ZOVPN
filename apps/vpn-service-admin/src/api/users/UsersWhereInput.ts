import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SubscriptionPlansWhereUniqueInput } from "../subscriptionPlans/SubscriptionPlansWhereUniqueInput";

export type UsersWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  subscriptionPlan?: SubscriptionPlansWhereUniqueInput;
  username?: StringNullableFilter;
};
