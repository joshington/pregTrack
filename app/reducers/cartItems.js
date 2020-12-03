
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/cartItems'
// import items from '../data/items';

import emerpills from '../screens/images/emerpills.png';
import familypills from '../screens/images/familypills.png';
import mariecondoms from '../screens/images/mariecondoms.png';
import mamakit from '../screens/images/mamakit.png';

const initialState = {
    items:[
        //sample data but we shall be picl
        {id:1,name:'Prepared Mama Kit',price:120000,
            description:"Prepared Mama kit  consists of 1 cotton wool, umblical knot,soap,baby towel ,washeners, and a customzed carry bag",
            img:mamakit,
        },
        {
            id:2,
            name:'Mama kit value Pack',
            price:80000,
            description:"Prepared Mama kit  consists of 1 cotton wool, umblical knot,soap,baby towel ,washeners, and a customzed carry bag",
            img:mamakit,
        },
        {
            id:3,
            name:'Emergency pills',
            price:5000,
            description:"Emergency contraceptive pills",
            img:emerpills,
        },
        {
            id:4,
            name:'Family planning pills',
            price:10000,
            description:"Use this safe family planning method",
            img:familypills,
        },
        {
            id:5,
            name:'Safe Male Condom',
            price:5000,
            description:"Safe and trusted male condom",
            img:mariecondoms,
        }
    ],
    addedItems:[],
    total:0,
}

const cartReducer = (state = initialState, action)=>{
    //now handling adding to cart
    switch(action.type){
        case  ADD_TO_CART:
            let addedItem = state.items.find(item => item.id === action.id)
            //check if the action id exists in the addedItems
            let existed_item = state.addedItems.find(item => action.id === item.id)
            if(existed_item){
                addedItem.quantity += 1
                return{
                    ...state,
                    total:state.total + addedItem.price
                }
            }else{
                addedItem.quantity = 1
                //calculating the total
                let newTotal = state.total + addedItem.price

                return{
                    ...state,
                    addedItems:[...state.addedItems, addedItem],
                    total:newTotal  
                }
            }
        case REMOVE_ITEM:
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item =>action.id !== item.id)
            //makinf sure our removed product is not part of the cart

            //calculating the total
            let newTotal  = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return{
                ...state,
                addedItems:new_items,
                total:newTotal
            }
        // case ADD_QUANTITY:
        //     let addedItem = state.items.find(item => item.id === action.id)
        //     addedItem.quantity += 1
        //     let newTotal = state.total = addedItem.price
        //     return{
        //         ...state,
        //         total:newTotal
        //     }
        default:
            return state
    }
}

export default cartReducer;