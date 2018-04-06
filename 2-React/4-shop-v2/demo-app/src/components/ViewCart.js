import React, { Component } from 'react';

class ViewCart extends Component {

    renderItems() {
        let { items } = this.props;
        return items.map((item, idx) => {
            return (
                <tr>
                    <td>{idx+1}</td>
                    <td>{item.name}</td>
                    <td>&#8377;{item.price}</td>
                    <td>qty</td>
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