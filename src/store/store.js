import {createStore, combineReducers} from "redux";
import {card} from "views/store/reducers";

const reducers = {
    card,
};

const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer)