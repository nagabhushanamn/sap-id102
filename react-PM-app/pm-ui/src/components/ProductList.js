import React, { Component } from 'react';
import store from '../store';
import { loadProducts } from '../actions/products';

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            let products = store.getState().products;
            this.setState({ products });
        });
        store.dispatch(loadProducts());
    }
    renderProducts() {
        let { products } = this.state;
        return products.map((product, idx) => {
            return (
                <tr key={idx}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.make_date}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    ProductList
                </div>
                <div className="card-body">
                    <table className="table table-bordered table-sm">
                        <tbody>{this.renderProducts()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ProductList;