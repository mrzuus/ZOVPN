import { ServerLocations } from "../serverLocations/ServerLocations";
import { User } from "../user/User";

export type VpnConnections = {
  connectionTime: Date | null;
  createdAt: Date;
  disconnectionTime: Date | null;
  id: string;
  serverLocation?: ServerLocations | null;
  updatedAt: Date;
  user?: User | null;
};
