import React, { Component } from 'react';
import './TotalCountDisplay.css';
class TotalCountDisplay extends Component {
    constructor(props){
        super(props);
        console.log('TotalCountDisplay-component - constructor()');
    }
    render() {
        console.log('TotalCountDisplay-component - render()');
        let { value } = this.props;
        return (
            <div className="clear">
                <div className="alert alert-info">
                    Total : <span className="badge">{value}</span>
                </div>
            </div>
        );
    }
}

export default TotalCountDisplay;