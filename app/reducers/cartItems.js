
// import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/cartItems'
// // import items from '../data/items';

// const initialState = {
//     items:[
//         //sample data but we shall be fetching from the api
//         {   id:1,
//             quantity:1,
//             name:'Prepared Mama Kit',price:120000,
//             description:"Prepared Mama kit  consists of 1 cotton wool, umblical knot,soap,baby towel ,washeners, and a customzed carry bag",
//             img:require('../../assets/mamakit.png')
//         },
//         {
//             id:2,
//             quantity:1,
//             name:'Mama kit value Pack',
//             price:80000,
//             description:"Prepared Mama kit  consists of 1 cotton wool, umblical knot,soap,baby towel ,washeners, and a customzed carry bag",
//             img:require('../../assets/mamakit.png')
//         },
//         {
//             id:3,
//             quantity:1,
//             name:'Emergency pills',
//             price:5000,
//             description:"Emergency contraceptive pills",
//             img:require('../../assets/emerpills.png')
//         },
//         {
//             id:4,
//             quantity:1,
//             name:'Family planning pills',
//             price:10000,
//             description:"Use this safe family planning method",
//             img:require('../../assets/familypills.png')
//         },
//         {
//             id:5,
//             quantity:1,
//             name:'Safe Male Condom',
//             price:5000,
//             description:"Safe and trusted male condom",
//             img:require('../../assets/mariecondoms.png')
//         }
//     ],
//     addedItems:[],
//     total:0,
// }

// const cartReducer = (state = initialState, action)=>{
//     //now handling adding to cart
//     switch(action.type){
//         case  ADD_TO_CART:
//             let addedItem = state.items.find(item => item.id === action.id)
//             //check if the action id exists in the addedItems
//             let existed_item = state.addedItems.find(item => action.id === item.id)
//             if(existed_item){
//                 addedItem.quantity += 1
//                 return{
//                     ...state,
//                     total:state.total + addedItem.price
//                 }
//             }else{
//                 // addedItem.quantity = addedItem.quantity;//since quality  wont change
//                 //calculating the total
//                 let newTotal = state.total + addedItem.price
//                 return{
//                     ...state,
//                     addedItems:[...state.addedItems, addedItem],
//                     total:newTotal  
//                 }
//             }
//         case REMOVE_ITEM:
//             let itemToRemove = state.addedItems.find(item => action.id === item.id)
//             let new_items = state.addedItems.filter(item =>action.id !== item.id)
//             //makinf sure our removed product is not part of the cart

//             //calculating the total
//             let newTotal  = state.total - (itemToRemove.price * itemToRemove.quantity)
//             console.log(itemToRemove)
//             return{
//                 ...state,
//                 addedItems:new_items,
//                 total:newTotal
//             }
//         case ADD_QUANTITY:
//             let product = state.items.find(item => item.id === action.id)
//             product.quantity += 1
//             let addedQtyTotal = state.total + product.price
//             return{
//                 ...state,
//                 total:addedQtyTotal
//             }
//         case SUB_QUANTITY:
//             let addedItem_sub = state.find(item => item.id === action.id)
//             //if the qt == 0 then it should be removed
//             if(addedItem_sub.quantity === 1){
//                 let new_items = state.addedItems.filter(item=>item.id !== action.id)
//                 let newTotal = state.total - addedItem_sub.price
//                 return {
//                     ...state,
//                     addedItems:new_items,
//                     total:newTotal
//                 }
//             }
//             else{
//                 addedItem_sub.quantity -= 1
//                 let newTotal = state.total - addedItem_sub.price
//                 return{
//                     ...state,
//                     total:newTotal
//                 }
//             }
//         default:
//             return state
//     }
// }

// export default cartReducer;


const initialState = {
    cartItems : [],
    wishListItems : [],
    itemsCount : 0

}

export default (state=initialState, action)=>{
    if(action.type=="ADD_TO_CART"){
            let exists = -1;
            if(state.itemsCount>0){
                for(let i=0; i<state.cartItems.length; i++){
                    if(state.cartItems[i].id==action.item.id){
                        exists = 1;
                        return {
                            ...state,
                            cartItems: state.cartItems.map(item => item.id === action.item.id ?
                                { ...item, quantity: item.quantity+1 } : 
                                item
                            ) ,
                        }
                    }
                }
            }
            if(exists==1){
               console.log("if");
               console.log(state.cartItems);
            }
            else{
                let updatedCartItems = [...state.cartItems, action.item];   
                let count = state.itemsCount + 1;
           return {
                ...state,
                itemsCount : count,
                cartItems : updatedCartItems ,
           
           } 
        }
       
    }
    else if(action.type=="DELETE_ITEM"){
        let newCartItems = state.cartItems.filter(
           (item)=>{
            return item.id!=action.item
           }
        );
        let count = state.itemsCount-1;
        return {
            ...state,
            itemsCount : count,
            cartItems : newCartItems ,
           
           } 
        
    }
    else if(action.type=="DECREASE_QUANTITY"){
        return {
            ...state,
            cartItems: state.cartItems.map(item => item.id === action.item ?
                { ...item, quantity: item.quantity-1 } : 
                item
            ) ,
            }
    }
    else if(action.type=="INCREASE_QUANTITY"){
        return {
            ...state,
            cartItems: state.cartItems.map(item => item.id === action.item ?
                { ...item, quantity: item.quantity+1 } : 
                item
            ) ,
            }
    }
    else if(action.type=="ADD_TO_WISH_LIST"){
       
        for(let i = 0; i < state.wishListItems.length; i++){
            if(state.wishListItems[i].id== action.item.id){
               
                return state;
            }
        }
        
        let updatedWishListItems = [...state.wishListItems, action.item];   
       return {
        ...state,
        wishListItems : updatedWishListItems ,
       
       } 
    }
    else if(action.type=="DELETE_FROM_CART"){
        let newWishListItems = state.wishListItems.filter(
            (item)=>{
             return item.id!=action.item.id
            }
         );
        
         return {
             ...state,
             wishListItems : newWishListItems ,
            
            } 
    }
    else if(action.type=="ORDER_PLACED"){
        return {
            ...state,
            itemsCount : 0,
            cartItems : [],
        }
    }
    return state
}  
