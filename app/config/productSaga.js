import {GET_PRODUCTS_LIST,GET_PRODUCTS_ERROR} from '../actions/products';
import {ULTRASCAN_SUCCESS,ULTRASCAN_FAIL} from '../actions/ultrascan';
import { takeEvery, call, put, select,takeLatest} from 'redux-saga/effects';
import {Api} from './api';


function* fetchProducts(){
    try {
        const receivedProducts = yield Api.getProductsFromApi();
        yield put({type:GET_PRODUCTS_LIST,receivedProducts:receivedProducts})
    }catch(error){
        yield put({type:GET_PRODUCTS_ERROR,error});
    }
}

//make ultrascan order
function* makeUltraScanOrder(action){
    try {
        const result = yield Api.makeUltraOrderFromApi(action.Order);
        if(result === true){
            yield put({type:ULTRASCAN_SUCCESS})
        }
    } catch (error) {
        yield put({type:ULTRASCAN_ERROR,error});
    }
}

export function* productSaga(){
    yield takeEvery(GET_PRODUCTS_LIST,fetchProducts);
    // yield takeEvery(ULTRASCAN_SUCCESS,makeUltraScanOrder);
}