import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from './dto/create_product.dto';
import { IdDTO } from './dto/id.dto';
import { UpdateProductDTO } from './dto/update_product.dto';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

@ApiTags('Product')
@Controller('product')
export class ProductController {

    constructor(
        private readonly productService:ProductService
        ){}

    @ApiCreatedResponse({ type: Product, description: 'post a product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Post()
    async create(@Body() body: CreateProductDTO): Promise<Product> {

        body.slug_product = `${body.vendor_id}_${body.name.trim().replace(/ /g,"_")}`
        body.discount_price = body.retail_price * Math.abs( 1 - body.discount )
        body.reported_times = 0

        return this.productService.create(body)
    }

    @ApiOkResponse({ type: [Product], description: 'get product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Get()
    async find(): Promise<Product[]> {
        return this.productService.find()
    }

    /* istanbul ignore next */
    @ApiOkResponse({ type: [Product], description: 'get product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Get('variances')
    async findWithVariance(): Promise<Product[]> {
        let products : any = await this.productService.find()

        for( var i in products ) {
            products[i] = {
                ...products[i]['_doc'],
                sub_products: await this.productService.findSubProduct(products[i]['_doc']._id.valueOf())
            }
        }

        return products
    }

    /* istanbul ignore next */
    @ApiOkResponse({ type: Product, description: 'get a product by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Get('variances/:id')
    async findByIdWithVariance(@Param('id') id: IdDTO): Promise<Product> {
        let product : any = await this.productService.findById(id)

        product = {
            ...product['_doc'],
            sub_products: await this.productService.findSubProduct(product['_doc']._id.valueOf())
        }

        // /* istanbul ignore next */
        // await this.productService.addRecordToIndex('products', {
        //     "test_dulu": "cob-coba dulu"
        // })

        return product
    }

    @ApiCreatedResponse({ type: Product, description: 'update a product' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Put(':id')
    async update(@Param('id') id: IdDTO, @Body() body: UpdateProductDTO): Promise<Product> {
        return this.productService.update(id, body)
    }

    @ApiOkResponse({ type: Product, description: 'get a product by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @ApiParam({ name: 'id', required: true })
    @Get(':id')
    async findById(@Param('id') id: IdDTO): Promise<Product> {
        return this.productService.findById(id)
    }

    @ApiOkResponse({ type: Product, description: 'delete a product by ID' })
    @ApiBadRequestResponse({ description: 'False Request Payload' })
    @Delete(':id')
    async delete(@Param('id') id: IdDTO): Promise<Product> {
        return this.productService.delete(id);
    }
}
