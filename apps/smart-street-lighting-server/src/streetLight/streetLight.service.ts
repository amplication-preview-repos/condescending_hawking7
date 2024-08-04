import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StreetLightServiceBase } from "./base/streetLight.service.base";

@Injectable()
export class StreetLightService extends StreetLightServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
