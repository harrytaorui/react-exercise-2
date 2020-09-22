/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Phone from './Phone';

class Phones extends Component {
  render() {
    const { category, products, handleAdd } = this.props;
    return (
      <div className={category}>
        <h2>{category}</h2>
        <div className="phones">
          {products.map((phone, index) => {
            return <Phone key={index} phone={phone} handleAdd={handleAdd} />;
          })}
        </div>
      </div>
    );
  }
}

export default Phones;
