import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';
import { CreateSubProductDTO } from './dto/create_sub_product.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateSubProductDTO } from './dto/update_sub_product.dto';
import { SubProduct } from './schema/sub-product.schema';
import { SubProductService } from './sub-product.service';

@Controller('sub-product')
export class SubProductController {

    constructor(private readonly subProductService:SubProductService){}

    @ApiCreatedResponse({ type: SubProduct, description: 'post a sub-product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Post()
    async create(@Body() body: CreateSubProductDTO): Promise<SubProduct> {

        body['slug_sub_product'] = `${body.product_id}_${body.variance.trim().replace(/ /g,"_")}`

        return this.subProductService.create(body)
    }

    @ApiOkResponse({ type: [SubProduct], description: 'get sub-product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Get()
    async find(): Promise<SubProduct[]> {
        return this.subProductService.find()
    }

    @ApiCreatedResponse({ type: SubProduct, description: 'update a sub-product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Put(':id')
    async update(@Param('id') id: IdDTO, @Body() body: UpdateSubProductDTO): Promise<SubProduct> {
        return this.subProductService.update(id, body)
    }

    @ApiOkResponse({ type: SubProduct, description: 'get a sub-product by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Get(':id')
    async findById(@Param('id') id: IdDTO): Promise<SubProduct> {
        return this.subProductService.findById(id)
    }

    @ApiOkResponse({ type: SubProduct, description: 'delete a sub-product by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Delete(':id')
    async delete(@Param('id') id: IdDTO): Promise<SubProduct> {
        return this.subProductService.delete(id);
    }

}
