import Vue from 'vue';
import VueRouter from 'vue-router';
import { USER_SERVICE } from 'src/services/user';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
  mode: process.env.VUE_ROUTER_MODE,
  base: process.env.VUE_ROUTER_BASE,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some((record) => record.meta.public);
  const onlyLoggedOut = to.matched.some((record) => record.meta.onlyLoggedOut);
  const loggedIn = USER_SERVICE.getUser();

  // If not authenticated, redirect to Login
  if (!isPublic && !loggedIn) return next({ name: 'Login' });

  // If authenticated, don't allow access to public pages
  if (loggedIn && onlyLoggedOut) return next({ name: 'Home' });

  return next();
});

export default router;
