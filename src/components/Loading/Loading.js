import React, { Component } from 'react';
import './Loading.css';
import logo from '../../images/logo.png';

class Loading extends Component {
  render() {
    return (
      <div className="peach-app-loading-container">
        <img src={logo} className="peach-app-logo" alt="Peaches Ahead Logo" />
      </div>
    );
  }
}

export default Loading;
