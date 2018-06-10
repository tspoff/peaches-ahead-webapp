import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const middleware = [ thunk ]

if ( process.env.NODE_ENV === 'development' ) {
  middleware.push( createLogger() )
}

const initialState = {
  user: {
    id: null,
    firstName: '',
    lastName: ''
  },
  app: {
    isAppLoaded: false,
    isProcessing: false,
    isQrCodeProcessing: false
  },
  productMetadata: {
    qrCode: null,
    hash: null,
    productOrigin: null,
    productNumber: null
  },
  productDetails: {},
  productChain: []
};

const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware( ...middleware )
));

export default store
