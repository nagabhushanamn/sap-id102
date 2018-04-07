
// review-state
// {
//     "1":[
//         {},
//         {}
//     ],
//     "2":[
//         {},
//         {}
//     ]
// }

import { SUBMIT_NEW_REVIEW, LOAD_REVIEWS } from '../constants'
export function reviewsReducer(state = {}, action) {
    switch (action.type) {
        case LOAD_REVIEWS:
            return Object.assign({}, state, { [action.id]: action.reviews });
        case SUBMIT_NEW_REVIEW: {
            let productId = action.review.productId;
            let reviews = state[productId];
            reviews = reviews || [];
            reviews = [...reviews, action.review];
            state = Object.assign({}, state, { [productId]: reviews })
            return state;
        }
        default:
            return state;
    }
}