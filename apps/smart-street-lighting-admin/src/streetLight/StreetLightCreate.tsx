import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const StreetLightCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="brightness" source="brightness" />
        <TextInput label="location" source="location" />
        <TextInput label="status" source="status" />
      </SimpleForm>
    </Create>
  );
};
