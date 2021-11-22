import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubProduct, SubProductSchema } from '../sub-product/schema/sub-product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports: [ 
    MongooseModule.forFeature([ 
      { name: Product.name, schema: ProductSchema },
      { name: SubProduct.name, schema: SubProductSchema }
    ]) 
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}