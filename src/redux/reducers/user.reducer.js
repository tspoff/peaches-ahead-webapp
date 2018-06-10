import UtilsService from '../services/utils.service';
import { authConstants, userConstants } from '../constants';

function notifyApiRequest (state, action) {
  return state;
}

function updateUser (state, action) {
  return { ...state, ...action.payload };
}

const user = UtilsService.createReducer({
  id: null,
  firstName: '',
  lastName: ''
}, {
  [authConstants.AUTHENTICATE_USER_REQUEST]: notifyApiRequest,
  [authConstants.AUTHENTICATE_USER_RESPONSE_SUCCESS]: updateUser,

  [userConstants.GET_USER_REQUEST]: notifyApiRequest,
  [userConstants.GET_USER_RESPONSE_SUCCESS]: updateUser
});

export default user;
