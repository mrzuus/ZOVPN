import { VpnConnectionsUpdateManyWithoutServerLocationsItemsInput } from "./VpnConnectionsUpdateManyWithoutServerLocationsItemsInput";

export type ServerLocationsUpdateInput = {
  city?: string | null;
  country?: string | null;
  ipAddress?: string | null;
  vpnConnectionsItems?: VpnConnectionsUpdateManyWithoutServerLocationsItemsInput;
};
