const fs = require("fs");
const path = require("path");
const addCode = require('../mocks/article/list').addCode;

module.exports = app => {
  return class AppController extends app.Controller {
    async list() {
      const { ctx } = this;
      let data = require(path.join(process.cwd(), 'app/mocks/data/list'));
      ctx.body = addCode(data);
    }
};
