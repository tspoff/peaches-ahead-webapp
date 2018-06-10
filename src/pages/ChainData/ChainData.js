// src/components/App/index.js
import React, { Component } from 'react';

import logo from './logo.svg';
import './ChainData.css';

class ChainData extends Component {

  componentDidMount() {
    const { multiChainHash } = this.props.match.params;
    this.getChainData(multiChainHash);
  }

  async getChainData(multiChainHash) {

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export { ChainData };
