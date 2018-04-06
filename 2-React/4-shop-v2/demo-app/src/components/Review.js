import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css'

class Review extends Component {
    renderStars(n) {
        let stars = [];
        for (let i = 0; i < n; i++) {
            stars.push(<i style={{ color: '' }} className="fa fa-star"></i>)
        }
        return stars;
    }
    render() {
        let { review } = this.props;
        return (
            <div>
                <div className="row">
                    <div className="col-sm-8 col-md-8">
                        <div class="alert alert-dark" role="alert">
                            {this.renderStars(review.stars)}
                            &mdash;{review.author}
                            <hr />
                            <p>{review.body}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Review;