import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: "/",
    redirect: "index",
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: "/index",
        name: "index",
        component: () => import('@/views/index/index.vue'),
      },
      {
        path: "/category",
        name: "category",
        component: () => import('@/views/category/index.vue'),
      },
      {
        path: "/info",
        name: "info",
        component: () => import('@/views/info/index.vue'),
      },
      {
        path: "/look",
        name: "look",
        component: () => import('@/views/look/index.vue'),
      },
      {
        path: "/policy",
        name: "policy",
        component: () => import('@/views/policy/index.vue'),
      },
      {
        path: "/search",
        name: "search",
        component: () => import('@/views/search/index.vue'),
      },
    ]
  },
];

export default new createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
      left: 0
    }
  }
});
