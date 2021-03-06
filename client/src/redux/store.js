import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware];
const isDevelopment = (process.env.NODE_ENV === 'development');

if (isDevelopment === 'development'){
    middlewares.push(logger);
}

export const store = createStore(
    rootReducer,     
    compose(
        applyMiddleware(...middlewares),
        isDevelopment && typeof window === 'object' &&

            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
                
    )
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };