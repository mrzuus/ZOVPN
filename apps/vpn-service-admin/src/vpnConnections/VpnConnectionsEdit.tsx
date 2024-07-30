import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ServerLocationsTitle } from "../serverLocations/ServerLocationsTitle";
import { UserTitle } from "../user/UserTitle";

export const VpnConnectionsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
