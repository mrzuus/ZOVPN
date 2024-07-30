import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { SERVERLOCATIONS_TITLE_FIELD } from "../serverLocations/ServerLocationsTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const VpnConnectionsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
