<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" style="background: black !important">
    <b-navbar-brand href="#" id="gameTitle">Tavern Quest</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <template v-if="!user">
        <router-link to="/">Sign in</router-link>
        </template>
        <template v-if="user">
        <router-link to="/game">Home</router-link>
        <router-link to="/arena">Arena</router-link>
        <router-link to="/market">Market</router-link>   
        <router-link to="/stack-exchange">Stack Exchange</router-link>
        <b-nav-item-dropdown text="Guilds">
          <router-link to="/guilds" class="dropdown-item">Guilds List</router-link>
          <router-link to="/guild" class="dropdown-item">My Guild</router-link>
        </b-nav-item-dropdown>        
        <router-link to="/achievements">Achievements</router-link>
        <router-link to="/forum">Forum</router-link>
        </template>
        <router-link to="/about">About</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto">
        <span v-if="user">
        <b-nav-item>
        <span style="vertical-align: top">
        <img src="./assets/gold.png" style="height: 25px; vertical-align: bottom">
        {{user.gold}}
        &nbsp;
        <strong style="color: red">EXP</strong> {{user.experience}}
        <router-link to="/bank">Bank</router-link>
        <router-link to="/profile">{{user.username}}</router-link>
        <router-link @click.native="logOut" to="/">Log Out</router-link>    
       </span>       
        </b-nav-item>
        </span>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <div class="container-fluid">
        <app-user-info v-if="user"></app-user-info>
        <router-view/>
  </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import UserInfo from './components/UserInfo';
import { mapGetters, mapActions } from 'vuex';
export default {
    methods: {
      logOut() {
        this.$cookie.delete('token');
        this.$store.state.user = '';
        this.$router.push({name: 'home'});
      },
      ...mapActions([
        'reAuthenticate',
      ])
    },
    created() {
      this.reAuthenticate(this.$cookie.get('token'));

      this.$socket.on('hey', (data) => {
        console.log(data)
      })
    },
    computed: {
      user() {
        return this.$store.getters.user;
      }
    },
    components: {
      appUserInfo: UserInfo,
      appFooter: Footer
    }
}
</script>

<style>
body {
  font-family: 'Roboto Condensed', sans-serif !important;
  /*background-color: #070e29 !important;*/
  background: #0e0e0e !important;
  height: 100%;
  position: relative;
  text-rendering: optimizeLegibility !important; 
  -webkit-font-smoothing: antialiased !important;  
}
#app {
  height: calc(100% - 56px);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
}
.container-fluid {
  min-height: 100vh;
}
.navbar-nav a {
  padding: 0.5rem;
  color: white;
  font-weight: bold;
}
.navbar-nav a:active {
  padding: 0.5rem;
}
#gameTitle {
  font-family: 'Cormorant', serif;
  color: #de9c20;
}
#goldIcon {
  height: 30px;
  image-rendering: pixelated;
}
.board {
  vertical-align: bottom;
}
.navbar-nav a:hover {
  text-decoration: none;
  color: #30007b !important;
}
.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 1) !important;
}
.dropdown-menu {
  background-color: #1d1d1d !important;
}
.dropdown-item  {
  color: white !important;
  background: #1d1d1d !important;
}
.sectionTitle {
    font-family: 'Cormorant', serif; 
    color: #de9c20;
}
.b-toast-warning .toast .toast-header {
    background: #7337d2 !important;
    color: white !important;
}
.b-toast-success .toast .toast-header {
    background: #7337d2 !important;
    color: white !important;
}
.b-toast-secondary .toast .toast-header {
    background: #7337d2 !important;
    color: white !important;
}
.b-toast-warning .toast {
  color: white !important;
  border-color: black !important;
}
.b-toast-success .toast {
  color: black !important;
  border-color: black !important;
}
.b-toast-secondary .toast {
  color: white !important;
  border-color: black !important;
}
.b-toast-warning .toast-body {
  background: #dc3545 !important;
}
.b-toast-success .toast-body {
  background: #04d61e !important;
}
.b-toast-secondary .toast-body {
  background: #ff5555 !important;
}
.page-link {
    background: #7337d2 !important;
    border-color: black !important;
}
.page-link {
  color: white !important;
}
.gameScreen {
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 30px;
  padding-bottom: 8px;
  color: #D5C8FF;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  position: relative;
}
</style>
