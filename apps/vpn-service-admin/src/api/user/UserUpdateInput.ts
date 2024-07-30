import { InputJsonValue } from "../../types";
import { VpnConnectionsUpdateManyWithoutUsersInput } from "./VpnConnectionsUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  vpnConnectionsItems?: VpnConnectionsUpdateManyWithoutUsersInput;
};
