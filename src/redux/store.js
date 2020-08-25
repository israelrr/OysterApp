import { createStore, combineReducers } from 'redux';
import  usersReducer from './usersReducer';
import dataCardsReducer from './dataCardsReducer';

export default () => {
    const store = createStore(combineReducers({
        users: usersReducer,
        dataCards: dataCardsReducer
    }));

    return store;
};