import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from './components/Product';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png'
        },
        {
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canBuy: true,
          image: 'images/Mobile.png'
        }
      ]
    }
  }



  renderProducts() {
    let { products} = this.state;
    return products.map((product, idx) => {
      return (
        <Product product={product} idx={idx}/>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a href="#" className="navbar-brand">shopIT</a>
        </nav>
        <div className="list-group">
          {this.renderProducts()}
        </div>
      </div>
    );
  }
}

export default App;
