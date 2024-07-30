import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubscriptionPlansServiceBase } from "./base/subscriptionPlans.service.base";

@Injectable()
export class SubscriptionPlansService extends SubscriptionPlansServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
