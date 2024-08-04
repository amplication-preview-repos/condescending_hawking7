import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PedestrianList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Pedestrians"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="count" source="count" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="detectedAt" source="detectedAt" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
