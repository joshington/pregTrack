import { takeEvery, call, put, select } from 'redux-saga/effects';
import {GET_PRODUCTS_LIST,GET_PRODUCTS_ERROR} from '../actions/products';


//==========structure of the logic========
//1. get the products since its acall to the api
//2. product details===requires to talk to the api
///3.
const urlOrderUltrascan = 'https://hero-pregbackend.herokuapp.com/ultrascan/order_scan/';

//=============send POST request to add ultrascan order.
function* makeUltraOrderFromApi(payload){
    const response = yield fetch(urlOrderUltrascan, {
        method:'POST',
        headers:{
            Accept:'application/json',
            'Content-Type':'application/json',
        },
        body:JSON.stringify({
            location:payload.location,
            contact:payload.contact,
        }),
    });
    // console.log(`response = ${JSON.stringify(response)}`);
    
    return yield (response.status === true);
}
export const Api = {
    makeUltraOrderFromApi,
}

