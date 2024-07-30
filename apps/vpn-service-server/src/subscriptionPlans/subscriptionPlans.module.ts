import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SubscriptionPlansModuleBase } from "./base/subscriptionPlans.module.base";
import { SubscriptionPlansService } from "./subscriptionPlans.service";
import { SubscriptionPlansController } from "./subscriptionPlans.controller";
import { SubscriptionPlansResolver } from "./subscriptionPlans.resolver";

@Module({
  imports: [SubscriptionPlansModuleBase, forwardRef(() => AuthModule)],
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService, SubscriptionPlansResolver],
  exports: [SubscriptionPlansService],
})
export class SubscriptionPlansModule {}
