import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HitButton.css';
class HitButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment() {
        let { count } = this.state;
        let { onHit, value } = this.props;
        count += 1;
        this.setState({ count });
        onHit(value);
    }
    render() {
        let { value } = this.props;
        let { count } = this.state;
        return (
            <div className="hit">
                <button className={value >= 0 ? 'btn btn-primary' : 'btn btn-danger'}
                    onClick={() => { this.increment() }}>
                    {value > 0 ? '+' : ''}{value}
                    =>
                    <span className="badge badge-pill badge-secondary">
                        {count}
                    </span>
                </button>
            </div>
        );
    }
}
HitButton.defaultProps = {
    value: 1
}
HitButton.propTypes = {
    value: PropTypes.number,
    onHit: PropTypes.func
}

export default HitButton;