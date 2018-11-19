const forEach = require('lodash/forEach');

module.exports = options => {
  return async (ctx, next) => {

    let url = ctx.req.url;
    let reqPath = '/';
    let req = ctx.req;
    let prefix = '/';
    let isProxy = false;
    if(url.split('/')[0]) {
      prefix = url.split('/')[0];
    } else {
      prefix = url.split('/')[1];
    }
    // 寻找前缀  替换路径地址
    forEach(options, (value, key) => {
      if(prefix == key) {
        isProxy = true;
        reqPath = url.substr(key.length + 1);
        reqPath = `${value}${reqPath}`;
      }
    });

    if(isProxy) {
      //代理转发
      let curlOptions = {};
      curlOptions.method = req.method;
      curlOptions.headers = req.headers; 
      if(req.method.toUpperCase() !== "GET") {
        curlOptions.data = req.body;
        curlOptions.stream = req;
        curlOptions.contentType = req.contentType ? req.contentType : 'application/json;utf8'; 
        curlOptions.dataType = 'json'; 
      } 
      try {
        let res = await ctx.curl(reqPath,curlOptions)
        if(res.status == 200) {
          res.data = req.method.toUpperCase() === 'GET' ? res.data.toString("utf8") : res.data;
          ctx.body = res.data;
        } else {
          ctx.body = {
            code: res.status,
            data: res.data.toString("utf8") == '[object Object]' ? res.data : res.data.toString("utf8"),
            message: "error"
          }
        }
      } catch (error) {
        ctx.body = {
          code: 500,
          data: null,
          message: "error"
        }
      }
      

    }
    await next();
  }
}