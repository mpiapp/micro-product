import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { SubProduct } from '../sub-product/schema/sub-product.schema';
import { SubProductControllerMock } from '../sub-product/mocks/sub_product-controller.mock';
import { SubProductService } from '../sub-product/sub-product.service';
import { ProductControllerMock } from './mocks/product-controller.mock';
import { ArrayOfObjectProduct, MockId, ProductPayload, StringMockId, SuccsessCreateProduct, SuccsessGetProductById, SuccsessUpdateProduct } from './mocks/product-payload.mock';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService, {
          provide: getModelToken(Product.name),
          useValue: ProductControllerMock
        },
        SubProductService, {
          provide: getModelToken(SubProduct.name),
          useValue: SubProductControllerMock
        },
    ]
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`should create a product (Controller)`, async () => {
    expect(await controller.create(ProductPayload)).toEqual(SuccsessCreateProduct)
  })

  it(`should update a product (Controller)`, async () => {
    expect(await controller.update(MockId, ProductPayload)).toEqual(SuccsessUpdateProduct(StringMockId))
  })

  it(`should get a product (Controller)`, async () => {
    expect(await controller.findById(MockId)).toEqual(SuccsessGetProductById(StringMockId))
  })

  it(`should get a list of products (Controller)`, async () => {
    expect(await controller.find()).toEqual(ArrayOfObjectProduct)
  })

  it(`should delete a product (Controller)`, async () => {
    expect(await controller.delete(MockId)).toEqual(SuccsessGetProductById(StringMockId))
  })

  it(`should get a list of products & it's variance (Controller)`, async () => {
    expect(await controller.findWithVariance()).toEqual("")
  })
});
