import { Users } from "../users/Users";

export type SubscriptionPlans = {
  createdAt: Date;
  duration: number | null;
  id: string;
  name: string | null;
  price: number | null;
  updatedAt: Date;
  usersItems?: Array<Users>;
};
