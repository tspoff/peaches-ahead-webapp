import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {Scan} from '../Scan/Scan';
import {ChainData} from '../ChainData/ChainData';
import {Welcome} from '../Welcome/Welcome';

class LoggedIn extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route exact path="/welcome" component={Welcome} />} />
        <Route exact path="/scan" component={Scan} />
        <Route exact path="/data/:multiChainHash" component={ChainData} />
        <Route path="*" render={() => <Redirect to="/welcome" />} />
      </Switch>
    );
  }
}

export default LoggedIn;
