import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsMongoId, IsOptional } from "class-validator";
import { ProductDimension, ProductStorage } from "../schema/product.schema";

export class UpdateProductDTO {

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    @IsOptional()
    _id?: string;

    @ApiProperty()
    @Prop()
    @IsOptional()
    name: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    description: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    brand: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    category_id: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    retail_price: number

    @ApiProperty()
    @Prop()
    @IsOptional()
    discount: number

    @ApiProperty()
    @Prop()
    @IsOptional()
    images_product: string

    @ApiProperty()
    @Prop()
    reported_times: number

    @ApiProperty()
    @Prop(ProductDimension)
    dimension: ProductDimension

    @ApiProperty()
    @Prop()
    @IsIn(['DRAFT', 'OPEN', 'EXCLUSIVE', 'DELETED'])
    status: string

    @ApiProperty()
    @Prop()
    measurement_id: string

    @ApiProperty()
    @Prop()
    stock: number

    @ApiProperty()
    @Prop()
    minimum_order_quantity: number

    @ApiProperty()
    @Prop()
    warehouse_id: string
    
    @ApiProperty()
    @Prop(ProductStorage)
    storage: ProductStorage
}