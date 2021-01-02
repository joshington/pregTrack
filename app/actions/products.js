export const GET_PRODUCTS_LIST = 'GET_PRODUCTS_LIST';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

export const  GET_PRODUCT_DETAILS = 'GET_PRODUCT_DETAILS';
export const  GET_DETAILS_ERROR   = 'GET_DETAILS_ERROR';


export function setProductList(productList) {
    return {
        type:GET_PRODUCTS_LIST,
        payload:productList,
    }
}


export function setProductDetails(productDetails){
    return {
        type:GET_PRODUCT_DETAILS,
        payload:productDetails,
    }
}

export function getProductList() {
    return async (dispatch) => {
        try {
            const apiReq = await fetch('https://hero-pregbackend.herokuapp.com', {
                method: 'GET',
            });
            console.log(apiReq);
            await dispatch(setProductList(apiReq));
            return apiReq || [];
        }catch (error){
            console.error(error);
            return dispatch({
                type:GET_PRODUCTS_ERROR
            })
        }
    }
}

// export const getProduct = id => {
//     fetch(`http://localhost:8000/products/${id}`)
// }
export function getProductDetails(id){
    return async (dispatch) => {
        try{
            const productDetails =  await fetch(`https://hero-pregbackend.herokuapp.com/shop/products/${id}`,{
                method:'GET',
            });
            console.log(productDetails);
            await dispatch(setProductDetails(productDetails));
            return productDetails || []
        }catch(error){
            console.error(error);
            return dispatch({
                type:GET_DETAILS_ERROR
            })
        }
    }
}