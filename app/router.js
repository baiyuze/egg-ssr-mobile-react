
module.exports = app => {
  app.get('/', app.controller.home.list);
  app.get('/about', app.controller.home.index);
  app.get('/client', app.controller.home.client);
  app.get('/api/article/list', app.controller.home.pager);
};
