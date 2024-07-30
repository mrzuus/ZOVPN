import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ServerLocationsService } from "./serverLocations.service";
import { ServerLocationsControllerBase } from "./base/serverLocations.controller.base";

@swagger.ApiTags("serverLocations")
@common.Controller("serverLocations")
export class ServerLocationsController extends ServerLocationsControllerBase {
  constructor(
    protected readonly service: ServerLocationsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
