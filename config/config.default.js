const path = require('path');
const fs = require('fs');
module.exports = app => {
  const exports = {};

  exports.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(app.baseDir, 'app/web/asset/images/favicon.ico'))
  };

  exports.logger = {
    consoleLevel: 'DEBUG',
    dir: path.join(process.cwd(), 'logs')
  };

  exports.static = {
    prefix: '/public/',
    dir: path.join(process.cwd(), 'public')
  };

  exports.keys = '123456';

  exports.middleware = [
    'access',
    'compress',
    'proxy'
  ];
  //服务器代理
  exports.proxy = {
    'game': '192.168.0.169:7001'
  }
  
  exports.compress = {
    threshold: 2048,
  },
  //凡是需要过滤的proxy代理都需要添加到ignore, 添加完成后重启服务器
  exports.security = {
    csrf: {
      enable: false,
      ignore: ['/game'],
    },
  };

  exports.reactssr = {
    layout: path.join(app.baseDir, 'app/web/view/layout.html')
  };
  exports.onerror= {
    // all(err, ctx) {
    //   // 在此处定义针对所有响应类型的错误处理方法
    //   // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
    //   ctx.body = 'error';
    //   ctx.status = 500;
    // },
    html(err, ctx) {
      // html hander
      ctx.body = '我是错误页面';
      ctx.status = 500;
    },
    json(err, ctx) {
      // json hander
      ctx.body = { message: 'error' };
      ctx.status = 500;
    },
    jsonp(err, ctx) {
      // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    },
  };

  return exports;
};