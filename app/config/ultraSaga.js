import {GET_PRODUCTS_LIST,GET_PRODUCTS_ERROR} from '../actions/products';
import {ULTRASCAN_SUCCESS,ULTRASCAN_ERROR} from '../actions/ultrascan';
import { takeEvery, call, put, select,takeLatest} from 'redux-saga/effects';
import {Api} from './api';


//make ultrascan order
function* makeUltraScanOrder(action){
    try {
        const result = yield Api.makeUltraOrderFromApi(action.payload);
        if(result === true){
            yield put({type:ULTRASCAN_SUCCESS})
        }
    } catch (error) {
        yield put({type:ULTRASCAN_ERROR,error});
    }
}

export function* ultraSaga(){
    yield takeEvery(ULTRASCAN_SUCCESS,makeUltraScanOrder);
}