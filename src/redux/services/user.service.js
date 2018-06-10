
const UserService = {
  getProfile
};

function getProfile (userId) {
  // return axios.get(
  //   UtilsService.createRequest(`users/${userId || ''}`)
  // );
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({id: userId, firstName: 'Test', lastName: 'Account'});
    }, 1500);
  });

  return promise;
}

export default UserService
