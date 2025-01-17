/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ServerLocationsWhereInput } from "./ServerLocationsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ServerLocationsOrderByInput } from "./ServerLocationsOrderByInput";

@ArgsType()
class ServerLocationsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ServerLocationsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ServerLocationsWhereInput, { nullable: true })
  @Type(() => ServerLocationsWhereInput)
  where?: ServerLocationsWhereInput;

  @ApiProperty({
    required: false,
    type: [ServerLocationsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ServerLocationsOrderByInput], { nullable: true })
  @Type(() => ServerLocationsOrderByInput)
  orderBy?: Array<ServerLocationsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ServerLocationsFindManyArgs as ServerLocationsFindManyArgs };
