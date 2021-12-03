import { ArrayOfObjectProduct, SuccsessCreateProduct } from "./product-payload.mock"

export const ProductServiceMock = {
    // ==================================== service ====================================
    create: jest.fn().mockImplementation((dto) => { return { id: expect.anything(), ...dto } }),
    findById: jest.fn().mockImplementation((id) => { return { id, ...SuccsessCreateProduct } }),
    find: jest.fn().mockImplementation(() => { return ArrayOfObjectProduct }),
    findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => { return { id: id.id, ...dto } }),
    findByIdAndDelete: jest.fn().mockImplementation((id) => { return { id: id.id, ...SuccsessCreateProduct } })
}