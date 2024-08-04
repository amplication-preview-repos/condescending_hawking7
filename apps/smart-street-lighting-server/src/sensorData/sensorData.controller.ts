import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SensorDataService } from "./sensorData.service";
import { SensorDataControllerBase } from "./base/sensorData.controller.base";

@swagger.ApiTags("sensorData")
@common.Controller("sensorData")
export class SensorDataController extends SensorDataControllerBase {
  constructor(
    protected readonly service: SensorDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
