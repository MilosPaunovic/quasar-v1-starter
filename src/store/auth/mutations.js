import { USER_SERVICE } from 'src/services/user';

export const UPDATE_LOADING = (state, isLoading) => {
  state.isLoading = isLoading;
};

export const SAVE_USER = (state, user) => {
  USER_SERVICE.saveUser(user);
};

export const REMOVE_USER = () => {
  USER_SERVICE.removeUser();
};
