'use strict';
const path = require("path");

module.exports = appInfo => {
    const config = exports = {};
    exports.view = {
        defaultViewEngine: 'nunjucks',
        // mapping: {
        //     '.html': 'nunjucks',
        // },
        root: path.join(appInfo.baseDir, '/app/public/'),
    };
    exports.static = {
        prefix: '/',
        dir: path.join(appInfo.baseDir, 'app/public'),
        dynamic: true,
        preload: false,
    };
    config.sequelize = {
        // support: mysql, mariadb, postgres, mssql
        dialect: 'mysql',
        database: 'information_schema',
        //上面的database项不要修改!!!只需要修改下面四项(如果有必要的话)
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '',
        // delegate: 'myModel', // load all models to `app[delegate]` and `ctx[delegate]`, default to `model`
        // baseDir: 'my_model', // load all files in `app/${baseDir}` as models, default to `model`
        // exclude: 'index.js', // ignore `app/${baseDir}/index.js` when load models, support glob and array
        // more sequelize options
    };
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_anxunsi_token';

    // add your config here
    config.middleware = [];

    return config;
};
