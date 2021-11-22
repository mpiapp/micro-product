import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ArrayOfObjectSubProduct, MockId, StringMockId, SubProductPayload, SubProductPayloadService, SuccsessCreateSubProduct, SuccsessGetSubProductById, SuccsessUpdateSubProduct } from './mocks/product-payload.mock';
import { SubProductServiceMock } from './mocks/sub_product-service.mock';
import { SubProduct } from './schema/sub-product.schema';
import { SubProductService } from './sub-product.service';

describe('SubProductService', () => {
  let service: SubProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SubProductService, {
          provide: getModelToken(SubProduct.name),
          useValue: SubProductServiceMock
        },
      ],
    }).compile();

    service = module.get<SubProductService>(SubProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a sub-product', async () => {
    expect(await service.create(SubProductPayloadService)).toEqual(SuccsessCreateSubProduct);
  });

  it('should update a sub-product', async () => {
    expect(await service.update(MockId,SubProductPayload)).toEqual(SuccsessUpdateSubProduct(StringMockId));
  });

  it('should get a sub-product', async () => {
    expect(await service.findById(MockId)).toEqual(SuccsessGetSubProductById(StringMockId));
  });

  it('should get list of sub-products', async () => {
    expect(await service.find()).toEqual(ArrayOfObjectSubProduct);
  });

  it('should delete a sub-product', async () => {
    expect(await service.delete(MockId)).toEqual(SuccsessGetSubProductById(StringMockId));
  });

});
