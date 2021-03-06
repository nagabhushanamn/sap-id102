import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">PM</Link>
            </nav>
            <hr />
            <div className="row">
              <div className="col-sm-3 col-md-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link" to="/view-all">View All</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/add-new">Add New</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-9 col-md-9">
                <Route exact path="/" component={Home} />
                <Route path="/view-all" component={ProductList} />
                <Route path="/add-new" component={ProductForm} />
                <Route path="/edit-product/:id" component={ProductForm} />
              </div>
            </div>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
