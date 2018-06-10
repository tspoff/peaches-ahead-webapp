import UtilsService from '../services/utils.service';
import { ProductMetadataConstants } from '../constants';

function updateMetadata (state, action) {
  return { ...state, ...action.payload };
}

function setQRCodeProcessing (state, action) {
  const { isQrCodeProcessing } = action.payload;
  return { ...state, isQrCodeProcessing };
}

const productMetadata = UtilsService.createReducer({
  qrCode: null,
  hash: null,
  productOrigin: null,
  productNumber: null,
  isQrCodeProcessing: false
}, {
  [ProductMetadataConstants.UPDATE_METADATA]: updateMetadata,
  [ProductMetadataConstants.CLEAR_METADATA]: updateMetadata,
  [ProductMetadataConstants.SET_QRCODE_PROCESSING]: setQRCodeProcessing
});

export default productMetadata;
