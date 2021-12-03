import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document, Schema as MongooseSchema } from "mongoose";
import { Product } from "../../product/schema/product.schema";

export type SubProductDocument = SubProduct & Document;

@Schema()
export class SubProduct {
    @ApiProperty()
    @Prop({ type: MongooseSchema.Types.ObjectId, ref: Product.name })
    product_id: string

    @ApiProperty()
    @Prop()
    slug_sub_product: string

    @ApiProperty()
    @Prop()
    variance: string

    @ApiProperty()
    @Prop()
    image_sub_product: string[]

    @ApiProperty()
    @Prop()
    made_date: Date

    @ApiProperty()
    @Prop()
    expired_date: Date

    @ApiProperty()
    @Prop()
    quantity: number

    @ApiProperty()
    @Prop()
    safety_stock_quantity: number
}

export const SubProductSchema = SchemaFactory.createForClass(SubProduct)