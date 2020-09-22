/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import Phones from './Phones';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const result = await fetch('http://localhost:3000/products');
    const data = await result.json();
    this.setState({
      data: data,
    });
  }

  render() {
    const category = [
      ...new Set(this.state.data.map((product) => product.category)),
    ];
    console.log(category);
    return (
      <div className="goods">
        {category.map((category, index) => {
          return (
            <Phones
              key={index}
              category={category}
              products={this.state.data.filter(
                (product) => product.category === category
              )}
              handleAdd={this.props.handleAdd}
            />
          );
        })}
      </div>
    );
  }
}

export default Body;
