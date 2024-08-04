import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { StreetLightModuleBase } from "./base/streetLight.module.base";
import { StreetLightService } from "./streetLight.service";
import { StreetLightController } from "./streetLight.controller";
import { StreetLightResolver } from "./streetLight.resolver";

@Module({
  imports: [StreetLightModuleBase, forwardRef(() => AuthModule)],
  controllers: [StreetLightController],
  providers: [StreetLightService, StreetLightResolver],
  exports: [StreetLightService],
})
export class StreetLightModule {}
