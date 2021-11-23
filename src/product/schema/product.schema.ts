import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn } from "class-validator";
import { Document, Schema as MongooseSchema } from "mongoose";
// import { SubProduct } from "../../sub-product/schema/sub-product.schema";

export type ProductDocument = Product & Document;

@Schema()
export class ProductDimension {
    @ApiProperty()
    @Prop()
    width: number

    @ApiProperty()
    @Prop()
    length: number

    @ApiProperty()
    @Prop()
    height: number

    @ApiProperty()
    @Prop()
    weight: number
}

@Schema()
export class ProductStorage {
    @ApiProperty()
    @Prop()
    rack: string

    @ApiProperty()
    @Prop()
    bin: string

    @ApiProperty()
    @Prop()
    level: string
}

@Schema()
export class Product {
    @ApiProperty()
    @Prop()
    vendor_id: string

    @ApiProperty()
    @Prop()
    vendor_name: string

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
    slug_product: string

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
    include_other_discount: boolean

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
    @Prop(ProductStorage)
    storage: ProductStorage

    @ApiProperty()
    @Prop()
    sub_products: any[]

    @ApiProperty()
    @Prop()
    term_of_payment_id : string

    @ApiProperty()
    @Prop()
    down_payment : number
    
    @ApiProperty()
    @Prop()
    SKU: string
}

export const ProductSchema = SchemaFactory.createForClass(Product)