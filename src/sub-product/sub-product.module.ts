import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SubProduct, SubProductSchema } from './schema/sub-product.schema';
import { SubProductController } from './sub-product.controller';
import { SubProductService } from './sub-product.service';

@Module({
    imports: [ MongooseModule.forFeature([ { name: SubProduct.name, schema: SubProductSchema } ]) ],
    controllers: [SubProductController],
    providers: [SubProductService],
    exports: [SubProductService]
})
export class SubProductModule {}
