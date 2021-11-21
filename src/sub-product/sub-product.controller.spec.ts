import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ArrayOfObjectSubProduct, MockId, StringMockId, SubProductPayload, SuccsessCreateSubProduct, SuccsessGetSubProductById, SuccsessUpdateSubProduct } from './mocks/product-payload.mock';
import { SubProductControllerMock } from './mocks/sub_product-controller.mock';
import { SubProduct } from './schema/sub-product.schema';
import { SubProductController } from './sub-product.controller';
import { SubProductService } from './sub-product.service';

describe('SubProductController', () => {
  let controller: SubProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubProductController],
      providers: [
        SubProductService, {
          provide: getModelToken(SubProduct.name),
          useValue: SubProductControllerMock
        },
      ]
    }).compile();

    controller = module.get<SubProductController>(SubProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it(`should create a sub-product (Controller)`, async () => {
    expect(await controller.create(SubProductPayload)).toEqual(SuccsessCreateSubProduct)
  })

  it(`should update a sub-product (Controller)`, async () => {
    expect(await controller.update(MockId, SubProductPayload)).toEqual(SuccsessUpdateSubProduct(StringMockId))
  })

  it(`should get a sub-product (Controller)`, async () => {
    expect(await controller.findById(MockId)).toEqual(SuccsessGetSubProductById(StringMockId))
  })

  it(`should get a list of sub-products (Controller)`, async () => {
    expect(await controller.find()).toEqual(ArrayOfObjectSubProduct)
  })

  it(`should delete a sub-product (Controller)`, async () => {
    expect(await controller.delete(MockId)).toEqual(SuccsessGetSubProductById(StringMockId))
  })
});
