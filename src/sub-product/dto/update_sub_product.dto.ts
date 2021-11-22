import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsOptional } from "class-validator";

export class UpdateSubProductDTO {

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    @IsOptional()
    _id?: string;

    @ApiProperty()
    @Prop()
    @IsOptional()
    variance: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    image_sub_product: any[]

    @ApiProperty()
    @Prop()
    @IsOptional()
    made_date: Date

    @ApiProperty()
    @Prop()
    @IsOptional()
    expired_date: Date

    @ApiProperty()
    @Prop()
    @IsOptional()
    SKU: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    quantity: number
}