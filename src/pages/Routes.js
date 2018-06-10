import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {App} from './App/App';
import {NotFound} from './NotFound/NotFound';
import {ChainData} from './ChainData/ChainData';
 
const Routes = ({store, ...props}) => (
  <Provider store={store}>
    <Router {...props}>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/data/:multiChainHash" component={ChainData} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)
 
export default Routes

