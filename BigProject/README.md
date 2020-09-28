# project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#为加载更多按钮,绑定点击事件,在事件中,请求下一页的数据,
##点击加载,让pageIndex++ 然后重新调用 请求方法获取一组新的数据
###新数据会覆盖旧数据,在加载更多的时候用concat页码进行连接
For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
