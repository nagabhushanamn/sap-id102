import React, { Component } from 'react';
import store from '../store';
import { saveProduct } from '../actions/products';

import {
    withRouter
} from "react-router-dom";

class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                name: '',
                price: '',
                'make-date': '',
                description: ''
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let newProduct = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            description: this.refs.description.value,
            'make-date': this.refs['make-date'].value
        }
        let { id } = this.props.match.params;
        let { product } = this.state;
        product.price = 0;
        if (id) {
            fetch(`http://localhost:8181/products/${id}`, { method: 'PUT', body: JSON.stringify(product), headers: { 'Content-Type': 'application/json' } })
                .then(resp => resp.json())
                .then(r => {
                    let product = {
                        name: '',
                        price: '',
                        'make-date': '',
                        description: ''
                    }
                    this.setState({ product })
                });
        } else {
            store.dispatch(saveProduct(newProduct))
        }
        this.props.history.push('/view-all');
    }
    componentDidMount() {
        let id = this.props.match.params.id;
        fetch(`http://localhost:8181/products/${id}`)
            .then(resp => resp.json())
            .then(product => { this.setState({ product }) });
    }
    render() {
        let { product } = this.state;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card" >
                            <div className="card-header">Product Form - {this.props.match.params.id} </div>
                            <div className="card-body">
                                <form onSubmit={(e) => { this.handleSubmit(e) }}>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input value={product.name} ref="name" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input value={product.price} ref="price" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Make-Date</label>
                                        <input value={product['make-date']} ref="make-date" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <textarea value={product.description} ref="description" className="form-control"></textarea>
                                    </div>
                                    <button className="btn btn-primary">Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ProductForm);