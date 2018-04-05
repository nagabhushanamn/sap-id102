import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TotalCountDisplay.css';

class TotalCountDisplay extends Component {
    render() {
        let { value } = this.props;
        return (
            <div className="clear">
                <div className="alert alert-info">
                    Total Count : <span className="badge">{value}</span>
                </div>
            </div>
        );
    }
}
TotalCountDisplay.defaultProps = {
    value: 0
}
TotalCountDisplay.propTypes = {
    value: PropTypes.number
}

export default TotalCountDisplay;