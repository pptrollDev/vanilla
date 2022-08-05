import Router from "./core/router.js";
require('../css/styles.css');
require('../css/about.css');

const routes = {
  404: '/pages/404.html',
  '/': '../pages/index',
  '/about': '/pages/about.html',
  '/lorem': '/pages/lorem.html'
};

new Router(routes);
// new Index();