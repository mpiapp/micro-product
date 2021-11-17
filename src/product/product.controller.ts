import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateProductDTO } from './dto/create_product.dto';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

@ApiTags('Product')
@Controller('product')
export class ProductController {

    constructor(private readonly productService:ProductService){}

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

}
