import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GrandChild from './GrandChild';

class Child extends Component {
    render() {
        return (
            <div className="alert alert-success">
                {this.context.amount}
                <GrandChild />
            </div>
        );
    }
}
Child.contextTypes = {
    amount: PropTypes.number
};

export default Child;