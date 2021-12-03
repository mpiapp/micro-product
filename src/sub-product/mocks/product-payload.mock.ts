const stringId = "id"
const numberId = 1

export const StringMockId = stringId

export const MockId = {
    id: stringId
}

export const SubProductPayload = {
    product_id: "product123",
    variance: "50m red",
    image_sub_product: ["image1", "image2"],
    made_date: new Date('December 25, 1995 23:15:30'),
    expired_date: new Date('December 25, 2021 23:15:30'),
    quantity: 40,
    safety_stock_quantity: 5
}

export const SubProductPayloadService = {
    id: stringId,
    product_id: "product123",
    variance: "50m red",
    image_sub_product: ["image1", "image2"],
    made_date: new Date('December 25, 1995 23:15:30'),
    expired_date: new Date('December 25, 2021 23:15:30'),
    quantity: 40,
    slug_sub_product: "product123_50m_red",
    safety_stock_quantity: 5
}

export const SuccsessCreateSubProduct = {
    id: stringId,
    product_id: "product123",
    variance: "50m red",
    image_sub_product: ["image1", "image2"],
    made_date: new Date('December 25, 1995 23:15:30'),
    expired_date: new Date('December 25, 2021 23:15:30'),
    quantity: 40,
    slug_sub_product: "product123_50m_red",
    safety_stock_quantity: 5
}

export const SuccsessGetSubProductById = (id) => {
    return {
        id: id,
        product_id: "product123",
        variance: "50m red",
        image_sub_product: ["image1", "image2"],
        made_date: new Date('December 25, 1995 23:15:30'),
        expired_date: new Date('December 25, 2021 23:15:30'),
        quantity: 40,
        slug_sub_product: "product123_50m_red",
        safety_stock_quantity: 5
    }
}

export function SuccsessUpdateSubProduct(id) {
    return SuccsessGetSubProductById(id)
}

export const ArrayOfObjectSubProduct = [
    {
        _id: 'SubProduct1',
        product_id: "product123",
        variance: "50m red",
        image_sub_product: ["image1", "image2"],
        made_date: new Date('December 25, 1995 23:15:30'),
        expired_date: new Date('December 25, 2021 23:15:30'),
        quantity: 40,
        slug_sub_product: "product123_50m_red",
        safety_stock_quantity: 5
    },
    {   
        _id: 'SubProduct2',
        product_id: "product234",
        variance: "100m blue",
        image_sub_product: ["image1", "image2", "image3"],
        made_date: new Date('December 27, 1995 23:15:30'),
        expired_date: new Date('December 27, 2021 23:15:30'),
        SKU: 15,
        quantity: 50,
        slug_sub_product: "product234_100m_blue",
        safety_stock_quantity: 8
    }
]