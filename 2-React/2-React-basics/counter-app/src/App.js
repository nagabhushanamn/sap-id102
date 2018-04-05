import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HitButton from './components/HitButton';
import TotalCountDisplay from './components/TotalCountDisplay';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('App-component : constructor()');
    this.state = {
      totalCount: 0
    }
  }

  incrementTotalCount() {
    let { totalCount } = this.state;
    this.setState({ totalCount: totalCount + 1 });
  }

  render() {
    console.log('App-component : render()');
    let { totalCount } = this.state;
    return (
      <div className="container">
        <div className="page-header"> React - {this.props.title} </div>
        <div className="panel panel-default">
          <div className="panel-heading"> App component  : <span className="badge">{totalCount}</span> </div>
          <div className="panel-body">
            <HitButton label="+1" onHit={() => { this.incrementTotalCount() }} />
            <HitButton label="+10" onHit={() => { this.incrementTotalCount() }} />
            <HitButton label="-10" onHit={() => { this.incrementTotalCount() }} />
            <TotalCountDisplay value={totalCount} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
