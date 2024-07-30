import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SERVERLOCATIONS_TITLE_FIELD } from "../serverLocations/ServerLocationsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VpnConnectionsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"VPNConnectionsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="connectionTime" source="connectionTime" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="disconnectionTime" source="disconnectionTime" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="serverLocation"
          source="serverlocations.id"
          reference="ServerLocations"
        >
          <TextField source={SERVERLOCATIONS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="user" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
