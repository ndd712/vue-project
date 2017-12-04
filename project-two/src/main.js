//引入资源
import Vue from 'vue';

//注册全局组件  开始
import MyLi from './components/Commons/MyLi.vue';
import MyUI from './components/Commons/MyUI.vue';
Vue.component(MyUI.name,MyUI);
Vue.component(MyLi.name,MyLi);
//注册全局组件  结束




//路由相关组件 开始
import App from './components/App.vue';
import Home from './components/Home/Home.vue'
import Member from './components/Member/Member.vue'
import Shopcart from './components/Shopcart/Shopcart.vue'
import Search from './components/Search/Search.vue'

//路由相关组件结束

//VueRouter 开始
import VueRouter from 'vue-router';
Vue.use(VueRouter);

let router = new VueRouter();
router.addRoutes([
    {
        path: '/', redirect: {
            name: 'home'
        }
    },
    { name: 'home', path: '/home', component: Home },//首页 
    { name: 'member', path: '/member', component: Member },//会员
    { name: 'Shopcart', path: '/Shopcart', component: Shopcart },//购物车
    { name: 'Search', path: '/Search', component: Search },//查找


]);


//VueRouterr 结束

//MintUi 开始
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUi);


//MintUi 结束


//考虑未来可能有样式的覆盖，在之后再引入自己的css
import './static/css/global.css'

//Axios 开始
import Axios from 'axios';
Vue.prototype.$axios = Axios;

Axios.defaults.baseURL = 'http://vue.studyit.io/api/';


//Axios 结束

new Vue({
    el:'#app',
    render:c=>c(App),
    router
});