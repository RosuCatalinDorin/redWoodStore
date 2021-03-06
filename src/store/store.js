import {createStore, compose, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";
import data from "../data/data";
import {productDetailsReducer, productListReducer} from "../reducers/productReducers";
import {cartReducer} from "../reducers/cartReducers";


const initailState = {
    cart:{
        cartItems: localStorage.getItem('cartItems')
            ? JSON.parse(localStorage.getItem('cartItems'))
            : [],
    }
};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart:cartReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initailState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;