import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../Login/Login';

class LoggedOut extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route exact path="/login" component={Login} />
        <Route path="*" render={() => <Redirect to="/login" />} />
      </Switch>
    );
  }
}

export default LoggedOut;
