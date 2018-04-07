import React, { Component } from 'react';

class ReviewForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stars: 5,
            author: '',
            body: '',
            isValid: false
        }
    }
    toggleForm() {
        let { isOpen } = this.state;
        this.setState({ isOpen: !isOpen,stars:5,author:'',body:'' });
    }
    handleFormSubmit(e) {
        e.preventDefault();
        let newReview = {
            stars: this.state.stars, 
            author: this.state.stars,
            body: this.state.body
        };
        let { onNewReview } = this.props;
        onNewReview(newReview);
        this.toggleForm();
    }
    handleChange(e) {
        let { isValid } = this.state;
        let value = e.target.value;
        if (value !== "") isValid = true;
        else isValid = false;
        this.setState({ [e.target.id]: e.target.value, isValid });
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
                                        <select className="form-control" id="stars" onChange={(e) => this.handleChange(e)} value={this.state.stars}>
                                            {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                                        </select>
                                        <div style={{ color: 'red' }} className="help-block">{this.state.stars < 5 ? "give 5 stars" : ''}</div>
                                    </div>
                                    <div className="form-group">
                                        <label>author</label>
                                        <input className="form-control" id="author" onChange={(e) => this.handleChange(e)} value={this.state.author} />
                                    </div>
                                    <div className="form-group">
                                        <label>body</label>
                                        <textarea className="form-control" id="body" onChange={(e) => this.handleChange(e)} value={this.state.body}></textarea>
                                    </div>
                                    <button className="btn btn-primary" disabled={!this.state.isValid}>submit</button>
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