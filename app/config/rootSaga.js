import {call,all} from 'redux-saga/effects';
import {productSaga} from './productSaga';


export default function* rootSaga(){
    yield call(productSaga);
}