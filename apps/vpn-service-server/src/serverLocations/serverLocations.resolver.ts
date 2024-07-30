import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ServerLocationsResolverBase } from "./base/serverLocations.resolver.base";
import { ServerLocations } from "./base/ServerLocations";
import { ServerLocationsService } from "./serverLocations.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ServerLocations)
export class ServerLocationsResolver extends ServerLocationsResolverBase {
  constructor(
    protected readonly service: ServerLocationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
