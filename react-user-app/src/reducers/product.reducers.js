import { productConstants } from "../actions/constants"

const initState = {
    products : [],
    productByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under25k: [],
        under30k: [],
        under35k: [],
        under40k: [],
        under45k: [],
        under50k: []
    }
}

export default (state = initState, action) => {
    switch(action.type){
        case productConstants.GET_PRODUCT_BY_SLUG:
            state = {
                ...state,
                products: action.payload.products,
                productByPrice: {
                    ...action.payload.productByPrice
                }
            }
            break;
    }
    return state;
}