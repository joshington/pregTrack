import {call,all} from 'redux-saga/effects';
import {ultraSaga} from './ultraSaga';


export default function* rootSaga(){
    yield call(ultraSaga);
}