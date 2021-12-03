const stringId = "id"
const numberId = 1

export const StringMockId = stringId

export const MockId = {
    id: stringId
}

const ProductObject = {
    vendor_id: "vendor123",
    vendor_name: "tukang kupas",
    name: "pengupas alpukat",
    description: "blender",
    brand: "mitochiba",
    category_id: "007",
    retail_price: 10000,
    discount: 0.2,
    images_product: "https://google.com",
    dimension: {
        width: 50,
        length: 100,
        height: 90,
        weight: 200
    },
    status: "DRAFT",
    measurement_id: "ABC123",
    stock: 50,
    minimum_order_quantity: 1,
    warehouse_id: "whs1",
    storage: {
        rack: "rack1",
        bin: "bin2",
        level: "4a"
    },
    discount_price: 8000, 
    reported_times: 0,
    include_other_discount: true,
    term_of_payment_id : "top001",
    down_payment : 2000000,
    SKU: "product001"
}

const ProductObjectService = {
    id: stringId,
    vendor_id: "vendor123",
    vendor_name: "tukang kupas",
    name: "pengupas alpukat",
    description: "blender",
    brand: "mitochiba",
    category_id: "007",
    retail_price: 10000,
    discount: 0.2,
    images_product: "https://google.com",
    dimension: {
        width: 50,
        length: 100,
        height: 90,
        weight: 200
    },
    status: "DRAFT",
    measurement_id: "ABC123",
    stock: 50,
    minimum_order_quantity: 1,
    warehouse_id: "whs1",
    storage: {
        rack: "rack1",
        bin: "bin2",
        level: "4a"
    },
    slug_product: "vendor123_pengupas_alpukat", 
    discount_price: 8000, 
    reported_times: 0,
    include_other_discount: true,
    term_of_payment_id : "top001",
    down_payment : 2000000,
    SKU: "product001"
}

export const ProductPayload = ProductObject

export const ProductPayloadService = ProductObjectService

export const SuccsessCreateProduct = ProductObjectService

export const SuccsessGetProductById = (id) => {
    return {
        ...ProductObjectService,
        id: id,
    }
}

export function SuccsessUpdateProduct(id) {
    return SuccsessGetProductById(id)
}

export const ArrayOfObjectProduct = [
    {
        _id: 'Product1',
        vendor_id: "vendor123",
        vendor_name: "tukang kupas",
        name: "pengupas alpukat",
        description: "blender",
        brand: "mitochiba",
        category_id: "007",
        retail_price: 10000,
        discount: 0.2,
        images_product: "https://google.com",
        dimension: {
            width: 50,
            length: 100,
            height: 90,
            weight: 200
        },
        status: "DRAFT",
        measurement_id: "ABC123",
        stock: 50,
        minimum_order_quantity: 1,
        warehouse_id: "whs1",
        storage: {
            rack: "rack1",
            bin: "bin2",
            level: "4a"
        },
        slug_product: "vendor123_pengupas_alpukat", 
        discount_price: 8000, 
        reported_times: 0,
        include_other_discount: true,
        term_of_payment_id : "top001",
        down_payment : 2000000,
        SKU: "product001"
    },
    {   
        _id: 'Product2',
        vendor_id: "vendor123",
        vendor_name: "tukang kupas",
        name: "pengupas pisang",
        description: "pengupas pisang canggih",
        brand: "samsung",
        category_id: "006",
        retail_price: 15000,
        discount: 0.1,
        images_product: "https://google.com",
        dimension: {
            width: 75,
            length: 200,
            height: 80,
            weight: 100
        },
        status: "DRAFT",
        measurement_id: "ABC124",
        stock: 60,
        minimum_order_quantity: 2,
        warehouse_id: "whs2",
        storage: {
            rack: "rack2",
            bin: "bin4",
            level: "7a"
        },
        slug_product: "vendor123_pengupas_pisang", 
        discount_price: 13500, 
        reported_times: 0,
        include_other_discount: false,
        term_of_payment_id : "top002",
        down_payment : 1000000,
        SKU: "product002"
    }
]