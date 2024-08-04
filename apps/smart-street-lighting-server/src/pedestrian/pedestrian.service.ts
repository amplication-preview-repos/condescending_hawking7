import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PedestrianServiceBase } from "./base/pedestrian.service.base";

@Injectable()
export class PedestrianService extends PedestrianServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
