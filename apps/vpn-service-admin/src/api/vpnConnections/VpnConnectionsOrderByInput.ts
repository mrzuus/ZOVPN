import { SortOrder } from "../../util/SortOrder";

export type VpnConnectionsOrderByInput = {
  connectionTime?: SortOrder;
  createdAt?: SortOrder;
  disconnectionTime?: SortOrder;
  id?: SortOrder;
  serverLocationId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
