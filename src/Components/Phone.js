/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import product from '../assets/product_image_placeholder.png';

class Phone extends Component {
  render() {
    const { phone, handleAdd } = this.props;
    return (
      <div className="phone">
        <h3>{phone.name}</h3>
        <img src={product} className="image-size" alt={'product'} />
        <div className="product-footer">
          <p>{phone.price}</p>
          <button className="buyButton" onClick={handleAdd}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

export default Phone;
