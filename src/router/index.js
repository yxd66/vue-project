import { createRouter, createWebHistory } from 'vue-router'
var ZhuYe = () =>import('@/views/zhuye/ZhuYe')
var FenLei = () =>import('@/views/fenlei/FenLei')
var GouWuChe = () =>import('@/views/gouwuche/GouWuChe')
var WoDe = () =>import('@/views/wode/WoDe')

const routes = [
  {
    path: '',
    redirect: '/zhuye'
  },
  {
    path: '/zhuye',
    name: 'ZhuYe',
    component: ZhuYe
  },
  {
    path: '/fenlei',
    name: 'FenLei',
    component: FenLei
  },
  {
    path: '/gouwuche',
    name: 'GouWuChe',
    component: GouWuChe
  },
  {
    path: '/wode',
    name: 'WoDe',
    component: WoDe
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
