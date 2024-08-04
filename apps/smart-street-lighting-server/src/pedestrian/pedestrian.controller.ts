import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PedestrianService } from "./pedestrian.service";
import { PedestrianControllerBase } from "./base/pedestrian.controller.base";

@swagger.ApiTags("pedestrians")
@common.Controller("pedestrians")
export class PedestrianController extends PedestrianControllerBase {
  constructor(
    protected readonly service: PedestrianService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
