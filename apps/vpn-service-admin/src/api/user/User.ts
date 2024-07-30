import { JsonValue } from "type-fest";
import { VpnConnections } from "../vpnConnections/VpnConnections";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  vpnConnectionsItems?: Array<VpnConnections>;
};
