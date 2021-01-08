import { ADD_TO_CART,DELETE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from '../actions/cartItems';

const initialState = {
    cartItems : [],
    wishListItems : [],
    itemsCount : 0,
    wishCount:0,

}

const cartReducer = (state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            let exists = false;
            if(state.itemsCount>0){
                for(let i=0; i<state.cartItems.length; i++){
                    if(state.cartItems[i].id ===action.id){
                        exists = true;
                        return {
                            ...state,
                            cartItems: state.cartItems.map(item => item.id === action.item.id ?
                                { ...item, quantity: item.quantity+1 } :item
                            ) ,
                        }
                    }
                }
            }
            else{
                let updatedCartItems = [...state.cartItems, action.item];   
                let count = state.itemsCount + 1;
            }
            return {
                ...state,
                itemsCount : count,
                cartItems : updatedCartItems ,
            } 
        case DELETE_ITEM:
            let newCartItems = state.cartItems.filter(
                (item) => {return item.id != action.items}
            )
            let count = state.itemsCount-1;
            return {
                ...state,
                itemsCount:count,
                cartItems:newCartItems,
            }
        case SUB_QUANTITY:
            return {
                ...state,
                cartItems:state.cartItems.map(
                    item => item.id === action.item 
                    ? {...item, quantity: item.quantity-1 } 
                    : item  
                ),
            }
        case ADD_QUANTITY:
            return {
                ...state,
                cartItems:state.cartItems.map(
                    item => item.id === action.item 
                    ? {...item, quantity: item.quatity+1 }
                    : item 
                ),
            }
        // case ADD_TO_WISH_LIST:
        //     for(let i=0; i < state.wishListItems.length; i++){
        //         if(state.wishListItems[i].id === action.item.id){
        //             return {
        //                 ...state,
        //                 wishListItems: state.wishListItems.map(item => item.id === action.item.id ?
        //                     { ...item, quantity: item.quantity+1 } :item
        //                 ) ,
        //             }
        //         }
        //         else{
        //             let updatedWishListItems = [...state.wishListItems, action.item];   
        //             let count = state.wishCount + 1;
        //         }
        //     }
        //     return{
        //         ...state,
        //         wishCount : count,
        //         wishListItems :updatedWishListItems
        //     }
        
        // case DELETE_FROM_WISH_LIST:
        //     let newWishListItems = state.wishListItems.filter(
        //         (item)=>{
        //          return item.id!=action.item.id
        //         }
        //      );
            
        //      return {
        //         ...state,
        //         wishListItems : newWishListItems , 
        //     }  
        default:
            return state
    }
        
}  

export default cartReducer;
