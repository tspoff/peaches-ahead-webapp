import UtilsService from '../services/utils.service';
import { ProductBlockchainConstants } from '../constants';

function notifyMultiChainApiRequest (state, action) {
  return { ...state, isMultichainLoading: true, errorMessage: null };
}

function notifyFactomEntryApiRequest (state, action) {
  return { ...state, isFactomEntryLoading: true, errorMessage: null };
}

function updateProductBlockChain (state, action) {
  return { ...state, ...action.payload };
} 

const productBlockchain = UtilsService.createReducer({
  isMultichainLoading: false,
  isFactomEntryLoading: false,
  errorMessage: null,
  multichain: {
    explorerUrl: null,
    timestamp: null,
    txId: null
  },
  factomEntry: {
    explorerUrl: null,
    content: null
  }
}, {
  [ProductBlockchainConstants.GET_MULTI_CHAIN_REQUEST]: notifyMultiChainApiRequest,
  [ProductBlockchainConstants.GET_MULTI_CHAIN_RESPONSE_SUCCESS]: updateProductBlockChain,
  [ProductBlockchainConstants.GET_MULTI_CHAIN_RESPONSE_ERROR]: updateProductBlockChain,
  [ProductBlockchainConstants.GET_FACTOM_ENTRY_REQUEST]: notifyFactomEntryApiRequest,
  [ProductBlockchainConstants.GET_FACTOM_ENTRY_RESPONSE_SUCCESS]: updateProductBlockChain,
  [ProductBlockchainConstants.GET_FACTOM_ENTRY_RESPONSE_ERROR]: updateProductBlockChain
});

export default productBlockchain;
