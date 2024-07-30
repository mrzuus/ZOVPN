import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UsersListRelationFilter } from "../users/UsersListRelationFilter";

export type SubscriptionPlansWhereInput = {
  duration?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  usersItems?: UsersListRelationFilter;
};
