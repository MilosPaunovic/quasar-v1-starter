import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

import { USER_SERVICE } from '../services/user';

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function () {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  });

  Router.beforeEach((to, from, next) => {
    const isPublic = to.matched.some((record) => record.meta.public);
    const onlyLoggedOut = to.matched.some((record) => record.meta.onlyLoggedOut);
    const loggedIn = USER_SERVICE.getUser();

    // If not authenticated, redirect to Login
    if (!isPublic && !loggedIn) return next({ name: 'Login' });

    // If authenticated, don't allow access to public pages
    if (loggedIn && onlyLoggedOut) return next({ name: 'Home' });

    return next();
  });

  return Router;
}
