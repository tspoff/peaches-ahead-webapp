import { userConstants } from '../constants';
import UserService from '../services/user.service';
import { appActions } from './app.actions';

export const userActions = {
  getProfile
};

function getProfile (userId) {
  return dispatch => {
    dispatch(request());

    UserService.getProfile(userId)
      .then(user => {
          dispatch(setUser(user));
          dispatch(appActions.setAppLoaded(true));
      });

    function request () { return { type: userConstants.GET_USER_REQUEST }; }
    function setUser (user) { return { type: userConstants.GET_USER_RESPONSE_SUCCESS, payload: user }; }
  }
}
