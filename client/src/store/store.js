import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import VueCookie from 'vue-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: VueCookie.get('token') || '',
    user_items: ''
  },
  actions,
  mutations,
  getters: {
    token: state => {
      return state.token;
    },
    storedUserItems: state => {
      return state.user_items
    }
  }
});
