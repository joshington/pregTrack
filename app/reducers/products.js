import { GET_PRODUCTS_LIST,GET_PRODUCTS_ERROR,GET_PRODUCT_DETAILS,GET_DETAILS_ERROR} from '../actions/ultrascan';

const initialState = {
    productList: [],
    // productDetails:[],
    // isFetching:false,
    error:null,
};

const productsReducer = (state = initialState,action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default productsReducer;