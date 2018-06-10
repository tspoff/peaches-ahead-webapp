// src/components/About/index.js
import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';

import './Welcome.css';

class Welcome extends Component {

  onClick = () => {
    this.props.history.push('/scan');
  }

  render() {
    return (
      <div className="peach-container peach-col peach-welcome">
        <div className="peach-container peach-col peach-welcome-titles">
          <h1 className="peach-welcome-title">Welcome to miroBC</h1>
          <h2>Let's scan a code</h2>
        </div>
        <div className="peach-container peach-col peach-welcome-info">
          <RaisedButton label="Scan" backgroundColor="#FFAD63" labelColor="#FFF" className="peach-info-scan-button" fullWidth={true} onClick={this.onClick} />
        </div>

      </div>
    );
  }
}

const routedWelcome = withRouter(Welcome);
export {routedWelcome as Welcome};
