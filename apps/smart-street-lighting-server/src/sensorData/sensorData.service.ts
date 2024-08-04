import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SensorDataServiceBase } from "./base/sensorData.service.base";

@Injectable()
export class SensorDataService extends SensorDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
