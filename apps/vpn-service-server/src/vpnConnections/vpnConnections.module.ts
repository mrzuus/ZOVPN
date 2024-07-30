import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VpnConnectionsModuleBase } from "./base/vpnConnections.module.base";
import { VpnConnectionsService } from "./vpnConnections.service";
import { VpnConnectionsController } from "./vpnConnections.controller";
import { VpnConnectionsResolver } from "./vpnConnections.resolver";

@Module({
  imports: [VpnConnectionsModuleBase, forwardRef(() => AuthModule)],
  controllers: [VpnConnectionsController],
  providers: [VpnConnectionsService, VpnConnectionsResolver],
  exports: [VpnConnectionsService],
})
export class VpnConnectionsModule {}
