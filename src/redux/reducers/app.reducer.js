import UtilsService from '../services/utils.service';
import { AppConstants } from '../constants';

function setBooleanFlag (state, action) {
  return { ...state, ...action.payload };
}

const app = UtilsService.createReducer({
  isAppLoaded: false,
  isProcessing: false
}, {
  [AppConstants.SET_APP_LOADED]: setBooleanFlag,
  [AppConstants.SET_IS_PROCESSING]: setBooleanFlag
});

export default app;
