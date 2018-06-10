import { createStore, applyMiddleware }                   from 'redux'
import { composeWithDevTools }                            from 'redux-devtools-extension'
import thunk                                              from 'redux-thunk'
import rootReducer                                        from './reducers'

/*
Model: {
  user: {
    id: String,
    firstName: String,
    lastName: String
  },
  app: {
    isAppLoaded: Boolean
    isProcessing: Boolean,
    isQrCodeProcessing: Boolean
  },
  productMetadata: {
    qrCode: String
  }
}
*/
const middleware = [ thunk ]

if ( process.env.NODE_ENV === 'development' ) {
  middleware.push( require( 'redux-logger' ).default )
}

const initialState = window.__INITIAL_STATE__ || {}

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware( ...middleware )
));

export default store
