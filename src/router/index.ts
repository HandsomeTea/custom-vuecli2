import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [{
    path: '/',
    redirect: '/index',
    component: () => import(/* webpackChunkName: 'layout' */ '../views/layout/index.vue'),
    children: [{
        path: '/index',
        component: () => import(/* webpackChunkName: 'home' */ '../views/home.vue')
    }]
}];

const router = new VueRouter({
    mode: process.env.NODE_ENV === 'development' ? 'hash' : 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
