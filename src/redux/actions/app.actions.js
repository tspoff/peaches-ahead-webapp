import { appConstants } from '../constants';

export const appActions = {
  setAppLoaded,
  setIsProcessing,
  setQrCodeProcessing
};

function setAppLoaded (isAppLoaded) {
  return {type: appConstants.SET_APP_LOADED, payload: { isAppLoaded }};
}

function setIsProcessing (isProcessing) {
  return {type: appConstants.SET_IS_PROCESS, payload: { isProcessing }};
}

function setQrCodeProcessing (isQrCodeProcessing) {
  return {type: appConstants.SET_QRCODE_PROCESSING, payload: { isQrCodeProcessing }};
}
