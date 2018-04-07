import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';
import store from './store';
import { loadProducts } from './actions';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cart: {},
      isCartOpen: false,
      products: []
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      let products = store.getState().products;
      this.setState({ products });
    });
    store.dispatch(loadProducts()); // dispatching an action
  }

  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen });
  }

  addToCart(product) {
    let { cart } = this.state;
    if (cart[product.id]) {
      cart[product.id] = { item: product, qty: cart[product.id].qty + 1 }
    } else {
      cart[product.id] = { item: product, qty: 1 }
    }
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (isCartOpen) {
      return <ViewCart cart={cart} />
    } else {
      return products.map((product, idx) => {
        return (
          <Product
            product={product}
            key={idx}
            onBuy={(product) => { this.addToCart(product) }}
          />
        );
      });
    }
  }

  render() {
    let { cart, isCartOpen } = this.state;
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="/#" className="navbar-brand">shopIT</a>
        </nav>
        <hr />
        <span className="badge badge-dark">{Object.keys(cart).length}</span> item(s) in cart
        | <a href="/#" onClick={() => { this.toggleCart() }}> {isCartOpen ? 'View Products' : 'View Cart'} </a>
        <hr />
        <hr />
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
