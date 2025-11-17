import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    {
      path: '/brazil',
      name: 'brazil',
      component: () => import(/* webpackChunkName:"brazil" */'../views/Brazil.vue'),
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import(/* webpackChunkName:"hawaii" */'../views/Hawaii.vue'),
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import(/* webpackChunkName:"jamaica" */'../views/Jamaica.vue'),
    },
    {
      path: '/panama',
      name: 'panama',
      component: () => import(/* webpackChunkName:"panama" */'../views/Panama.vue'),
    },
    {
      path: "/about",
      name: "About",

      component: () =>
        import(/* webpackChunkName:"about" */ "../views/About.vue"),
    },
    {
      path: "/destination/:id",
      name: "destination.show",
      component: () =>
        import("@/views/DestinationShow.vue"),
    },
  ],
})

export default router
