import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const PedestrianShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detectedAt" source="detectedAt" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
