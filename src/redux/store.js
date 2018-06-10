import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [ thunk ]

if ( process.env.NODE_ENV === 'development' ) {
  middleware.push( createLogger() )
}

const store = createStore(rootReducer, {}, composeWithDevTools(
  applyMiddleware( ...middleware )
));

export default store
