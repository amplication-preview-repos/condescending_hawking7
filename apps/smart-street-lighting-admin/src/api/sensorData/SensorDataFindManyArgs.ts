import { SensorDataWhereInput } from "./SensorDataWhereInput";
import { SensorDataOrderByInput } from "./SensorDataOrderByInput";

export type SensorDataFindManyArgs = {
  where?: SensorDataWhereInput;
  orderBy?: Array<SensorDataOrderByInput>;
  skip?: number;
  take?: number;
};
