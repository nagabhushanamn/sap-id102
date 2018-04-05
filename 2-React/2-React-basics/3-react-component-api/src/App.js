import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Message from './Message';
import Parent from './Parent';
import Box from './Box';
import Product from './Product';
import Employee from './Employee';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App :: constructor');
    this.state = {
      message: 'greetings'
    }
  }

  changeMessage(message) {
    this.setState({ message });
  }

  componentDidCatch(error, info) {
    console.log('App::componentDidCatch');
    console.log(error);
    console.log(info);
  }

  render() {
    console.log('App :: render');
    return (
      <div className="container">
        <div className="card bg-default">
          <div className="card-header"> App Component </div>
          <div className="card-body">
            <button className="btn btn-primary" onClick={() => { this.changeMessage('good morning') }}>GM</button>
            <button className="btn btn-primary" onClick={() => { this.changeMessage('good noon') }}>GN</button>
            <button className="btn btn-primary" onClick={() => { this.changeMessage('good evening') }}>GE</button>
            <button className="btn btn-danger" onClick={() => { this.changeMessage('') }}>Remove</button>
            <hr />
            {this.state.message === '' ? null : <Message message={this.state.message} />}
            <hr />
            <Parent />
            <Box>
              <Product />
              <Product />
              <Product />
            </Box>
            <Box>
              <Employee />
              <Employee />
              <Employee />
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
