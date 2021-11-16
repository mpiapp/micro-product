import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn } from "class-validator";
import { Document, Schema as MongooseSchema } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
class ProductDimension {
    @ApiProperty()
    @Prop()
    width: string

    @ApiProperty()
    @Prop()
    length: string

    @ApiProperty()
    @Prop()
    height: string

    @ApiProperty()
    @Prop()
    weight: string
}

@Schema()
export class SubProduct {
    @ApiProperty()
    @Prop()
    sub_product_id: string

    @ApiProperty()
    @Prop()
    slug_sub_product: string

    @ApiProperty()
    @Prop()
    variance: string

    @ApiProperty()
    @Prop()
    image_sub_product: [string]

    @ApiProperty()
    @Prop()
    made_date: Date

    @ApiProperty()
    @Prop()
    expired_date: Date

    @ApiProperty()
    @Prop()
    SKU: number

    @ApiProperty()
    @Prop()
    quantity: number
}

@Schema()
export class Product {
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
    status: number

    @ApiProperty()
    @Prop()
    measurement_id: number

    @ApiProperty()
    @Prop()
    stock: number

    @ApiProperty()
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: SubProduct.name })
    sub_products: [SubProduct]
}

export const ProductSchema = SchemaFactory.createForClass(Product)