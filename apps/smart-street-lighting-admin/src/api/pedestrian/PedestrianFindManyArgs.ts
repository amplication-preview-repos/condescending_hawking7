import { PedestrianWhereInput } from "./PedestrianWhereInput";
import { PedestrianOrderByInput } from "./PedestrianOrderByInput";

export type PedestrianFindManyArgs = {
  where?: PedestrianWhereInput;
  orderBy?: Array<PedestrianOrderByInput>;
  skip?: number;
  take?: number;
};
