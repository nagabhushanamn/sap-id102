
import { LOAD_PRODUCTS, LOAD_REVIEWS, SUBMIT_NEW_REVIEW } from '../constants';

export function loadProducts() {
    // let products = [
    //     { id: 1, name: 'Laptop', price: 198000, description: 'New Mac Pro', image: 'images/Laptop.png' },
    //     { id: 2, name: 'Mobile', price: 18000, description: 'New  Pro', image: 'images/Mobile.png' },
    // ]
    // return { type: LOAD_PRODUCTS, products }

    return function (dispatch) {
        const api = `http://localhost:8080/api/products`;
        let promise = fetch(api, {
            method: 'GET',
        })
        promise.then(resp => resp.json())
            .then(products => {
                dispatch({ type: LOAD_PRODUCTS, products }) // async action
            });
    }

}


export function loadReviews(id) {
    // let reviews = [
    //     { stars: 3, author: 'nag@gmail.com', body: 'i love this' },
    //     { stars: 4, author: 'ria@gmail.com', body: 'i hate this' }
    // ];
    //return { type: LOAD_REVIEWS, reviews, id }

    return function (dispatch) {
        const api = `http://localhost:8080/api/products/${id}/reviews`;
        dispatch({type:'REQUEST_BEGIN'});
        let promise = fetch(api, {
            method: 'GET',
        })
        promise.then(resp => resp.json())
            .then(reviews => {
                setTimeout(() => {
                    dispatch({ type: LOAD_REVIEWS, reviews, id }) // async action
                }, 5000);
            });
    }

}

export function addNewReview(review) {
    // return { type: SUBMIT_NEW_REVIEW, review } // sync action

    return function (dispatch) {
        const api = `http://localhost:8080/api/products/${review.productId}/reviews`;
        let promise = fetch(api, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                "Content-Type": 'application/json'
            }
        })
        promise.then(resp => resp.json())
            .then(review => {
                dispatch({ type: SUBMIT_NEW_REVIEW, review }) // async action
            });
    }
}
