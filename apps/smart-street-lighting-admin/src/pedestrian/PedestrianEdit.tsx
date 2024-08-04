import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const PedestrianEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="count" source="count" />
        <DateTimeInput label="detectedAt" source="detectedAt" />
        <TextInput label="location" source="location" />
      </SimpleForm>
    </Edit>
  );
};
