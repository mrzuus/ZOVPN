import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SubscriptionPlansResolverBase } from "./base/subscriptionPlans.resolver.base";
import { SubscriptionPlans } from "./base/SubscriptionPlans";
import { SubscriptionPlansService } from "./subscriptionPlans.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SubscriptionPlans)
export class SubscriptionPlansResolver extends SubscriptionPlansResolverBase {
  constructor(
    protected readonly service: SubscriptionPlansService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
