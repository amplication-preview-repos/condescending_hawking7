/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Pedestrian as PrismaPedestrian } from "@prisma/client";

export class PedestrianServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.PedestrianCountArgs, "select">
  ): Promise<number> {
    return this.prisma.pedestrian.count(args);
  }

  async pedestrians(
    args: Prisma.PedestrianFindManyArgs
  ): Promise<PrismaPedestrian[]> {
    return this.prisma.pedestrian.findMany(args);
  }
  async pedestrian(
    args: Prisma.PedestrianFindUniqueArgs
  ): Promise<PrismaPedestrian | null> {
    return this.prisma.pedestrian.findUnique(args);
  }
  async createPedestrian(
    args: Prisma.PedestrianCreateArgs
  ): Promise<PrismaPedestrian> {
    return this.prisma.pedestrian.create(args);
  }
  async updatePedestrian(
    args: Prisma.PedestrianUpdateArgs
  ): Promise<PrismaPedestrian> {
    return this.prisma.pedestrian.update(args);
  }
  async deletePedestrian(
    args: Prisma.PedestrianDeleteArgs
  ): Promise<PrismaPedestrian> {
    return this.prisma.pedestrian.delete(args);
  }
}