import Vue from 'vue'
import Router from 'vue-router'
import Tab from "../components/tabbar/Home";
import Search from "../components/tabbar/Search";
import Member from "../components/tabbar/Member";
import ShopCar from "../components/tabbar/ShopCar";
import detail from "../components/News/info"
import {Swipe, SwipeItem,Header,Button} from "mint-ui";
import VueResource from 'vue-resource'
// import jquery from '../../node_modules/jquery/dist/jquery.min'
import NewList from "../components/News/NewList";
import moment from 'moment'
import Coment from "../components/Subcompnents/Coment";
import photoList from "../photos/photoList.vue";
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)


Vue.use(Router)
Vue.use(VueResource)

Vue.filter('dataFormat',function (datastr,pattern="YYYY-MM--DD HH:mm:ss"){
   moment(datastr).format(pattern)
})//在调用出用   |datastr 调用就行了

export default new Router({
  routes: [
    {path: '/',redirect:'/home'},
    {path:'/home',component:Tab},
    {path:'/search',component:Search},
    {path:'/member',component:Member},
    {path:'/shopCar',component:ShopCar},
    {path:'/News/NewList',component:NewList},
    {path:'/News/info',component: detail},
    {path:'/home/photoList',component: photoList}
  ]
})
