import { VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput } from "./VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput";

export type ServerLocationsCreateInput = {
  city?: string | null;
  country?: string | null;
  ipAddress?: string | null;
  vpnConnectionsItems?: VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput;
};
