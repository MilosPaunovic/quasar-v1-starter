const USER_KEY = 'user';

const USER_SERVICE = {
  getUser: () => JSON.parse(localStorage.getItem(USER_KEY)),
  saveUser: (u) => localStorage.setItem(USER_KEY, JSON.stringify(u)),
  removeUser: () => localStorage.removeItem(USER_KEY),
};

export { USER_SERVICE };
