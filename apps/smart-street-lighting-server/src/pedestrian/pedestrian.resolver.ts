import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PedestrianResolverBase } from "./base/pedestrian.resolver.base";
import { Pedestrian } from "./base/Pedestrian";
import { PedestrianService } from "./pedestrian.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Pedestrian)
export class PedestrianResolver extends PedestrianResolverBase {
  constructor(
    protected readonly service: PedestrianService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
