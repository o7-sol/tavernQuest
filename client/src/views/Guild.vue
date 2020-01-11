<template>
    <div class="gameScreen">
        <div class="panelBody">
            <h1 class="panelTitle">
                <img src="../assets/board.png" class="board"> Guild
            </h1>
            <div class="col-md-12">
                <br>
                <app-admin :user="user" :guild="guild"></app-admin>

                <GuildInfo :guild="guild"></GuildInfo>

                <div class="row">
                    <div class="col-md-4">
                        <Statistic :guild="guild"></Statistic>
                        <br>                                                                                                          
                    </div>                      

                    <Activities :user="user"></Activities>

                    <Chatroom :guild="guild"></Chatroom>
                    </div>
                </div>
                <br>
            </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Admin from '../components/guild/Admin';
import Activities from '../components/guild/Activites';
import GuildInfo from '../components/guild/GuildInfo';
import Statistic from '../components/guild/Statistic';
import ItemsExchange from '../components/guild/ItemsExchange';
import Chatroom from '../components/guild/Chatroom';

export default {
    created() {
        if(this.$cookie.get('guildCreated')) {
            this.$bvToast.toast('Guild was created successfully', {
            title: 'Notification',
            variant: 'success',
            solid: true,
            autoHideDelay: 5000
          });             
        }
        this.getGuildInfo();
    },
    methods: {
        errorToast(text) {
            this.$bvToast.toast(text, {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
            })
        },
        sendMessage() {
            this.sendGuildMessage(this.message).then(data => {

                if(data && data.error) {
                    return this.errorToast(data.error);
                } 

                if(data && data.message) {
                    this.$socket.emit('guildMsgToServer', {
                        message: data.message
                    }); 
                }

            });           
        },
        ...mapActions([
            'getGuildInfo'
        ])
    },
    computed: {
        user() {
            return this.$store.getter.user;
        },
        ...mapGetters([
            'guild',
            'user',
        ])
    },
    components: {
        appAdmin: Admin,
        Activities,
        GuildInfo,
        Statistic,
        ItemsExchange,
        Chatroom
    }
}
</script>

<style scoped>
.panelTitle {
    background-color: #512597;
    height: 40px;
    margin-bottom: 0;
    padding: 13px;
    border: 1px solid #474747;
    border-radius: 2px;
    font-size: 13px;
}
.panelBody {
    background-color: #050c29;
    color: #fff;
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
}
.userImg {
    height: 42px;
    padding-bottom: 6px;
    image-rendering: pixelated;
}
</style>
