import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GrandChild extends Component {
    render() {
        return (
            <div className="alert alert-success">
                {this.context.amount}
            </div>
        );
    }
}
GrandChild.contextTypes = {
    amount: PropTypes.number
};

export default GrandChild;