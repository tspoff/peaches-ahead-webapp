import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { browserHistory } from 'react-router';

import './theme.css';
import store from './redux/store';
import Routes from './pages/Routes';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Routes store={store} history={browserHistory} />,
  document.getElementById('root')
);

