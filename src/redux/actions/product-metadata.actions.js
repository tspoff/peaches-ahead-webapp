import { split } from 'lodash';
import { ProductMetadataConstants } from '../constants';

export const productMetadataActions = {
  updateMetadata,
  clearMetadata
};

function updateMetadata (qrCode) {
  return dispatch => {
    dispatch(setQrCodeProcessing(true));

    setTimeout(() => {
      dispatch(update(qrCode));
      dispatch(setQrCodeProcessing(false));
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
      return {type: ProductMetadataConstants.UPDATE_METADATA, payload: metadata};
    }
  }

  function setQrCodeProcessing(isQrCodeProcessing) {
    return {type: ProductMetadataConstants.SET_QRCODE_PROCESSING, payload: { isQrCodeProcessing }};
  }
}

function clearMetadata () {
  return {type: ProductMetadataConstants.CLEAR_METADATA, payload: {
    qrCode: null,
    hash: null,
    productOrigin: null,
    productNumber: null
  }};
}
