import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {App} from './App/App';
import {NotFound} from './NotFound/NotFound';
 
const Routes = ({store, ...props}) => (
  <Provider store={store}>
    <Router {...props}>
      <Switch>
        <Route path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)
 
export default Routes

