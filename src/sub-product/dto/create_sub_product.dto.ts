import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsMongoId, IsOptional } from "class-validator";

export class CreateSubProductDTO {

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    @IsOptional()
    _id?: string;

    @ApiProperty()
    @Prop()
    product_id: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    slug_sub_product?: string

    @ApiProperty()
    @Prop()
    variance: string

    @ApiProperty()
    @Prop()
    image_sub_product: any[]

    @ApiProperty()
    @Prop()
    made_date: Date

    @ApiProperty()
    @Prop()
    expired_date: Date

    @ApiProperty()
    @Prop()
    SKU: string

    @ApiProperty()
    @Prop()
    quantity: number
}