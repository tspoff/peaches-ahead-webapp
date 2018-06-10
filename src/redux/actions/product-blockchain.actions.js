import { ProductBlockchainConstants } from '../constants';
import { appActions } from './app.actions';

export const productBlockchainActions = {
    getMultichain,
    getFactomEntry
};

function getMultichain (txId) {
  return dispatch => {
    dispatch(startRequest());

    dispatch(setMultichain({explorerUrl: 'mock', timestamp: (new Date()).getTime(), txId}));

    // fetch(`/api/multichain/tx/${txId}`)
    //     .then((response) => {
    //         dispatch(setMultichain(response.info));
    //     }).catch((err) => {
    //         dispatch(setError());
    //     });

    function startRequest() {
        return {type: ProductBlockchainConstants.GET_MULTI_CHAIN_REQUEST};
    }
    
    function setMultichain(multichain) {
        return {type: ProductBlockchainConstants.GET_FACTOM_ENTRY_RESPONSE_SUCCESS, payload: {
            multichain,
            isMultichainLoading: false
        }};
    }

    function setError() {
        return {type: ProductBlockchainConstants.GET_MULTI_CHAIN_RESPONSE_ERROR, payload: {
            multichain: {
                explorerUrl: null,
                timestamp: null,
                txId: null
            },
            isMultichainLoading: false,
            errorMessage: 'There was an error loading this resource.'
        }};
    }
  }
}

function getFactomEntry (entry) {
    return dispatch => {
      dispatch(startRequest());
  
        fetch(`/api/factom/entry/${entry}`)
            .then((response) => {
                dispatch(setFactomEntry(response.result));
            }).catch((err) => {
                dispatch(setError());
            });
  
    function startRequest() {
        return {type: ProductBlockchainConstants.GET_FACTOM_ENTRY_REQUEST};
    }
      
    function setFactomEntry(factomEntry) {
        return {type: ProductBlockchainConstants.GET_FACTOM_ENTRY_RESPONSE_SUCCESS, payload: {
            factomEntry,
            isFactomEntryLoading: false
        }};
    }
  
    function setError() {
        return {type: ProductBlockchainConstants.GET_FACTOM_ENTRY_RESPONSE_ERROR, payload: {
            factomEntry: {
                explorerUrl: null,
                content: null
            },
            isFactomEntryLoading: false,
            errorMessage: 'There was an error loading this resource.'
        }};
    }
    }
  }
