import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ServerLocationsTitle } from "../serverLocations/ServerLocationsTitle";
import { UserTitle } from "../user/UserTitle";

export const VpnConnectionsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="connectionTime" source="connectionTime" />
        <DateTimeInput label="disconnectionTime" source="disconnectionTime" />
        <ReferenceInput
          source="serverLocation.id"
          reference="ServerLocations"
          label="serverLocation"
        >
          <SelectInput optionText={ServerLocationsTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
