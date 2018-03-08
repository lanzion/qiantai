// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import storeCart from "./store/cart.js";
import Vuex from "vuex";
Vue.use(Vuex)

import 'normalize.css';

import axios from "axios";
import api, { domain } from "./js/api.js";

import "./less/index.less";
import  "./assets/css/style.css";

// 配置默认域名, 这样请求的时候就不用在url里加域名了
axios.defaults.baseURL = domain;
// 因为我们调用的接口跨域了，默认情况下接口给我们设置的cookie无效，为了有效，我们要设置
// 我们是跨域请求的接口, 默认不会携带cookie等信息, 后端需要这些信息来判断登陆状态, 所以要设为true
axios.defaults.withCredentials = true;
// 为了使用方便，把axios和pai添加到Vue原型，将来Vue组件可以直接使用

Vue.prototype.$http = axios;
Vue.prototype.$api = api;


Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store: new Vuex.Store(storeCart)
})
