import { ServerLocationsWhereInput } from "./ServerLocationsWhereInput";
import { ServerLocationsOrderByInput } from "./ServerLocationsOrderByInput";

export type ServerLocationsFindManyArgs = {
  where?: ServerLocationsWhereInput;
  orderBy?: Array<ServerLocationsOrderByInput>;
  skip?: number;
  take?: number;
};
