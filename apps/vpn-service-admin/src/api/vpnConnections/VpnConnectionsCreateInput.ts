import { ServerLocationsWhereUniqueInput } from "../serverLocations/ServerLocationsWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type VpnConnectionsCreateInput = {
  connectionTime?: Date | null;
  disconnectionTime?: Date | null;
  serverLocation?: ServerLocationsWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
