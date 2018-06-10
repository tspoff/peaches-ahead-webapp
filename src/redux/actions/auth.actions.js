import { authConstants } from '../constants';
import { appActions } from './app.actions';
import UserService from '../services/user.service';

export const authActions = {
  authenticateUser
};

function authenticateUser () {
  return dispatch => {
    dispatch(request());

    UserService.getProfile('123')
      .then((user) => {
        dispatch(setUser(user));
        dispatch(appActions.setAppLoaded(true));
      });

    function request () { return { type: authConstants.AUTHENTICATE_USER_REQUEST }; }
    function setUser (user) { return { type: authConstants.AUTHENTICATE_USER_RESPONSE_SUCCESS, payload: user }; }
  }
}
