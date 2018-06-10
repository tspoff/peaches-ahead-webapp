import { combineReducers } from 'redux';
import user from './user.reducer';
import app from './app.reducer';
import productMetadata from './product-metadata.reducer';
import productBlockchain from './product-blockchain.reducer';
 
const rootReducer = combineReducers({
  user,
  app,
  productMetadata,
  productBlockchain
});
 
export default rootReducer;
