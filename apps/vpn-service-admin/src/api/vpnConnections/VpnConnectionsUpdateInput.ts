import { ServerLocationsWhereUniqueInput } from "../serverLocations/ServerLocationsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VpnConnectionsUpdateInput = {
  connectionTime?: Date | null;
  disconnectionTime?: Date | null;
  serverLocation?: ServerLocationsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
