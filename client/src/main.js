import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue';
import router from './router';
import store from './store/store';
import VueCookie from 'vue-cookie';
import Dayjs from 'vue-dayjs';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(VueCookie);
Vue.use(BootstrapVue);
Vue.use(Dayjs);

Vue.use(new VueSocketIO({
  debug: true,
  connection: '127.0.0.1:3000'
  //connection: 'https://tavernquest.herokuapp.com'
}))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
