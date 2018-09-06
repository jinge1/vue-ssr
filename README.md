# vue服务端渲染demo

## 基本服务端渲染
* server分支，实现基本服务端渲染功能
* 主要使用vue, vue-server-renderer, express实现

## 服务端渲染 + 路由
* server-router分支，实现服务端渲染路由功能
* 增加vue-router实现

## 服务端渲染 + 路由 + 接口数据
*server-vuex分支实现服务端接口数据渲染*
* 增加vuex实现

## 服务端渲染 + 客户端渲染 + 路由 + 接口数据
*master分支，实现服务端 + 客户端渲染的整合方案*

## 服务端渲染原理
* 当进入或者刷新某个路由的时候，由服务端通过vue-server-renderer库完成vue组件到html字符串的转化，直接输出已渲染的html文件。

## 客户端渲染原理
* 依然采用ajax渲染方式渲染。
* 首次进入页面的时候，由于服务端已经渲染完成，可通过store.replaceState方法完成渲染（serve端完成数据注入：window.__INITIAL_STATE__）

## 启动项目：
```
npm start
```
