export const  ADD_TO_CART = 'ADD_TO_CART';

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
// export const ADD_SHIPPING = 'ADD_SHIPPING';


//add cart action
//id,name,quantity,price
export const addToCart= (payload)=>({
    type: ADD_TO_CART,
    payload
})
//remove item action
export const removeItem=(id)=>({
    type: REMOVE_ITEM,
    id

})
//subtract qt action
export const subtractQuantity=(id)=>({
    type: SUB_QUANTITY,
    id
})
//add qt action
export const addQuantity=(id)=>({
    type: ADD_QUANTITY,
    id
});

export const deleteItem = (id) => ({
    type:DELETE_ITEM,
    id
})