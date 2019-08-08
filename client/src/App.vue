<template>
  <div id="app">
  <b-navbar toggleable="lg" type="dark" style="background: black !important">
    <b-navbar-brand href="#" id="gameTitle">Tavern Quest</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <template v-if="!$cookie.get('user')">
        <router-link to="/">Sign in</router-link>
        </template>
        <template v-if="$cookie.get('user')">
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

        <b-nav-form>
          &nbsp;<b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

      <b-navbar-nav class="ml-auto">
        <span v-if="$cookie.get('user')">
        <b-nav-item>
        <span style="vertical-align: middle">
        <img src="./assets/gold.png" style="height: 25px; vertical-align: bottom">
        {{user.gold}}
        <strong style="color: red">EXP</strong>&nbsp; {{user.experience}}
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
        <app-user-info></app-user-info>
        <router-view/>
  </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Footer from './components/Footer';
import UserInfo from './components/UserInfo';
export default {
    data() {
      return {
        user: ''
      }
    },
    created() {
      this.user = JSON.parse(this.$cookie.get('user'));
    },
    methods: {
      logOut() {
        this.$cookie.delete('user');
        this.$router.go({name: 'home'});
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
  background-color: #070e29 !important;
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
  background: black !important;
}
</style>
