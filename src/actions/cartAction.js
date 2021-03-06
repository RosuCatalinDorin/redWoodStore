import {CART_ADD_ITEM} from "../constants/cartConstants";
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