/* eslint-disable react/prop-types */
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const { count } = this.props;
    return (
      <header>
        <h1>Store</h1>
        <div className="cart">
          <i className="fa fa-shopping-cart" />
          <p className="cart-amount">{count}</p>
        </div>
      </header>
    );
  }
}

export default Header;
