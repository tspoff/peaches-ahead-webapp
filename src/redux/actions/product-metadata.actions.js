import { split } from 'lodash';
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
      const [productIdentifier, hash] = split(qrCode, ' ');
      const [productOrigin, productNumber] = split(productIdentifier, '-');
      const metadata = {
        qrCode,
        hash,
        productOrigin,
        productNumber
      };
      return {type: productMetadataConstants.UPDATE_METADATA, payload: metadata};
    }
  }
}
