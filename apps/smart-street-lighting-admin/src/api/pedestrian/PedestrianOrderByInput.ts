import { SortOrder } from "../../util/SortOrder";

export type PedestrianOrderByInput = {
  count?: SortOrder;
  createdAt?: SortOrder;
  detectedAt?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  updatedAt?: SortOrder;
};
