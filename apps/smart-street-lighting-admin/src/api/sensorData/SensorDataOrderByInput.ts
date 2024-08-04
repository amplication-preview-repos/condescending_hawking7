import { SortOrder } from "../../util/SortOrder";

export type SensorDataOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  value?: SortOrder;
};
