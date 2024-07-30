import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SubscriptionPlansService } from "./subscriptionPlans.service";
import { SubscriptionPlansControllerBase } from "./base/subscriptionPlans.controller.base";

@swagger.ApiTags("subscriptionPlans")
@common.Controller("subscriptionPlans")
export class SubscriptionPlansController extends SubscriptionPlansControllerBase {
  constructor(
    protected readonly service: SubscriptionPlansService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
