import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ArrayOfObjectProduct, MockId, ProductPayload, ProductPayloadService, StringMockId, SuccsessCreateProduct, SuccsessGetProductById, SuccsessUpdateProduct } from './mocks/product-payload.mock';
import { ProductServiceMock } from './mocks/product-service.mock';
import { ProductService } from './product.service';
import { Product } from './schema/product.schema';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductService, {
          provide: getModelToken(Product.name),
          useValue: ProductServiceMock
        },
    ]
    }).compile();

    service = module.get<ProductService>(ProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a product', async () => {
    expect(await service.create(ProductPayloadService)).toEqual(SuccsessCreateProduct);
  });

  it('should update a product', async () => {
    expect(await service.update(MockId,ProductPayload)).toEqual(SuccsessUpdateProduct(StringMockId));
  });

  it('should get a product', async () => {
    expect(await service.findById(MockId)).toEqual(SuccsessGetProductById(StringMockId));
  });

  it('should get list of products', async () => {
    expect(await service.find()).toEqual(ArrayOfObjectProduct);
  });
});
