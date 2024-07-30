import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ServerLocationsModuleBase } from "./base/serverLocations.module.base";
import { ServerLocationsService } from "./serverLocations.service";
import { ServerLocationsController } from "./serverLocations.controller";
import { ServerLocationsResolver } from "./serverLocations.resolver";

@Module({
  imports: [ServerLocationsModuleBase, forwardRef(() => AuthModule)],
  controllers: [ServerLocationsController],
  providers: [ServerLocationsService, ServerLocationsResolver],
  exports: [ServerLocationsService],
})
export class ServerLocationsModule {}
