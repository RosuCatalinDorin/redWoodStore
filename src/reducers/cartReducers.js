import {CART_ADD_ITEM} from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            let item = action.payload;
            const existItem = state.cartItems.find((x) => x.product.id === item.product.id);
            if (existItem) {
                debugger;
                item.qty = item.qty + 1;
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) =>
                        x.product.id === item.product.id ? item : x
                    )
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }


        default:
            return state;
    }

}