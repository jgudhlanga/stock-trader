import Vue from 'vue'
import VueRouter from 'vue-router';
import * as filters from './filters/global-filters';
import App from './App.vue'
import { routes } from './routes';
import store from './store/store';
import VueResource from 'vue-resource';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-stock-trader-4b9db.firebaseio.com/';

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
