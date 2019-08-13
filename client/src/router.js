import Vue from 'vue';
import Router from 'vue-router';
import multiguard from 'vue-router-multiguard';
import Home from './views/Home.vue';
import VueCookie from 'vue-cookie';
import API from './api';

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

const playerIsLeaderOfGuild = (to, from, next) => {
 return API.post('/leader-of-guild').then(response => {
    if(response.status === 200 && response.data.success) {
     return next('/guild');
    } else if(response.data.notLeader) {
      return next();
    }
  });
}

const isMemberOfGuild = (to, from, next) => {
  return API.get('/guild-member').then(response => {
    if(response.status === 200 && response.data.success) {
      return next();
    } else if(response.data.notMember) {
      return next('/');
    }
  });
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
    },
    {
      path: '/market/strength',
      name: 'strengthMarket',
      component: () => import(/* webpackChunkName: "strengthMarket" */ './components/market/StrengthMarket.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/market/agility',
      name: 'agilityMarket',
      component: () => import(/* webpackChunkName: "agilityMarket" */ './components/market/AgilityMarket.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/market/vitality',
      name: 'vitalityMarket',
      component: () => import(/* webpackChunkName: "agilityMarket" */ './components/market/VitalityMarket.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/market/intellect',
      name: 'intellectMarket',
      component: () => import(/* webpackChunkName: "agilityMarket" */ './components/market/IntellectMarket.vue'),
      beforeEnter: isLoggedIn
    },  
    {
      path: '/guilds',
      name: 'guilds',
      component: () => import(/* webpackChunkName: "guilds" */ './views/Guilds.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/guild',
      name: 'guild',
      component: () => import(/* webpackChunkName: "guild" */ './views/Guild.vue'),
      beforeEnter: multiguard([isLoggedIn, isMemberOfGuild])
    },
    {
      path: '/achievements',
      name: 'achievements',
      component: () => import(/* webpackChunkName: "achievements" */ './views/Achievements.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/bank',
      name: 'bank',
      component: () => import(/* webpackChunkName: "bank" */ './views/Bank.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/stack-exchange',
      name: 'stack-exchange',
      component: () => import(/* webpackChunkName: "stack-exchange" */ './views/StackExchange.vue'),
      beforeEnter: isLoggedIn
    },
    {
      path: '/create-guild',
      name: 'create-guild',
      component: () => import(/* webpackChunkName: "create-guild" */ './components/guild/CreateGuild.vue'),
      beforeEnter: multiguard([isLoggedIn, playerIsLeaderOfGuild])
    }
  ],
});
