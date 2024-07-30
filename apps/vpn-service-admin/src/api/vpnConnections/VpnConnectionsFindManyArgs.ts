import { VpnConnectionsWhereInput } from "./VpnConnectionsWhereInput";
import { VpnConnectionsOrderByInput } from "./VpnConnectionsOrderByInput";

export type VpnConnectionsFindManyArgs = {
  where?: VpnConnectionsWhereInput;
  orderBy?: Array<VpnConnectionsOrderByInput>;
  skip?: number;
  take?: number;
};
