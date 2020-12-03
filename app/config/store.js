import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducers';


const middleware = [];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

export default store;