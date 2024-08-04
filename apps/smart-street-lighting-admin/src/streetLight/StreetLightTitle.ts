import { StreetLight as TStreetLight } from "../api/streetLight/StreetLight";

export const STREETLIGHT_TITLE_FIELD = "location";

export const StreetLightTitle = (record: TStreetLight): string => {
  return record.location?.toString() || String(record.id);
};
