import { UserConstants } from '../constants';
import { appActions } from './app.actions';

export const userActions = {
  getProfile
};

function getProfile (userId) {
  return dispatch => {
    dispatch(request());

    fetch(`/api/user/${userId}`)
      .then(user => {
          dispatch(setUser(user));
          dispatch(appActions.setAppLoaded(true));
      }).catch(err => {
        console.error(err);
      });

    function request () { return { type: UserConstants.GET_USER_REQUEST }; }
    function setUser (user) { return { type: UserConstants.GET_USER_RESPONSE_SUCCESS, payload: user }; }
  }
}
