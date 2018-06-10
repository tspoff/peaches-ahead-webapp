import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Scan} from '../Scan/Scan';
import {ChainData} from '../ChainData/ChainData';

class LoggedIn extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/scan" />} />
        <Route exact path="/scan" component={Scan} />
        <Route exact path="/data/:multiChainHash" component={ChainData} />
        <Route path="*" render={() => <Redirect to="/scan" />} />
      </Switch>
    );
  }
}

export default LoggedIn;
