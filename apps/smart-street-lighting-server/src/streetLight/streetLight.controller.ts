import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { StreetLightService } from "./streetLight.service";
import { StreetLightControllerBase } from "./base/streetLight.controller.base";

@swagger.ApiTags("streetLights")
@common.Controller("streetLights")
export class StreetLightController extends StreetLightControllerBase {
  constructor(
    protected readonly service: StreetLightService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
