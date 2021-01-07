import {createStore,applyMiddleware,compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers';

// if(process.env.NODE_ENV === 'development'){
//     middleware.push(logger);
// }
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk)
// )

// export default store;
function configureStore(initialState){
    const middleware = [thunk]
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(...middleware)));
    return store;
}

export default configureStore;