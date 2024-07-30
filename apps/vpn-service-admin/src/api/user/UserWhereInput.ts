import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VpnConnectionsListRelationFilter } from "../vpnConnections/VpnConnectionsListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  vpnConnectionsItems?: VpnConnectionsListRelationFilter;
};
