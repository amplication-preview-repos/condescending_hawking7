import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PedestrianWhereInput = {
  count?: IntNullableFilter;
  detectedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
};
