import {ORDER_ADD, ORDER_SAVE_SUCCES, ORDER_SAVE_FAIL, ORDER_SAVE_REQUEST} from "../constants/orderConstants";
import {PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS} from "../constants/productConstants";
import {firebase_con,analytics} from "../firebase/FireBase";


import emailjs from "emailjs-com";
export const addToOrder = (data) => (dispatch, getState) => {
    dispatch({
        type: ORDER_SAVE_SUCCES
    })
    dispatch({
        type: ORDER_ADD,
        payload: data
    })
}

export const saveOrderToDb = (order) => async (dispatch) => {
    try {
        dispatch({
            type: ORDER_SAVE_REQUEST,
            payload: order
        })
        debugger;

        firebase_con.collection("order").add(order).then(doc => {
            console.log(doc);
            debugger;
            analytics.logEvent('place_order',{skill:23,name:"test"})
            const responseTodoItem = order;
            responseTodoItem.id = doc.id;
            console.log(responseTodoItem);
            sendMail(order)
            dispatch({type: ORDER_SAVE_SUCCES,payload:"OK"})
        })
    } catch (err) {
        dispatch({type:ORDER_SAVE_FAIL,payload:err.message})
    }
}
const sendMail = (doc)  =>{
    emailjs.send("service_a1h4ryc", "template_wi9c7zd", doc, "user_XHkbwhHnSrHIrg4QOoDcb");
}