import {ADD_TO_CARD, REMOVE_TO_CARD} from "./actions";

export const card  = (state= [], action) => {
    const {type,payload} =action;
    switch (type){
        case ADD_TO_CARD :{
            const {id} =payload;
            const newCard = {
                id,
                isComplete:false
            }
            return state.concat(newCard)
        }
        case REMOVE_TO_CARD : {
            const {id} = payload;
            return state.filter(item=>item.id !==id)
        }
        default:
            return state
    }
}