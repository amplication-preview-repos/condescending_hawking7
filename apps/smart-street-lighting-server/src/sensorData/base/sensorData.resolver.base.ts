/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { SensorData } from "./SensorData";
import { SensorDataCountArgs } from "./SensorDataCountArgs";
import { SensorDataFindManyArgs } from "./SensorDataFindManyArgs";
import { SensorDataFindUniqueArgs } from "./SensorDataFindUniqueArgs";
import { CreateSensorDataArgs } from "./CreateSensorDataArgs";
import { UpdateSensorDataArgs } from "./UpdateSensorDataArgs";
import { DeleteSensorDataArgs } from "./DeleteSensorDataArgs";
import { SensorDataService } from "../sensorData.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SensorData)
export class SensorDataResolverBase {
  constructor(
    protected readonly service: SensorDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "read",
    possession: "any",
  })
  async _sensorDataItemsMeta(
    @graphql.Args() args: SensorDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [SensorData])
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "read",
    possession: "any",
  })
  async sensorDataItems(
    @graphql.Args() args: SensorDataFindManyArgs
  ): Promise<SensorData[]> {
    return this.service.sensorDataItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => SensorData, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "read",
    possession: "own",
  })
  async sensorData(
    @graphql.Args() args: SensorDataFindUniqueArgs
  ): Promise<SensorData | null> {
    const result = await this.service.sensorData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SensorData)
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "create",
    possession: "any",
  })
  async createSensorData(
    @graphql.Args() args: CreateSensorDataArgs
  ): Promise<SensorData> {
    return await this.service.createSensorData({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => SensorData)
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "update",
    possession: "any",
  })
  async updateSensorData(
    @graphql.Args() args: UpdateSensorDataArgs
  ): Promise<SensorData | null> {
    try {
      return await this.service.updateSensorData({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SensorData)
  @nestAccessControl.UseRoles({
    resource: "SensorData",
    action: "delete",
    possession: "any",
  })
  async deleteSensorData(
    @graphql.Args() args: DeleteSensorDataArgs
  ): Promise<SensorData | null> {
    try {
      return await this.service.deleteSensorData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}