
export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const  GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const  GET_DETAILS_ERROR   = 'GET_DETAILS_ERROR';

export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';

//trying to use axios for fetching the data
export function getProductList() {
    type:GET_PRODUCTS_LIST
}

export function increase_quantity(quantity){
    type:INCREASE_QUANTITY,
    quantity+1
}

export function  decrease_quantity(quantity){
    type:DECREASE_QUANTITY,
    quantity-1
}




