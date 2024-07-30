import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { VpnConnectionsTitle } from "../vpnConnections/VpnConnectionsTitle";

export const ServerLocationsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="ipAddress" source="ipAddress" />
        <ReferenceArrayInput
          source="vpnConnectionsItems"
          reference="VpnConnections"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={VpnConnectionsTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
