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
    @IsOptional()
    stock: number

    @ApiProperty()
    @Prop()
    @IsOptional()
    minimum_order_quantity: number

    @ApiProperty()
    @Prop()
    @IsOptional()
    warehouse_id: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    include_other_discount: boolean

    @ApiProperty()
    @Prop()
    @IsOptional()
    term_of_payment_id : string

    @ApiProperty()
    @Prop()
    @IsOptional()
    down_payment : number
    
    @ApiProperty()
    @Prop()
    @IsOptional()
    SKU: string
    
    @ApiProperty()
    @Prop(ProductStorage)
    storage: ProductStorage
}