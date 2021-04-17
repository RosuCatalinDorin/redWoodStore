import {
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS
} from "../constants/productConstants";
import firebase from "../firebase/FireBase";
export const listProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST
    })
    try {
           firebase.collection('products').get().then( doc => {
               const data = doc.docs.map((doc) => ({id: doc.id, ...doc.data()}))
               dispatch({type: PRODUCT_LIST_SUCCESS, payload: data})
           })
    } catch (err) {
        dispatch({type:PRODUCT_LIST_FAIL,payload:err.message})
    }
}
export const detailsProduct =(productId) => async (dispatch) =>{
    dispatch({type:PRODUCT_DETAILS_REQUEST,payload:productId})
    try {
       // const {data} =await axios.get(`/web/getProductById/${productId}`)

        firebase.collection('products')
            .doc(productId).get().then(doc =>{
                const data = doc.data();
                       data.id = productId;
            console.log(data);
            dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data})
        })

    } catch (err){
        dispatch({type:PRODUCT_DETAILS_FAIL,payload:
         err.response && err.response.data.message
            ?err.response.data.message
            : err.message})
    }
}