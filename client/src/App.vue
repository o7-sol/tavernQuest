<template>
  <div id="app">
    <Navbar :user="user"></Navbar>
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
import Navbar from './components/Navbar';
import { mapGetters, mapActions } from 'vuex';
export default {
    methods: {
      ...mapActions([
        'reAuthenticate',
      ])
    },
    created() {
      this.reAuthenticate(this.$cookie.get('token'));
    },
    sockets: {
      soldStackExchangeItem: function(data) {
        const userID = data.userID;
        const message = data.message;

        if(this.user._id === userID) {
            let imgURL;
            if(data.type === "Strength") {
                imgURL = require("./assets/items/strength/"+data.itemImg);
            } else if (data.type === "Agility") {
                imgURL = require("./assets/items/agility/"+data.itemImg);
            } else if (data.type === "Vitality") {
                imgURL = require("./assets/items/vitality/"+data.itemImg);
            } else {
                imgURL = require("./assets/items/intellect/"+data.itemImg);
            }

           const h = this.$createElement

           const vNodesMsg = h(
            'p',
            { class: ['text-center', 'mb-0'] },
              [
                h('b-img', { props: { 'src': imgURL}}),
                h('strong', {}, message),
              ]
            );                

            this.$bvToast.toast([vNodesMsg], {
              title: 'Item sold',
              variant: 'success',
              solid: true,
              autoHideDelay: 5000
              });
        }
      }
    },
    computed: {
        ...mapGetters(['user', 'notifications'])
    },
    components: {
      appUserInfo: UserInfo,
      appFooter: Footer,
      Navbar
    }
}
</script>

<style>
body {
  font-family: 'Roboto Condensed', sans-serif !important;
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
