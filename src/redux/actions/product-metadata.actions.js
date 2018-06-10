import { last, split } from 'lodash-es'
import { productMetadataConstants } from '../constants';
import { appActions } from './app.actions';

export const productMetadataActions = {
  updateMetadata
};

function updateMetadata (qrCode) {
  return dispatch => {
    dispatch(appActions.setQrCodeProcessing(true));

    setTimeout(() => {
      dispatch(update(qrCode));
      dispatch(appActions.setQrCodeProcessing(false));
    }, 2000);

    function update (qrCode) {
      const metadata = { qrCode, hash: last(split(qrCode, ' ')) };
      return {type: productMetadataConstants.UPDATE_METADATA, payload: metadata};
    }
  }
}
