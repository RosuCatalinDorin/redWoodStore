import {ORDER_ADD,ORDER_SAVE_SUCCES,ORDER_SAVE_FAIL,ORDER_SAVE_REQUEST} from "../constants/orderConstants"

export const orderReducer = (state = {order:{}},action) =>{
    debugger;
    switch (action.type){
        case ORDER_ADD :
            return{...state, loading: false,msg:false,err:false}
        case ORDER_SAVE_REQUEST :
            return {...state,loading: true,msg:false,err:false}
        case ORDER_SAVE_SUCCES :
            return {...state,loading: false,msg:action.payload,err:false}
        case ORDER_SAVE_FAIL :
            return {...state,loading: false, msg:false ,err: action.payload}
        default:
            return state;
    }
};