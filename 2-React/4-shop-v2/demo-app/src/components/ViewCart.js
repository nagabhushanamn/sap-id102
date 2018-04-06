import React, { Component } from 'react';

class ViewCart extends Component {

    renderItems() {
        let { cart } = this.props;
        let keys = Object.keys(cart);
        return keys.map((key, idx) => {
            return (
                <tr>
                    <td>{idx + 1}</td>
                    <td>{cart[key].item.name}</td>
                    <td>{cart[key].count}</td>
                    <td>&#8377;{cart[key].item.price}</td>
                    <td>&#8377;{cart[key].item.price * cart[key].count}</td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header">Items in cart</div>
                    <div className="card-body">
                        <table className="table table-bordered table-sm">
                            <tbody>
                                {this.renderItems()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewCart;