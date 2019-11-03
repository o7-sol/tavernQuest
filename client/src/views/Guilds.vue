<template>
    <div id="guilds" class="col-md-12">
        <b-button @click="createGuild" class="float-left">
            Create Guild
        </b-button>
          <div class="input-group col-md-4" style="margin-left: 33.2%">
            <input style="font-size: 13px;" type="text" class="form-control"
              id="inlineFormInputGroupMessage" placeholder="Search for guild">
              &nbsp;
              <b-button class="btn-sm" variant="danger">Search</b-button>
          </div>
        <br>
        <div class="row">    
        <div v-for="guild in guilds" :key="guild._id" class="col-md-4 guildCard">
            <div class="panelBody">
                <h1 class="panelTitle">
                    <img src="../assets/board.png" class="board"> {{guild.title}}
                </h1>
                <h5 class="title">{{guild.title}}</h5>
                <div class="row">
                <p class="col-md-4 text-center">
                    <img :src='require("../assets/hero/"+guild.leaderImg+"")'>
                    <br>
                    <span class="leader">
                    <img src="../assets/crown.png" class="crown"> 
                    {{guild.leader}}<br>
                    Level: {{guild.leaderLevel}}
                    </span>
                </p>
                <p class="col-md-4 guildInfo">
                    Required Level: {{guild.requiredLevel}}<br>
                    Members: {{guild.members.length}} / 50<br>
                    <img src="../assets/gold.png" class="guildGold"> {{guild.gold}}
                </p>
                <div class="col-md-4 applyBtn">
                    <b-button @click="joinGuild(guild._id)" v-if="user.level >= guild.requiredLevel" variant="success">
                        Apply Now
                    </b-button>
                    <b-button @click="lowLevel" v-else variant="light">Apply Now</b-button>
                </div>
                </div>
            </div>
        </div>
      </div>     
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    created() {
        if(this.$cookie.get('user')) {
            this.user = JSON.parse(this.$cookie.get('user'));
        }
        this.getGuilds();
    },    
    methods: {
        joinGuild(id) {
            this.applyToGuild(id).then(data => {
                if(data && data.success) {
                    console.log('joined')
                } else if(data && data.error) {
                    this.$bvToast.toast(data.error, {
                        title: 'Notification',
                        variant: 'warning',
                        solid: true,
                        autoHideDelay: 5000
                    })                     
                }
            });
        },
        lowLevel() {
            this.$bvToast.toast("Your level doesn't match the guild requested level.", {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
            })            
        },
        createGuild() {
            if(this.user.level < 15) {
                this.$bvToast.toast('Level 15 is required to be able to create a guild.', {
                title: 'Notification',
                autoHideDelay: 5000,
                appendToast: false,
                variant: 'warning'
                });
            } else {
                const userLevel = this.user.level;
                this.checkUserLevel(userLevel).then(data => {
                    if(data >= 15) {
                        this.$router.push({name: 'create-guild'});
                    }
                });
            }
        },
        ...mapActions([
            'checkUserLevel',
            'getGuilds',
            'applyToGuild'
        ])
    },
    computed: {
        ...mapGetters([
            'user',
            'guilds'
        ])
    }
}
</script>

<style scoped>
#guilds {
    padding-left: 24px;
    padding-right: 24px;
    padding-top: 30px;
    padding-bottom: 8px;
    color: #D5C8FF;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: relative;
}
.panelTitle {
    color: #fff;
    background-color: #7337d2;
    height: 40px;
    margin-bottom: 0;
    padding: 13px;
    border: 1px solid #474747;
    border-radius: 2px;
    font-size: 13px;
}
.panelBody {
    background-color: #af1818;
    color: #fff;
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
}
.title {
    color: #fbc405;
    background: #100e0e;
    padding: 5px;
    text-align: center;
}
.leader {
    margin-left: -9px;
}
.crown {
    vertical-align: text-top;
}
.guildInfo {
    padding-top: 15px;
}
.guildGold {
    height: 25px; 
    margin-left: -4px;
    image-rendering: pixelated;
    vertical-align: bottom;    
}
.applyBtn {
    padding-top: 30px;
}
.guildCard {
    padding-bottom: 30px;
}
</style>
