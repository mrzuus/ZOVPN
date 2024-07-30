import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VpnConnectionsResolverBase } from "./base/vpnConnections.resolver.base";
import { VpnConnections } from "./base/VpnConnections";
import { VpnConnectionsService } from "./vpnConnections.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VpnConnections)
export class VpnConnectionsResolver extends VpnConnectionsResolverBase {
  constructor(
    protected readonly service: VpnConnectionsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
