import { StreetLightWhereInput } from "./StreetLightWhereInput";
import { StreetLightOrderByInput } from "./StreetLightOrderByInput";

export type StreetLightFindManyArgs = {
  where?: StreetLightWhereInput;
  orderBy?: Array<StreetLightOrderByInput>;
  skip?: number;
  take?: number;
};
