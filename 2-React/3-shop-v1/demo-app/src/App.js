import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1,
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

  changeTab(tab) {
    this.setState({ tab });
  }
  renderTabCard(product) {
    let { tab } = this.state;
    switch (tab) {
      case 1:
        return (
          <div className="card">
            <div className="card-body">{product.description}</div>
          </div>
        );
      case 2:
        return (
          <div className="card">
            <div className="card-body">Not Yet</div>
          </div>
        );
      case 3:
        return (
          <div className="card">
            <div className="card-body">None Yet</div>
          </div>
        )
      default:
        return null;
    }
  }

  renderBuyBtn(product) {
    if (product.canBuy) {
      return <button className="btn btn-primary">buy</button>
    } else {
      return null;
    }
  }
  renderProducts() {
    let { products } = this.state;
    return products.map((product, idx) => {
      return (
        <div className="list-group-item" key={idx}>
          <div className="row">
            <div className="col-xs-4 col-sm-3 col-md-3">
              <img src={product.image} className="img-fluid" />
            </div>
            <div className="col-xs-8 col-sm-9 col-md-9">
              <h4>{product.name}</h4>
              <h5>&#8377;{product.price}</h5>
              {this.renderBuyBtn(product)}
              <hr />
              <ul className="nav nav-tabs">
                <li className="nav-item"><a onClick={() => { this.changeTab(1) }} className="nav-link" href>Description</a></li>
                <li className="nav-item"><a onClick={() => { this.changeTab(2) }} className="nav-link" href>Specification</a></li>
                <li className="nav-item"><a onClick={() => { this.changeTab(3) }} className="nav-link" href>Reviews</a></li>
              </ul>
              {this.renderTabCard(product)}
            </div>
          </div>
        </div>
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
