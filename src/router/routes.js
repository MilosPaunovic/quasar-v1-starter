const routes = [
  {
    path: '',
    component: () => import('layouts/Public'),
    meta: { public: true, onlyLoggedOut: true },
    redirect: { name: 'Login' },
    children: [
      {
        path: 'login',
        name: 'Login',
        component: () => import('pages/public/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/public/Register'),
      },
      {
        path: 'forgot-password',
        name: 'ForgotPassword',
        component: () => import('pages/public/ForgotPassword'),
      },
    ],
  },
  {
    path: '',
    component: () => import('layouts/Main'),
    meta: { public: false, onlyLoggedOut: false },
    redirect: { name: 'Home' },
    children: [
      {
        path: 'home',
        name: 'Home',
        component: () => import('pages/Home'),
      },
      {
        path: 'settings',
        name: 'Settings',
        component: () => import('pages/Settings'),
      },
    ],
  },
  // Catch all non-existent pages and redirect 'em to Error page
  {
    path: '*',
    component: () => import('layouts/Main'),
    children: [{ path: '', name: 'Error', component: () => import('pages/Error') }],
  },
];

export default routes;
