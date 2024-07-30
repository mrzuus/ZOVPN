import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SubscriptionPlansTitle } from "../subscriptionPlans/SubscriptionPlansTitle";

export const UsersEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="password" source="password" />
        <ReferenceInput
          source="subscriptionPlan.id"
          reference="SubscriptionPlans"
          label="subscriptionPlan"
        >
          <SelectInput optionText={SubscriptionPlansTitle} />
        </ReferenceInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
