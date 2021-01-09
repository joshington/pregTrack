import {combineReducers} from 'redux';

import products from './products';
import cartReducer from './cart';
import ultrascan from './ultrascan';


export default combineReducers({
    ultrascan,
    products,
    cartReducer,
});

