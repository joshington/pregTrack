import { ADD_TO_CART,DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';

const initialState = {
    itemsCount:0,
    Cart:[],
    totalAmount:0
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
                    id:action.payload.itemId,
                    quantity:action.payload.quantity,
                    name:action.payload.itemTitle,
                    image:action.payload.itemImg,
                    price:action.payload.itemPrice,
                    amount:action.payload.itemPrice*action.payload.quantity,
                    // itemTitle,
                    // itemImg,
                    // itemPrice,
                    // itemDescription,
                    // quantity,
                   
                }
                state.Cart.push(cart);
                return {
                    ...state,
                    itemsCount:state.itemsCount+1,
                    totalAmount:state.Cart.map(item  => {
                        state.totalAmount+item.amount
                    })
                }
            }else{
                let exists = false;
                state.Cart.map((item,key) => {
                    if(item.id === action.payload.id){
                        state.Cart[key].quantity++;
                        exists = true;
                    }
                    return {
                        ...state,
                        itemsCount:state.itemsCount,
                    }
                })
                if(!exists){
                    let _cart = {
                        id:action.payload.itemId,
                        quantity:action.payload.quantity,
                        name:action.payload.itemTitle,
                        image:action.payload.itemImg,
                        price:action.payload.itemPrice,
                        amount:action.payload.itemPrice*action.payload.quantity,
                    }
                    state.Cart.push(_cart)
                    return {
                        ...state,
                        itemsCount:state.itemsCount+1,
                        totalAmount:state.Cart.map(item  => {
                            state.totalAmount+item.amount
                        })
                    }
                }
            }
        case ADD_QUANTITY:
            return {
                ...state,
                Cart:state.Cart.map((item,key) => {
                    if(item.id === action.id){
                        state.Cart[key].quantity++;
                    }
                })
            }
        case SUB_QUANTITY:
            return {
                ...state,
                Cart:state.Cart.map((item,key) => {
                    if(item.id === action.id){
                        state.Cart[key].quantity--;
                    }
                })
            }
        case DELETE_ITEM:
            let newCartItems = state.Cart.filter(
                (item) => {return item.id !== action.id}
            )
            let count = state.itemsCount-1;
            return {
                ...state,
                itemsCount:count,
                Cart:newCartItems,
            }

        default:
            return state
    }
}

export default cartReducer;