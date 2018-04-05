import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Message extends Component {
    constructor(props) {
        super(props);
        console.log('Message :: constructor');
        //this.state = { status: '', now: new Date().toTimeString() }
    }
    componentWillMount() {
        console.log('Message :: componentWillMount');
    }
    render() {
        console.log('Message :: render');
        let now = new Date().toTimeString();
        //throw new Error('error while rendering Message component');
        return (
            <div className="alert alert-info">
                {this.props.message}
                <hr />
                {now}
            </div>
        );
    }
    componentDidMount() {
        console.log('Message :: componentDidMount()');
        // n/w call
        //let status = "hello from api-server";
        //this.setState({ status });
        this.interval = setInterval(() => {
            //let now = new Date().toTimeString();
            //this.setState({ now });
            //this.forceUpdate();
        }, 50);
    }
    componentWillReceiveProps(nextProps) {
        console.log('Message :: componentWillReceiveProps()');
        //console.log(this.props);
        //console.dir(nextProps);
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Message :: shouldComponentUpdate()');
        //if (this.props.message === nextProps.message) return false;
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Message :: componentWillUpdate()');
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Message :: componentDidUpdate()');
    }
    componentWillUnmount() {
        console.log('Message :: componentWillUnmount()');
        //clearInterval(this.interval);
    }


}

Message.defaultProps = {
    message: 'greetings'
}
Message.propTypes = {
    message: PropTypes.string
}
Message.displayName = "sapient-message";

export default Message;