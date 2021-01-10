import { ADD_TO_CART,DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';

const initialState = {
    itemsCount:0,
    Cart:[],
    toalAmount:0
}

function cartReducer(state=initialState,action){
    switch(action.type){
        case  ADD_TO_CART:
            if(state.itemsCount === 0){
                //numberCart === 0 means that there are no products in the Carts array, add products
                //to the Carts array
                //IF NUMBERcART>0, cARTS ARRAY HAS PRODUCTS, CHECK IF HE PRODUCT has the same purchase
                //if the same increase quantity++,if purchased product is different from product in
                //Carts add the 
                let cart = {
                    id:action.payload.id,
                    quantity:action.payload.quantity,
                    name:action.payload.name,
                    image:action.payload.image,
                    price:action.payload.price,
                    amount:price*quantity,
                }
                state.Cart.push(cart);
            }else{
                let exists = false;
                state.Cart.map((item,key) => {
                    if(item.id === action.payload.id){
                        state.Cart[key].quantity++;
                        exists = true;
                    }
                })
                if(!exists){
                    let _cart = {
                        id:action.payload.id,
                        quantity:action.payload.quantity,
                        name:action.payload.name,
                        image:action.payload.image,
                        price:action.payload.price,
                        amount:price*quantity,
                    }
                    state.Cart.push(_cart)
                }
            }
            return {
                ...state,
                itemsCount:state.itemsCount+1,
                totalAmount:state.Cart.map(item  => {
                    state.totalAmount+item.amount
                })
            }
        default:
            return state
    }
}

export default cartReducer;