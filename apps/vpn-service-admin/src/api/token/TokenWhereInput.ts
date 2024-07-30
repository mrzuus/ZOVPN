import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TokenWhereInput = {
  id?: StringFilter;
  isValid?: BooleanNullableFilter;
  token?: StringNullableFilter;
};
