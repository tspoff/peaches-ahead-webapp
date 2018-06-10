import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { authActions } from '../../redux/actions';
import './App.css';

import Loading from '../../components/Loading/Loading';
import LoggedIn from '../LoggedIn/LoggedIn';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(authActions.authenticateUser());
  }

  render() {
    const { isAppLoaded } = this.props.app;

    return (
      <MuiThemeProvider>
        <div className="peach-container peach-col peach-app-container peach-full-height">
          {
            !isAppLoaded ? <Loading /> : <LoggedIn />
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  const { user, app } = state;
  return {
    user,
    app
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
