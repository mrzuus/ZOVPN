import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { VpnConnectionsListRelationFilter } from "../vpnConnections/VpnConnectionsListRelationFilter";

export type ServerLocationsWhereInput = {
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  vpnConnectionsItems?: VpnConnectionsListRelationFilter;
};
