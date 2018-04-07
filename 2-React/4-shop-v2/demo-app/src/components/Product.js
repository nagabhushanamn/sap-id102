import React, { Component } from 'react';
import classnames from 'classnames';
import Review from './Review';
import ReviewForm from './ReviewForm';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 1,
            reviews: [],
        }
    }
    addNewReview(review) {
        //this.setState({ reviews: this.state.reviews.concat(review) });
        
        // ==> API-call

        let { product } = this.props;
        const api = `http://localhost:8080/api/products/${product.id}/reviews`;
        const promise = fetch(api, {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        promise
            .then(resp => resp.json())
            .then(review => {
                this.setState({ reviews: this.state.reviews.concat(review) });
            })

    }
    changeTab(tab) {

        //this.setState({ tab });

        // ==> API-call

        if (tab === 3) {
            let { product } = this.props;
            const api = `http://localhost:8080/api/products/${product.id}/reviews`;
            fetch(api)
                .then(resp => resp.json())
                .then(reviews => {
                    this.setState({ tab, reviews });
                })
        } else {
            this.setState({ tab });
        }

    }
    renderReviews() {
        let { reviews } = this.state;
        return reviews.map((review, idx) => {
            return <Review review={review} key={idx} />
        });
    }

    renderTabCard(product) {
        let { tab } = this.state;
        let card;
        switch (tab) {
            case 1:
                card = (<div>{product.description}</div>)
                break;
            case 2:
                card = (<div>Not Yet</div>)
                break;
            case 3:
                card = (
                    <div>
                        {this.renderReviews()}
                        <ReviewForm onNewReview={(newReview) => { this.addNewReview(newReview) }} />
                    </div>)
                break;
            default:
                card = null;
        }
        return card;
    }

    renderBuyBtn(product) {
        let { onBuy } = this.props;
        if (true) {
            return <button onClick={() => { onBuy(product);  }} className="btn btn-primary">buy</button>
        } else {
            return null;
        }
    }

    render() {
        let { product, idx } = this.props;
        let { tab } = this.state;
        return (
            <div>
                <div className="list-group-item" key={idx}>
                    <div className="row">
                        <div className="col-xs-4 col-sm-3 col-md-3">
                            <img src={product.image} className="img-fluid" alt="product"/>
                        </div>
                        <div className="col-xs-8 col-sm-9 col-md-9">
                            <h4>{product.name}</h4>
                            <h5>&#8377;{product.price}</h5>
                            {this.renderBuyBtn(product)}
                            <hr />
                            <ul className="nav nav-tabs">
                                <li className="nav-item"><a onClick={() => { this.changeTab(1) }} className={classnames({ 'nav-link': true, 'active': tab === 1 })} href="/#">Description</a></li>
                                <li className="nav-item"><a onClick={() => { this.changeTab(2) }} className={classnames({ 'nav-link': true, 'active': tab === 2 })} href="/#">Specification</a></li>
                                <li className="nav-item"><a onClick={() => { this.changeTab(3) }} className={classnames({ 'nav-link': true, 'active': tab === 3 })} href="/#">Reviews</a></li>
                            </ul>
                            {this.renderTabCard(product)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;