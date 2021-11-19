import { ArrayOfObjectSubProduct, SuccsessCreateSubProduct } from "./product-payload.mock"

export const SubProductServiceMock = {
    // ==================================== service ====================================
    create: jest.fn().mockImplementation((dto) => { return { id: expect.anything(), ...dto } }),
    findById: jest.fn().mockImplementation((id) => { return { id, ...SuccsessCreateSubProduct } }),
    find: jest.fn().mockImplementation(() => { return ArrayOfObjectSubProduct }),
    findByIdAndUpdate: jest.fn().mockImplementation((id, dto) => { return { id: id.id, ...dto } }),
    findByIdAndDelete: jest.fn().mockImplementation((id) => { return { id: id.id, ...SuccsessCreateSubProduct } })
}