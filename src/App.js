import React, { Component } from 'react';
import './App.scss';
import Header from './Components/Header';
import Body from './Components/Body';

class App extends Component {
  state = {
    count: 0,
  };

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <main>
        <Header count={this.state.count} />
        <Body handleAdd={this.handleAdd} />
      </main>
    );
  }
}

export default App;
