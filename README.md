# 俺寻思?

## 克隆项目到本地
```
git clone --depth 1 https://github.com/1102568869/mysql-dictionary.git
```
```
cd mysql-dictionary
```
## 一键启动  
mac:
```
sh ./ci/run.sh
```

win:
~~谁会写求告诉我,我他喵的不会...~~

**tips:如果启动报错,请修改`anxunsi-server/config/config.default.js`文件中的数据库连接相关配置**
```
host: 'xxx',
port: 'xxx',
username: 'xxx',
password: 'xxx',
```

## 访问项目  
愉快的在浏览器输入[http://127.0.0.1:7001](http://127.0.0.1:7001)访问项目吧