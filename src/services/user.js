const USER_KEY = 'user';

const USER_SERVICE = {
  /**
   * Get the entire logged user object.
   * @returns {Object} Logged user details saved in LocalStorage.
   */
  getUser: () => JSON.parse(localStorage.getItem(USER_KEY)),
  /**
   * Save user details in LocalStorage.
   * @param  {Object} user User details object obtained by server.
   * @returns {void}
   */
  saveUser: (user) => localStorage.setItem(USER_KEY, JSON.stringify(user)),
  /**
   * Remove all user details from LocalStorage.
   * @returns {void}
   */
  removeUser: () => localStorage.removeItem(USER_KEY),
};

export { USER_SERVICE };
