import React, { Component } from 'react';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { authActions } from '../../redux/actions';
import './App.css';

import Loading from '../../components/Loading/Loading';
import { QRScanner } from '../../components/QRScanner/QRScanner';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(authActions.authenticateUser());
  }

  render() {
    function onAppLoad(props) {
      if (!props.app.isAppLoaded) {
        return <Loading />
      } else {
        return (
          <div>
            <QRScanner />
          </div>
        )
      }
    }

    return (
      <MuiThemeProvider>
        <div>
          <div className="peach-container peach-col peach-app-container peach-stretch peach-full-height">
            {onAppLoad(this.props)}
          </div>
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
