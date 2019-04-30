import Vue from 'vue';
import VueRouter from 'vue-router'; // 路由组件
import routes from '@/router/router'; // 路由地址

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;