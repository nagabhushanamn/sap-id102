
export function loadProducts() {
    return function (dispatch) {
        let api = "http://localhost:8181/products";
        fetch(api)
            .then(resp => resp.json())
            .then(products => dispatch({ type: 'LOAD_PRODUCTS', products }))
    }
}
export function saveProduct(product) {
    return function (dispatch) {
        let api = "http://localhost:8181/products";
        fetch(api, {
            method: "POST",
            body: JSON.stringify(product),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(resp => resp.json())
            .then(products => dispatch({ type: 'SAVE_PRODUCT', products }))
    }
}