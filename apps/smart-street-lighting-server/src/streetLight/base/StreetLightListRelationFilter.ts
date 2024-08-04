/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StreetLightWhereInput } from "./StreetLightWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class StreetLightListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => StreetLightWhereInput,
  })
  @ValidateNested()
  @Type(() => StreetLightWhereInput)
  @IsOptional()
  @Field(() => StreetLightWhereInput, {
    nullable: true,
  })
  every?: StreetLightWhereInput;

  @ApiProperty({
    required: false,
    type: () => StreetLightWhereInput,
  })
  @ValidateNested()
  @Type(() => StreetLightWhereInput)
  @IsOptional()
  @Field(() => StreetLightWhereInput, {
    nullable: true,
  })
  some?: StreetLightWhereInput;

  @ApiProperty({
    required: false,
    type: () => StreetLightWhereInput,
  })
  @ValidateNested()
  @Type(() => StreetLightWhereInput)
  @IsOptional()
  @Field(() => StreetLightWhereInput, {
    nullable: true,
  })
  none?: StreetLightWhereInput;
}
export { StreetLightListRelationFilter as StreetLightListRelationFilter };