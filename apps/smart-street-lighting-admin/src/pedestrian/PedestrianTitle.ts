import { Pedestrian as TPedestrian } from "../api/pedestrian/Pedestrian";

export const PEDESTRIAN_TITLE_FIELD = "location";

export const PedestrianTitle = (record: TPedestrian): string => {
  return record.location?.toString() || String(record.id);
};
