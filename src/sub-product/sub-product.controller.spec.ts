import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
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
});
