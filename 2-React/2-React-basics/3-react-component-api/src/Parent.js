import React, { Component } from 'react';
import Child from './Child';
import PropTypes from 'prop-types'

class Parent extends Component {

    getChildContext() {
        return { amount: 1000.00 };
    }

    render() {
        return (
            <div className="alert alert-info">
                <Child />
            </div>
        );
    }
}

Parent.childContextTypes = {
    amount: PropTypes.number
};

export default Parent;