import { SensorData as TSensorData } from "../api/sensorData/SensorData";

export const SENSORDATA_TITLE_FIELD = "typeField";

export const SensorDataTitle = (record: TSensorData): string => {
  return record.typeField?.toString() || String(record.id);
};
