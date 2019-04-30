import Vue from 'vue';
import App from './App.vue';
import router from '@/router/';
import ElementUI from 'element-ui';
import '@/api/';
import 'element-ui/lib/theme-chalk/index.css';
import httpClient from '@/api/httpClient';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(httpClient)

Vue.prototype.bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
