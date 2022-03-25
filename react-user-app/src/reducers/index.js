import { combineReducers } from 'redux';
import categoryReducers from './category.reducers';
import productReducers from './product.reducers';

const rootReducer = combineReducers({
    category: categoryReducers,
    product: productReducers
});

export default rootReducer