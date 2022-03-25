import axios from "../helper/axios";
import { categoryConstants } from "./constants"


export const getAllCategory = () => {
    return async dispatch => {

        dispatch({ type: categoryConstants.GET_ALL_CATEGORY_REQUEST });
        const res = await axios.get(`/category/getcategory`);
        console.log(res);

        if(res.status === 201){
            const { categoryList } = res.data;
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_SUCCESS,
                payload: {
                    categories: categoryList
                }
            })
        }else{
            dispatch({
                type: categoryConstants.GET_ALL_CATEGORY_FAILURE,
                payload: {
                    error: res.data.error
                }
            })
        }

    }
}