import { VpnConnections as TVpnConnections } from "../api/vpnConnections/VpnConnections";

export const VPNCONNECTIONS_TITLE_FIELD = "id";

export const VpnConnectionsTitle = (record: TVpnConnections): string => {
  return record.id?.toString() || String(record.id);
};
