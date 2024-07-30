import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVERLOCATIONS_TITLE_FIELD } from "../serverLocations/ServerLocationsTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="VpnConnections"
          target="userId"
          label="VPNConnectionsItems"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
