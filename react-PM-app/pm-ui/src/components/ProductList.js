import React, { Component } from 'react';
import store from '../store';
import { loadProducts } from '../actions/products';
import 'font-awesome/css/font-awesome.css';
import { Link } from 'react-router-dom';

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
    deleteItem(id) {
        fetch(`http://localhost:8181/products/${id}`, { method: 'DELETE' })
            .then(resp => resp.json())
            .then(r => {
                let { products } = this.state;
                products = products.filter(product => product.id !== id)
                this.setState({ products });
            })
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
                    <td><Link to={`edit-product/${product.id}`}><i className="fa fa-edit"></i></Link></td>
                    <td><a href="/#" onClick={() => { this.deleteItem(product.id) }}><i className="fa fa-trash"></i></a></td>
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