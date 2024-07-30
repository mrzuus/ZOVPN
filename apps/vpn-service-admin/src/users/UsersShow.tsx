import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SUBSCRIPTIONPLANS_TITLE_FIELD } from "../subscriptionPlans/SubscriptionPlansTitle";

export const UsersShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="password" source="password" />
        <ReferenceField
          label="subscriptionPlan"
          source="subscriptionplans.id"
          reference="SubscriptionPlans"
        >
          <TextField source={SUBSCRIPTIONPLANS_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
