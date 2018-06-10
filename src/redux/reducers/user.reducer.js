import UtilsService from '../services/utils.service';
import { AuthConstants, UserConstants } from '../constants';

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
  [AuthConstants.AUTHENTICATE_USER_REQUEST]: notifyApiRequest,
  [AuthConstants.AUTHENTICATE_USER_RESPONSE_SUCCESS]: updateUser,

  [UserConstants.GET_USER_REQUEST]: notifyApiRequest,
  [UserConstants.GET_USER_RESPONSE_SUCCESS]: updateUser
});

export default user;
