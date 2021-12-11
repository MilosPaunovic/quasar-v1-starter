const routes = [
  {
    path: '/',
    component: () => import('layouts/Main'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/Home'),
      },
    ],
  },
  {
    path: '*',
    component: () => import('layouts/Main'),
    children: [{
      path: '',
      name: 'Error',
      component: () => import('pages/Error'),
    }],
  },
];

export default routes;
