import { GET_PRODUCTS_LIST,GET_PRODUCTS_ERROR,GET_PRODUCT_DETAILS,GET_DETAILS_ERROR} from '../actions/ultrascan';

const initialState = {
    productList: [],
    productDetails:[],
    error:null,
};

const productsReducer = (state = initialState,action) => {
    switch(action.type){
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                productList:action.payload.productList
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                error:action.payload.error
            }
        case GET_PRODUCT_DETAILS:
            return {
                ...state,
                productDetails:action.payload.productDetails
            }
        case GET_DETAILS_ERROR:
            return {
                ...state,
                error:action.payload.error
            }
        default:
            return state;
    }
}

export default productsReducer;