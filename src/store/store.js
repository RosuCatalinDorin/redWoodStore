import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import data from "../data/data";


const initailState = {};



const  reducer = (state,action) => {
    return {products: data.products}
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initailState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;