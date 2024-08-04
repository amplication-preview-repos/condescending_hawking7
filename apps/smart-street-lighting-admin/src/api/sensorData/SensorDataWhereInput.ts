import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type SensorDataWhereInput = {
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  typeField?: StringNullableFilter;
  value?: FloatNullableFilter;
};
