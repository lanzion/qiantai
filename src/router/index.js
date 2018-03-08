import Vue from 'vue'
import Router from 'vue-router'

// 导入账户管理相关页面
import Login from "../components/account/login/Login.vue";

// 导入商城相关页面
import Shop from "../components/shop/Shop.vue";
import Shopcart from "../components/shop/shopcart/Shopcart.vue";
import GoodsList from "../components/shop/goods/List.vue";
import GoodsDetail from "../components/shop/goods/Detail.vue";
import OrderComlete from "../components/shop/order/Complete.vue";
import OrderPay from "../components/shop/order/Pay.vue";
import OrderSite from "../components/shop/order/Site.vue";

Vue.use(Router)

let goods = [
  { name: 'GoodsList', path: 'goods/list', component: GoodsList },
  { name: 'GoodsDetail', path: 'goods/detail/:id', component: GoodsDetail }
]

let order = [
  { name: 'OrderComlete', path: 'order/complete', component: OrderComlete },
  { name: 'OrderPay', path: 'order/pay/:id', component: OrderPay },
  { name: 'OrderSite', path: 'order/site/:id', component: OrderSite }
]

let shopcart = [
  { name: 'shopcart', path: 'shopcart', component: Shopcart },
]


let router = new Router({
  routes: [
    { path: '/', redirect: '/goods/list' },
    //  账号管理路由配置
    { name: 'login', path: '/login', component: Login },

    // 商城路由配置
    { name: 'shop', path: '/', component: Shop, children: [...goods, ...order, ...shopcart] }
  ]
})

export default router;