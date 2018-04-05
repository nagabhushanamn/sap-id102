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
        let { onHit } = this.props;
        this.setState({ count: count + 1 });
        onHit();
    }

    render() {
        console.log('HitButton-component : render()');
        let { label } = this.props;
        let { count } = this.state;
        return (
            <div className="hit-button">
                <div className="well">
                    <button onClick={() => { this.handleBtnClick() }} className="btn btn-primary">
                        {label} => {count}
                    </button>
                </div>
            </div>
        );
    }
}

export default HitButton;