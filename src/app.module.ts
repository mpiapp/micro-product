import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { SubProductModule } from './sub-product/sub-product.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`),
    ProductModule,
    SubProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
