import { AppConstants } from '../constants';

export const appActions = {
  setAppLoaded,
  setIsProcessing
};

function setAppLoaded (isAppLoaded) {
  return {type: AppConstants.SET_APP_LOADED, payload: { isAppLoaded }};
}

function setIsProcessing (isProcessing) {
  return {type: AppConstants.SET_IS_PROCESS, payload: { isProcessing }};
}
