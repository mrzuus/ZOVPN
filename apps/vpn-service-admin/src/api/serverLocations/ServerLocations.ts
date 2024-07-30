import { VpnConnections } from "../vpnConnections/VpnConnections";

export type ServerLocations = {
  city: string | null;
  country: string | null;
  createdAt: Date;
  id: string;
  ipAddress: string | null;
  updatedAt: Date;
  vpnConnectionsItems?: Array<VpnConnections>;
};
