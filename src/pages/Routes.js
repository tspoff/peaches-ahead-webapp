import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {App} from './App/App';
import {NotFound} from './NotFound/NotFound';
 
const Routes = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)
 
Routes.propTypes = {
  store: PropTypes.object.isRequired
}
 
export default Routes

