import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import VueCookie from 'vue-cookie';

const isNotLoggedIn = (to, from, next) => {
  if(!VueCookie.get('user')) {
    next();
  } else {
    next('/game');
  }
}

const isLoggedIn = (to, from, next) => {
  if(VueCookie.get('user')) {
    next();
  } else {
    next('/');
  }
}

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: isNotLoggedIn
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/sign-up',
      name: 'signup',
      component: () => import(/* webpackChunkName: "signup" */ './views/Signup.vue'),
      beforeEnter: isNotLoggedIn
    },
    {
      path: '/game',
      name: 'game',
      component: () => import(/* webpackChunkName: "game" */ './views/Game.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/market',
      name: 'market',
      component: () => import(/* webpackChunkName: "market" */ './views/Market.vue'),
      beforeEnter: isLoggedIn
    }
  ],
});
