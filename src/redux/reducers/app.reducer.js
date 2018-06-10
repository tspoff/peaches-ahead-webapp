import UtilsService from '../services/utils.service';
import { appConstants } from '../constants';

function setBooleanFlag (state, action) {
  return { ...state, ...action.payload };
}

const app = UtilsService.createReducer({
  isAppLoaded: false,
  isProcessing: false,
  isQrCodeProcessing: false
}, {
  [appConstants.SET_APP_LOADED]: setBooleanFlag,
  [appConstants.SET_IS_PROCESSING]: setBooleanFlag,
  [appConstants.SET_QRCODE_PROCESSING]: setBooleanFlag
});

export default app;
