import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SensorDataModuleBase } from "./base/sensorData.module.base";
import { SensorDataService } from "./sensorData.service";
import { SensorDataController } from "./sensorData.controller";
import { SensorDataResolver } from "./sensorData.resolver";

@Module({
  imports: [SensorDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [SensorDataController],
  providers: [SensorDataService, SensorDataResolver],
  exports: [SensorDataService],
})
export class SensorDataModule {}
