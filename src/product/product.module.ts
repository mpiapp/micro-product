import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlgoliaModule } from 'nestjs-algolia';
import { SearchIndexService } from '../search-index/search-index.service';
import { SubProduct, SubProductSchema } from '../sub-product/schema/sub-product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './schema/product.schema';

@Module({
  imports: [ 
    MongooseModule.forFeature([ 
      { name: Product.name, schema: ProductSchema },
      { name: SubProduct.name, schema: SubProductSchema }
    ]),
    AlgoliaModule.register({
      applicationId: 'X0RKYDMJ0J',
      apiKey: '191cff9cbe16107cb946a1e374b5efa6',
    })
  ],
  controllers: [ProductController],
  providers: [ProductService, SearchIndexService]
})
export class ProductModule {}