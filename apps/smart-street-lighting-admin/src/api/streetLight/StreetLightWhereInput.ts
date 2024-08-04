import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type StreetLightWhereInput = {
  brightness?: FloatNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  status?: StringNullableFilter;
};
