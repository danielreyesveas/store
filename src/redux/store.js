import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

export const store = createStore(
    rootReducer, 
    compose(
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__(): f => f
                
    )
);

export const persistor = persistStore(store);

export default { store, persistor };