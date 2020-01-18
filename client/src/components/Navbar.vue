<template>
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
        <!-- <router-link to="/achievements">Achievements</router-link> -->
        
          <b-nav-item-dropdown text="Notifications">
          <button v-if="notifications.length" @click="clearNotifications" class="btn btn-sm btn-primary" style="margin-left: 5%">Clear All</button>  
          <p class="text-center" v-else style="color: white">There are no new notifications.</p>
          <br>
          <ul id="notificationsNav" class="dropdown-item list-unstyled">
              <li v-for="n in notifications" v-if="n.title === 'Stack Exchange'" :key="n._id">
                  <small>{{ n.created_at }}</small>
                  <br>
                  {{ n.title }}: 
                  <img v-if="n.itemType === 'Strength'" :src="require('../assets/items/strength/'+n.itemImg)">
                  <img v-if="n.itemType === 'Intellect'" :src="require('../assets/items/intellect/'+n.itemImg)">
                  <img v-if="n.itemType === 'Vitality'" :src="require('../assets/items/vitality/'+n.itemImg)">
                  <img v-if="n.itemType === 'Agility'" :src="require('../assets/items/agility/'+n.itemImg)">
                  {{ n.message }}
                  <hr>
              </li>
          </ul>
        </b-nav-item-dropdown> 

        <router-link to="/forum">Forum</router-link>
        </template>
        <router-link to="/about">About</router-link>
      </b-navbar-nav>

      <!-- Right aligned nav items -->

      <b-navbar-nav class="ml-auto">
        <span v-if="user">
        <b-nav-item>
        <span style="vertical-align: top">
        <img src="../assets/gold.png" style="height: 25px; vertical-align: bottom">
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
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    props: ['user'],

    created() {
        this.getNotifications();
    },
    methods: {
        logOut() {
            this.$cookie.delete('token');
            this.$store.state.user = '';
            this.$router.push({name: 'home'});
        },
        ...mapActions(['getNotifications', 'clearNotifications'])
    },
    computed: {
        ...mapGetters(['notifications'])
    }
}
</script>

<style scoped>
#notificationsNav {
    height: 180px;
    width: 410px;
    overflow-y: scroll;
}
</style>