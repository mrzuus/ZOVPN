import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ServerLocationsWhereUniqueInput } from "../serverLocations/ServerLocationsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VpnConnectionsWhereInput = {
  connectionTime?: DateTimeNullableFilter;
  disconnectionTime?: DateTimeNullableFilter;
  id?: StringFilter;
  serverLocation?: ServerLocationsWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
