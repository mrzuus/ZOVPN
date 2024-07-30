import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VpnConnectionsServiceBase } from "./base/vpnConnections.service.base";

@Injectable()
export class VpnConnectionsService extends VpnConnectionsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
