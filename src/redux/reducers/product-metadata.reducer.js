import UtilsService from '../services/utils.service';
import { productMetadataConstants } from '../constants';

function updateMetadata (state, action) {
    return { ...state, ...action.payload };
  }

const productMetadata = UtilsService.createReducer({
  qrCode: null,
  hash: null,
  productOrigin: null,
  productNumber: null
}, {
  [productMetadataConstants.UPDATE_METADATA]: updateMetadata,
  [productMetadataConstants.CLEAR_METADATA]: updateMetadata
});

export default productMetadata;
