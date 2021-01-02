import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const configureStore = () => {
    return createStore(reducer,applyMiddleware(thunk));
}
// const middleware = [];

// const store = createStore(
//     reducer,
//     applyMiddleware(...middleware)
// )

export default configureStore;