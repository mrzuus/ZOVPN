import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdminWhereInput = {
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: StringNullableFilter;
  username?: StringNullableFilter;
};
