import { Prop } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsMongoId, IsOptional } from "class-validator";
import { ProductDimension, ProductStorage } from "../schema/product.schema";

export class CreateProductDTO {

    @ApiProperty()
    @IsOptional()
    @IsMongoId()
    @IsOptional()
    _id?: string;

    @ApiProperty()
    @Prop()
    vendor_id: string

    @ApiProperty()
    @Prop()
    name: string

    @ApiProperty()
    @Prop()
    description: string

    @ApiProperty()
    @Prop()
    brand: string

    @ApiProperty()
    @Prop()
    @IsOptional()
    slug_product?: string

    @ApiProperty()
    @Prop()
    category_id: string

    @ApiProperty()
    @Prop()
    retail_price: number

    @ApiProperty()
    @Prop()
    discount: number

    @ApiProperty()
    @Prop()
    discount_price: number

    @ApiProperty()
    @Prop()
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
    @Prop()
    include_other_discount: boolean

    @ApiProperty()
    @Prop()
    term_of_payment_id : string

    @ApiProperty()
    @Prop()
    down_payment : number
    
    @ApiProperty()
    @Prop()
    @IsOptional()
    SKU: string
    
    @ApiProperty()
    @Prop(ProductStorage)
    storage: ProductStorage
}