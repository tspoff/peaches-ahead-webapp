// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import App from './components/App';
import About from './components/About';
import NotFound from './components/NotFound';
import Scan from './components/Scan';
import ChainData from './components/ChainData';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/scan" component={Scan} />
    <Route path="/data/:multiChainHash" component={ChainData} />
    <Route path="/about" component={About} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
