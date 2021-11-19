import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IdDTO } from 'src/product/dto/id.dto';
import { CreateSubProductDTO } from './dto/create_sub_product.dto';
import { UpdateSubProductDTO } from './dto/update_sub_product.dto';
import { SubProduct, SubProductDocument } from './schema/sub-product.schema';

@Injectable()
export class SubProductService {

    constructor(
        @InjectModel(SubProduct.name) private readonly subProductModel: Model<SubProductDocument>
    ){}

    async create(body: CreateSubProductDTO): Promise<SubProduct> {
        return this.subProductModel.create(body)
    }

    async update(id: IdDTO, body: UpdateSubProductDTO ): Promise<SubProduct> {
        await this.subProductModel.findByIdAndUpdate(id, body)
        return this.findById(id)
    }

    async findById(id: IdDTO): Promise<SubProduct> {
        return this.subProductModel.findById(id)
    }
    
    async find(): Promise<SubProduct[]> {
        return this.subProductModel.find({})
    }

    async delete(id: IdDTO): Promise<SubProduct> {
        return this.subProductModel.findByIdAndDelete(id)
    }

}
