
import { combineReducers, createStore } from 'redux';

//------------------------------------------------
// Action(s)
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_NEW_REVIEW = "add_new_review";
const BUY = "buy";
//------------------------------------------------
// Action Creator(s)
function increment(value) {
    return { type: INCREMENT, value };
}
function decrement(value) {
    return { type: DECREMENT, value };
}
function addNewReview(review) {
    return { type: ADD_NEW_REVIEW, review }
}
function buy(product) {
    return { type: BUY, product }
}
//------------------------------------------------
// Reducer(s)
function counterReducer(state = { count: 1 }, action) {
    console.log('counterReducer');
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, { count: state.count + action.value });
        case ADD_NEW_REVIEW:
            return Object.assign({}, { count: state.count + 1 });
        case DECREMENT:
            return Object.assign({}, { count: state.count - action.value });
        default:
            return state;
    }
}
function reviewsReducer(state = [], action) {
    console.log('reviewsReducer');
    switch (action.type) {
        case ADD_NEW_REVIEW:
            return [...state, action.review];
        default:
            return state;

    }
}
function cartReducer(state = [], action) {
    console.log('cartReducer');
    switch (action.type) {
        case BUY:
            return [...state, action.product];
        default:
            return state;

    }
}
//------------------------------------------------
const rootReducer = combineReducers({
    counter: counterReducer,
    reviews: reviewsReducer,
    cart: cartReducer
});
//------------------------------------------------
// store
const preLoadedState = {
    counter: {
        count: 100,
    },
    reviews: [
        { stars: 5, author: "who@email.com", body: 'i love redux' }
    ],
    cart: []
};
const store = createStore(rootReducer, preLoadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//---------------------------------------------------
// plain-js or  React -view
let plusOneBtn = document.getElementById('plusOne');
let minusOneBtn = document.getElementById('minusOne');
plusOneBtn.addEventListener('click', () => {
    store.dispatch(increment(1));
});
minusOneBtn.addEventListener('click', () => {
    store.dispatch(decrement(1));
});
let totalCountSpan = document.getElementById('totalCount');
store.subscribe(function () {
    let counterState = store.getState().counter;
    totalCountSpan.innerText = counterState.count;
});

let newReviewBtn = document.getElementById('newReviewBtn');
newReviewBtn.addEventListener('click', () => {
    let newReview = { stars: 4, author: 'nag@gmail.com', body: 'sample review' }
    store.dispatch(addNewReview(newReview));
})
let buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click', () => {
    let product = { id: 1, name: 'Laptop', price: 9000 }
    store.dispatch(buy(product));
})

//---------------------------------------------------



