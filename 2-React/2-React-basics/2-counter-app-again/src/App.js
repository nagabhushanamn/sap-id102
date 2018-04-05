import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import TotalCountDisplay from './components/TotalCountDisplay';
import HitButton from './components/HitButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount: 10
    }
  }

  incrementTotalCount(value) {
    let { totalCount } = this.state;
    totalCount += value;
    this.setState({ totalCount });
  }

  render() {
    console.log('App:render()');
    let { totalCount } = this.state;
    return (
      <div className="container">
        <div className="card bg-default">
          <div className="card-header"> Counter App </div>
          <div className="card-body">
            <HitButton onHit={(value) => { this.incrementTotalCount(value) }} />
            <HitButton value={-1} onHit={(value) => { this.incrementTotalCount(value) }} />
            <HitButton value={10} onHit={(value) => { this.incrementTotalCount(value) }} />
            <HitButton value={-10} onHit={(value) => { this.incrementTotalCount(value) }} />
            <TotalCountDisplay value={totalCount} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
