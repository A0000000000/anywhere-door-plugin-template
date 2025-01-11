# anywhere-door-plugin-template
AnywhereDoor下基于JavaScript的Plugin模版

## 使用方式
* 安装依赖: `npm i`
* index.js中配置config地址(不需要config的plugin，将此处逻辑删除，参数传空对象或者直接把参数干掉即可)
* cmd_list.js中编写具体命令对应的处理函数
* help中编写帮助信息

## 环境变量
* HOST: 控制平面地址
* PORT: 控制平面端口
* PREFIX: 控制平面前缀
* USERNAME: plugin所属用户名称
* TOKEN: plugin令牌
* PLUGIN_NAME: plugin名称

## 打包
* docker buildx build --platform linux/amd64 -t 192.168.25.5:31100/maoyanluo/anywhere-door-plugin-template:1.0 . --load

## 部署
* 略
