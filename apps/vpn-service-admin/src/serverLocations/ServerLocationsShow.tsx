import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SERVERLOCATIONS_TITLE_FIELD } from "./ServerLocationsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ServerLocationsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="city" source="city" />
        <TextField label="country" source="country" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="ipAddress" source="ipAddress" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="VpnConnections"
          target="serverLocationId"
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
