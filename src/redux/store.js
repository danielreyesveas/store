import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [];
const isDevelopment = (process.env.NODE_ENV === 'development');

if (isDevelopment === 'development'){
    middlewares.push(logger);
}

export const store = createStore(
    rootReducer,     
    compose(
        applyMiddleware(...middlewares),
        typeof isDevelopment && window === 'object' &&

            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
                
    )
);

export const persistor = persistStore(store);

export default { store, persistor };