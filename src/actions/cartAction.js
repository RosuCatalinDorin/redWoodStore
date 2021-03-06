import {CART_ADD_ITEM, CART_REMOVE_ITEM} from "../constants/cartConstants";
import Axios from "axios";

export const addToCart = (product, qty) => async (dispatch, getState) => {
 //   const {data} = await Axios.get('/web/products/');
    dispatch({
        type:CART_ADD_ITEM,
        payload:{
           product:product,
           qty:qty
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
export const removeFromCart = (productId) => (dispatch, getState) => {
    debugger;
    dispatch({ type: CART_REMOVE_ITEM, payload: productId });
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};