import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import storage from '../middleware/storage.js';
import loginReducer from '../reducers/loginReducer.js';

export default function configureStore(initialState) {
    const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        storage
    )(create);

    const store = createStoreWithMiddleware(combineReducers({ loginReducer }), initialState);
    return store;
}