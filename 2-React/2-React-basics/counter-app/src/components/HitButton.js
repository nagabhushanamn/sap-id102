import React, { Component } from 'react';
import './HitButton.css';

class HitButton extends Component {

    constructor(props) {
        super(props);
        console.log('HitButton-component : constructor()');
        //console.dir(props);
        this.state = {
            count: 0
        }
        this.handleBtnClick = this.handleBtnClick.bind(this);
    }

    handleBtnClick() {
        let { count } = this.state;
        let { onHit, label } = this.props;
        let sign = label.substring(0, 1);
        let labelValue = label.substring(1);
        let value = 0;
        if (sign === "+") {
            value = Number.parseInt(labelValue);
        } else {
            value = Number.parseInt(-labelValue);
        }
        this.setState({ count: count + value });
        onHit(value);
    }

    render() {
        console.log('HitButton-component : render()');
        let { label } = this.props;
        let { count } = this.state;
        let sign = label.substring(0, 1);
        let btnClass = "btn "
        if (sign === "+") {
            btnClass += "btn-success"
        } else {
            btnClass += "btn-danger"
        }
        return (
            <div className="hit-button">
                <div className="well">
                    <button onClick={() => { this.handleBtnClick() }} className={btnClass}>
                        {label} : <span className="badge">{count}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default HitButton;