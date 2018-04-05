import React, { Component } from 'react';

class Box extends Component {
    renderChildren() {
        return this.props.children.map((child,idx) => {
            return (<div key={idx} className="list-group-item">{child}</div>)
        })
    }
    render() {
        return (
            <div className="jumbotron">
                <div className="list-group">
                    {this.renderChildren()}
                </div>
            </div>
        );
    }
}

export default Box;