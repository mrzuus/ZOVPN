import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ServerLocationsServiceBase } from "./base/serverLocations.service.base";

@Injectable()
export class ServerLocationsService extends ServerLocationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
