import UtilsService from '../services/utils.service';
import { productMetadataConstants } from '../constants';

function updateMetadata (state, action) {
    return { ...state, ...action.payload };
  }

const productMetadata = UtilsService.createReducer({}, {
  [productMetadataConstants.UPDATE_METADATA]: updateMetadata
});

export default productMetadata;
