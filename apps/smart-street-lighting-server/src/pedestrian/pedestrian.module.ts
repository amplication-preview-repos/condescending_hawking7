import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PedestrianModuleBase } from "./base/pedestrian.module.base";
import { PedestrianService } from "./pedestrian.service";
import { PedestrianController } from "./pedestrian.controller";
import { PedestrianResolver } from "./pedestrian.resolver";

@Module({
  imports: [PedestrianModuleBase, forwardRef(() => AuthModule)],
  controllers: [PedestrianController],
  providers: [PedestrianService, PedestrianResolver],
  exports: [PedestrianService],
})
export class PedestrianModule {}
