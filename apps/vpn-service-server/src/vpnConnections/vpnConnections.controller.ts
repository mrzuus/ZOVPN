import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { VpnConnectionsService } from "./vpnConnections.service";
import { VpnConnectionsControllerBase } from "./base/vpnConnections.controller.base";

@swagger.ApiTags("vpnConnections")
@common.Controller("vpnConnections")
export class VpnConnectionsController extends VpnConnectionsControllerBase {
  constructor(
    protected readonly service: VpnConnectionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
