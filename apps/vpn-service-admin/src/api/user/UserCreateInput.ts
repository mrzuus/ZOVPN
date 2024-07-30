import { InputJsonValue } from "../../types";
import { VpnConnectionsCreateNestedManyWithoutUsersInput } from "./VpnConnectionsCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  vpnConnectionsItems?: VpnConnectionsCreateNestedManyWithoutUsersInput;
};
