import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PedestrianCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <DateTimeInput label="detectedAt" source="detectedAt" />
        <TextInput label="location" source="location" />
      </SimpleForm>
    </Create>
  );
};
