import Vue from 'vue';
import Vuex from 'vuex';

import global from './global';
import auth from './auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: { global, auth },
  strict: process.env.DEBUGGING,
});

export default store;
