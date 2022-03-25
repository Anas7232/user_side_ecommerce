import { categoryConstants } from "../actions/constants";


const initState = {
    categories: []
};


export default (state = initState, action) => {
    switch(action.type){
        case categoryConstants.GET_ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                categories: action.payload.categories
            }
            break;
    }
    return state;
}