import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StreetLightEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="brightness" source="brightness" />
        <TextInput label="location" source="location" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Edit>
  );
};
