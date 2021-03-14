import {ORDER_ADD} from "../constants/orderConstants"

export const orderReducer = (state = {order:{}},action) =>{
    debugger;
    switch (action.type){
        case ORDER_ADD :
            return{
                ...state,
            }
        default:
            return state;
    }
};