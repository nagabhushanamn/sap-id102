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
          id: 1,
          name: 'Laptop',
          price: 198000,
          description: 'New Mac pro',
          canBuy: true,
          image: 'images/Laptop.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'good one' },
            { stars: 2, author: 'indu@gmail.com', body: 'costly one' }
          ]
        },
        {
          id: 2,
          name: 'Mobile',
          price: 18000,
          description: 'New pro',
          canBuy: true,
          image: 'images/Mobile.png',
          reviews: [
            { stars: 5, author: 'nag@gmail.com', body: 'good one' },
            { stars: 2, author: 'indu@gmail.com', body: 'costly one' }
          ]
        }
      ]
    }
  }

  addNewReview(id, newReview) {
    let { products } = this.state;
    products = products.map((product) => {
      if (product.id === id) {
        product.reviews = product.reviews.concat(newReview);
      }
      return product;
    });
    this.setState({ products });
  }

  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <Product product={product} idx={idx} 
                onNewReview={(id,newReview)=>{this.addNewReview(id,newReview)}}/>
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
