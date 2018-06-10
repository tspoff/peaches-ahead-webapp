import environment from '../environment';

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}
 
function updateItemInArray(array, itemId, updateItemCallback) {
  const updatedItems = array.map(item => {
    if(item.id !== itemId) {
      return item;
    }

    const updatedItem = updateItemCallback(item);
    return updatedItem;
  });

  return updatedItems;
}
 
function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

function createUrl (url) {
  return `${environment.apiEndpoint}${url}`;
}

function createRequest (url, data, headers = {}) {
  let request = {
    url: createUrl(url)
  };

  if (data) request.data = JSON.stringify(data);

  return request;
}

const UtilsService = {
  updateObject,
  updateItemInArray,
  createReducer,
  createUrl,
  createRequest
}

export default UtilsService
