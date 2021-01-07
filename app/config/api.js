import { takeEvery, call, put, select } from 'redux-saga/effects';
import {GET_PRODUCTS_LIST,GET_PRODUCTS_ERROR} from '../actions/products';


//==========structure of the logic========
//1. get the products since its acall to the api
//2. product details===requires to talk to the api
///3.

const urlGetProducts = 'https://hero-pregbackend.herokuapp.com/shop/';
const urlOrderUltrascan = 'https://hero-pregbackend.herokuapp.com/ultrascan/order_scan/';

export const getProductsFromApi = function* (){
    const response = yield fetch(urlGetProducts, {
        method:'GET',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
            // 'Content-Type':'application/json',
        },
        body: '',
    }).then((response) => products =  response.status === 200 ? response.json():[]);
    // .catch((error) => console.log(error));
    return products;
}

// useEffect(() => {
//     fetch('https://hero-pregbackend.herokuapp.com/shop/')
//       .then((response) => products = response.json())
//       .then((products) => setData(products))
//       .catch((error) => console.error(error))
//       .finally(() => setLoading(false));
//   }, []);


//=============send POST request to add ultrascan order.
function* makeUltraOrderFromApi(Order){
    const response = yield fetch(urlOrderUltrascan, {
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            location:Order.location,
            contact:Order.contact,
        }),
    });
    console.log(`response = ${JSON.stringify(response)}`);
    return yield (response.status === true);
}
export const Api = {
    getProductsFromApi,
    // makeUltraOrderFromApi,
}

// const fetchProducts = function* (){
//     try{
//         const response = yield call(getProducts);
//         const products = yield response.json()
//         //what should the saga do incase the response is not returned

//         if(result.error){
//             yield put({type:GET_PRODUCTS_ERROR,error:products.error});
//         }else{
//             yield put({type: GET_PRODUCTS_LIST,payload:products});
//         }
//     }catch(e){
//         //what should happen incase our api doesnt return;
//         yield put({type:GET_PRODUCTS_ERROR,error:e.message});
//     }

// }

// const rootSaga = function* (){
//     yield takeEvery(GET_PRODUCTS_LIST,fetchProducts);
// }

// export default rootSaga;