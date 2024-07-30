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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput } from "./VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput";
import { Type } from "class-transformer";

@InputType()
class ServerLocationsCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ipAddress?: string | null;

  @ApiProperty({
    required: false,
    type: () => VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput,
  })
  @ValidateNested()
  @Type(() => VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput)
  @IsOptional()
  @Field(() => VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput, {
    nullable: true,
  })
  vpnConnectionsItems?: VpnConnectionsCreateNestedManyWithoutServerLocationsItemsInput;
}

export { ServerLocationsCreateInput as ServerLocationsCreateInput };
