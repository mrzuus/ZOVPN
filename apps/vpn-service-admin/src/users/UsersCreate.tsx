import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SubscriptionPlansTitle } from "../subscriptionPlans/SubscriptionPlansTitle";

export const UsersCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
