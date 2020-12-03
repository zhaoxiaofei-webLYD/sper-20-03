import Vue from 'vue'
import Vuerouter from 'vue-router'
const Home = () => import('../views/home/Home.vue')
const Category = () => import('../views/category/Category.vue')
const Cart = () => import('../views/cart/Cart.vue')
const Profile = () => import('../views/profile/Profile.vue')
// 安装插件
Vue.use(Vuerouter)
// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: "首页"
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: "购物车"
    }
  },
  {
    path: '/categroy',
    component: Category,
    meta: {
      title: "分类"
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: "个人"
    }
  }
]
const router = new Vuerouter({
  routes,
  mode: 'history',
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next()
})
export default router