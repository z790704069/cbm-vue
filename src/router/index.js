import Vue from 'vue';
import VueRouter from 'vue-router'; // 路由组件
import routes from '@/router/router'; // 路由地址
import store from '@/store/'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.auth)){
    if(store.state.cbm_login === 'true'){
      next();
    }else{
      if(to.name === 'login'){
        next();
        return;
      }
      next({
        path: '/',
      })
    }
  }else{
    next();  //不需要登录验证的页面，直接跳转
  }
});

export default router;