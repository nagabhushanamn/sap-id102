import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';
import ViewCart from './components/ViewCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      isCartOpen: false,
      products: []
    }
  }

  componentDidMount() {
    const api = "http://localhost:8080/api/products";
    fetch(api)
      .then(resp => resp.json())
      .then(products => {
        this.setState({ products })
      })
  }

  toggleCart() {
    let { isCartOpen } = this.state;
    this.setState({ isCartOpen: !isCartOpen });
  }

  addToCart(product) {
    let { cart } = this.state;
    cart = cart.concat(product);
    this.setState({ cart })
  }

  renderProducts() {
    let { products, isCartOpen, cart } = this.state;
    if (isCartOpen) {
      return <ViewCart items={cart} />
    } else {
      return products.map((product, idx) => {
        return (
          <Product product={product}
            idx={idx}
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
          <a href="#" className="navbar-brand">shopIT</a>
        </nav>
        <hr />
        <span className="badge badge-dark">{cart.length}</span> item(s) in cart
        | <a href="#" onClick={() => { this.toggleCart() }}> {isCartOpen ? 'View Products' : 'View Cart'} </a>
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
