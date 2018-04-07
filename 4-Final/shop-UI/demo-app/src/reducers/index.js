
import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { reviewsReducer } from './reviews';
import { statusReducer } from './statusReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    status: statusReducer
});

export default rootReducer;