// src/components/App/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import logo from './logo.svg';
import './style.css';

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}
  
  componentDidMount() {
    const { multiChainHash } = this.props.params;
    this.getChainData(multiChainHash);
  }

  async getChainData(multiChainHash) {

  }

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
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

export default App;
