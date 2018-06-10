import { AuthConstants } from '../constants';
import { appActions } from './app.actions';

export const authActions = {
  authenticateUser
};

function authenticateUser () {
  return dispatch => {
    dispatch(request());

    fetch(`/api/user/123`)
      .then(
        (user) => {
        setTimeout(() => {
          dispatch(setUser(user));
          dispatch(appActions.setAppLoaded(true));
        }, 1000);
      }).catch((err) => {
        console.error(err);
      });

    function request () { return { type: AuthConstants.AUTHENTICATE_USER_REQUEST }; }
    function setUser (user) { return { type: AuthConstants.AUTHENTICATE_USER_RESPONSE_SUCCESS, payload: user }; }
  }
}
