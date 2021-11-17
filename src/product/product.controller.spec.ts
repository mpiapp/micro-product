import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ProductControllerMock } from './mocks/product-controller.mock';
import { ArrayOfObjectProduct, ProductPayload, SuccsessCreateProduct } from './mocks/product-payload.mock';
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

  // it(`should update a product (Controller)`, async () => {
  //   expect(await controller(MockId, ProductPayload)).toEqual(SuccsessUpdateproduct(MockId.id))
  // })

  // it(`should get a product (Controller)`, async () => {
  //   expect(await controller.findById(MockId)).toEqual(SuccsessGetproductById(MockId.id))
  // })

  it(`should get a list of products (Controller)`, async () => {
    expect(await controller.find()).toEqual(ArrayOfObjectProduct)
  })

  // it(`should delete a product (Controller)`, async () => {
  //   expect(await controller.delete(MockId)).toEqual(SuccsessGetRoleById(MockId.id))
  // })
});
