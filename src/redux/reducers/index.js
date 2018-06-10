import { combineReducers } from 'redux';
import user from './user.reducer';
import app from './app.reducer';
import productMetadata from './product-metadata.reducer';
 
const rootReducer = combineReducers({
  user,
  app,
  productMetadata
});
 
export default rootReducer;
