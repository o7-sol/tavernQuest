import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import VueCookie from 'vue-cookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: VueCookie.get('token') || '',
    user: '',
    stack_exchange_items: '',
    stack_exchange_elite_items: '',
    guild: ''

  },
  actions,
  mutations,
  getters: {
    user: state => {
      return state.user;
    },
    token: state => {
      return state.token;
    },
    stackExchangeItems: state => {
      return state.stack_exchange_items;
    },
    stackExchangeEliteItems: state => {
      return state.stack_exchange_elite_items;
    },
    guild: state => {
      return state.guild;
    }
  }
});
