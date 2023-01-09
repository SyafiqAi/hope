// import Vue from 'vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = createRouter({
  mode: 'hash',
  history: createWebHashHistory(),
  routes
})

export default router
