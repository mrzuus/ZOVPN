import { ServerLocations as TServerLocations } from "../api/serverLocations/ServerLocations";

export const SERVERLOCATIONS_TITLE_FIELD = "city";

export const ServerLocationsTitle = (record: TServerLocations): string => {
  return record.city?.toString() || String(record.id);
};
