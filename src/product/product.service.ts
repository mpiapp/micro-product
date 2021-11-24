import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schema/product.schema';
import { Model } from 'mongoose';
import { CreateProductDTO } from './dto/create_product.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateProductDTO } from './dto/update_product.dto';
import { SubProduct, SubProductDocument } from '../sub-product/schema/sub-product.schema';
// import { AlgoliaService } from 'nestjs-algolia';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
        @InjectModel(SubProduct.name) private readonly subProductModel: Model<SubProductDocument>,
        // private readonly algoliaService:AlgoliaService
    ){}

    async create(body: CreateProductDTO): Promise<Product> {
        return this.productModel.create(body)
    }

    async update(id: IdDTO, body: UpdateProductDTO ): Promise<Product> {
        await this.productModel.findByIdAndUpdate(id, body)
        return this.findById(id)
    }

    async findById(id: IdDTO): Promise<Product> {
        return this.productModel.findById(id)
    }
    
    async find(): Promise<Product[]> {
        return this.productModel.find({})
    }

    async findSubProduct(product_id: string): Promise<SubProduct[]> {
        return this.subProductModel.find({product_id: product_id.valueOf()})
    }

    async delete(id: IdDTO): Promise<Product> {
        return this.productModel.findByIdAndDelete(id)
    }

    // /* istanbul ignore next */
    // async addRecordToIndex(
    //     indexName: string,
    //     record: any
    // ): Promise<any> {
    //     const index = await this.algoliaService.initIndex(indexName);
    //     return index.addObject(record)
    // }
}
