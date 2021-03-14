import {ORDER_ADD} from "../constants/orderConstants";

export const addToOrder = (data) => (dispatch,getState) => {
    dispatch({
        type:ORDER_ADD,
        payload:data
    })
}