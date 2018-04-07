
export function loadProducts() {
    return function (dispatch) {
        let api = "http://localhost:8181/products";
        fetch(api)
            .then(resp => resp.json())
            .then(products => dispatch({ type: 'LOAD_PRODUCTS', products }))
    }
}