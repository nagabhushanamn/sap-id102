import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.refs.stars.value,
            author: this.refs.author.value,
            body: this.refs.body.value
        };
        let { onNewReview } = this.props;
        onNewReview(newReview);
        this.toggleForm();
    }
    renderForm() {
        let { isOpen } = this.state;
        if (!isOpen) {
            return (
                <button className="btn btn-default" onClick={() => { this.toggleForm() }}>
                    <i className="fa fa-plus-circle"></i>
                </button>)
        } else {
            return (
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div className="card">
                            <div className="card-header">ReviewForm</div>
                            <div className="card-body">
                                <form onSubmit={(e) => { this.handleFormSubmit(e) }}>
                                    <div className="form-group">
                                        <label>stars</label>
                                        <select ref="stars" className="form-control">
                                            {[1, 2, 3, 4, 5].map(n => <option>{n}</option>)}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input ref="author" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea ref="body" className="form-control"></textarea>
                                    </div>
                                    <button className="btn btn-primary">submit</button>
                                    <button type="button" onClick={() => { this.toggleForm() }} className="btn btn-danger">cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderForm()}
            </div>
        );
    }
}

export default ReviewForm;