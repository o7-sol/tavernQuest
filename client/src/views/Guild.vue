<template>
    <div class="gameScreen">
            <div class="panelBody">
                <h1 class="panelTitle">
                    <img src="../assets/board.png" class="board"> Guild
                </h1>
                <div class="col-md-12">


                   <app-admin :user="user" :guild="guild"></app-admin>

                   <ul v-if="errors.length" class="list-unstyled">
                       <li class="alert alert-danger" v-for="e in errors">
                           {{e}}
                       </li>
                   </ul>

                   <div v-if="fillBankForm" class="col-md-2 mx-auto text-center">
                       <h5>
                           Fill The Bank
                        </h5>
                       <div id="bankBox">
                       <input v-model.trim="amountOfGold" class="form-control" type="number" min="1" :max="user.gold" placeholder="Amount of gold">
                       <small>Max: {{user.gold}}</small><br>
                       <b-button @click="fillBank()">
                           Fill
                       </b-button>
                       </div>
                   </div>

                    <div id="guildInfo">
                        <img src="../assets/altor.png" style="vertical-align: bottom;"> {{guild.title}}
                        <img src="../assets/gold.png" style="height: 30px; margin-top: -3px;"> {{guild.gold}}
                        &nbsp;<strong style="color: red">EXPERIENCE</strong> {{guild.experience}} <br>
                        <img :src="require('../assets/hero/'+guild.leaderImg)" id="leaderImg"> 
                        &nbsp;<strong>{{guild.leader}}</strong> (<span style="color: red">LEADER</span>)
                        <br><br>
                        <span id="announcement">
                            <img src="../assets/msgboard.png" style="margin-top: -4px"> 
                            ANNOUNCEMENT
                        </span>
                        <span id="announcementText">
                        <small style="vertical-align: text-bottom;">{{guild.announcement_createdAt}}</small>
                        {{guild.announcement}}
                        </span>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Statistic</p>
                            <p>
                                Wins: <span id="wins">{{guild.wins}}</span>
                                Loses: <span id="loses">{{guild.loses}}</span>
                                Rank: <span id="rank">#{{guild.rank}}</span>
                                Members: <span id="members">{{guild.members.length}} / 50</span>
                            </p>   
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Items Exchange</p>
                            
                            <div>
                                <span class="item">
                                <img src="../assets/items/strength/W_Mace005.png">
                                <span>Light Mace</span>
                                </span>
                                <span class="forItem">
                                <img src="../assets/items/strength/W_Sword017.png">
                                <span>Desolator</span>
                                </span>
                                <span class="userExchange">
                                    <strong>Zlotte</strong>
                                </span>                             
                            </div>
                            <br>                                                                                                          
                        </div>                      
                        <div class="col-md-4">
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Actions</p>
                            <b-button @click="fillBankForm = !fillBankForm" variant="danger" style="background: #ff0000;"> 
                                Fill The Bank
                            </b-button>&nbsp;
                            <b-button variant="warning"> 
                                Borrow Gold
                            </b-button>&nbsp;
                            <b-button variant="info"> 
                                Exchange Item
                            </b-button>  
                            <br>
                            <p style="margin-top: 1px;">
                            <img src="../assets/board.png" style="margin-top: -4px;"> Latest Activity</p>
                            <ul class="list-unstyled" style="margin-top: -7px;">
                                <li v-for="activity in guild.latestActivity.slice().reverse()" class="activityInfo">
                                    <span v-if="activity.gold">
                                    <small class="actDateBank">{{activity.createdAt}}</small>&nbsp;
                                    <img :src="require('../assets/hero/'+activity.img)" class="activityHero">
                                    &nbsp;<span class="actText">{{activity.username}} <strong>filled the bank with</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    {{activity.amount}}</span>
                                    </span>

                                    <span v-if="activity.borrowGold">
                                    <small class="actDateBorrow">{{activity.createdAt}}</small>&nbsp;
                                    <img :src="require('../assets/hero/'+activity.img)" class="activityHero">
                                    &nbsp;<span class="actText">{{activity.username}} <strong>borrowed</strong>
                                    &nbsp;<img src="../assets/gold.png" class="actGold">
                                    {{activity.amount}}</span>                                            
                                    </span>

                                    <span v-if="activity.exchangeItem">
                                    <small class="actDateExchange">{{activity.createdAt}}</small>&nbsp;
                                    <img :src="require('../assets/hero/'+activity.img)" class="activityHero">
                                    &nbsp;<span class="actText">{{activity.username}} <strong>posted exchange</strong>
                                    </span>
                                    </span>
                                </li>
                                                                                                                          
                            </ul>                                                        
                        </div>
                        <div class="col-md-4">
                            <p><img src="../assets/board.png" style="margin-top: -4px;"> Chatroom</p>
                            <ul class="list-unstyled">         
                                <li>
                                    <small class="msgDate">2019-08-04 20:06 Zlotte</small><br>
                                    <small class="msgText">
                                        Some lorem ipsum text coming home
                                        Some lorem ipsum text coming home
                                    </small>
                                </li>
                                <br>                                                            
                            <div class="input-group" style="margin-top: 5px;">
                                <div class="input-group-prepend">
                                <div style="font-size: 15px;" class="input-group-text" id="sendBtn">Send</div>
                                </div>
                                <input style="font-size: 15px;" type="text" class="form-control"
                                id="inlineFormInputGroupMessage" placeholder="Type message...">
                            </div>                                                                                                
                            </ul>
                        </div>
                    </div>
                </div>
                <br>
            </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Admin from '../components/guild/Admin';

export default {
    data() {
        return {
            fillBankForm: false,
            amountOfGold: '',
            errors: [],
        }
    },
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
        fillBank() {
            
            this.errors = [];
            if(this.amountOfGold === 0 || this.amountOfGold < 1) {
                return this.errors.push('Zero is not aceptable amount.');
            } else if(this.amountOfGold > this.user.gold) {
                return this.errors.push('This amount is over you current gold limit.');
            } else {

                this.fillTheBank(this.amountOfGold).then(data => {
                    if(data.successMsg) {
                        this.$bvToast.toast(`${data.successMsg}`, {
                        title: 'Notification',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 10000
                    });      
                    this.guild.gold += parseInt(this.amountOfGold); 
                    this.fillBankForm = false;        
                    this.amountOfGold = '';                    
                    } 
                });
            }
        },
        ...mapActions([
            'getGuildInfo',
            'fillTheBank'
        ])
    },
    computed: {
        user() {
            return this.$store.getter.user;
        },
        ...mapGetters([
            'guild',
            'user'
        ])
    },
    components: {
        appAdmin: Admin,
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
#guildInfo {
    text-align: center;
    padding: 18px;
}
#leaderImg {
    height: 30px;
    image-rendering: pixelated;
    vertical-align: bottom;
}
#wins {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#loses {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#rank {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#members {
    background: #7337d2;
    padding: 5px;
    border-radius: 12px;
}
#announcement {
    background: #7337d2;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #232323;
}
#announcementText {
    background: #050806;
    padding: 5px;
    border-radius: 5px;
    margin-left: -4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border: 1px solid #232323;
    border-left: none;
}
#sendBtn {
    background: #04d004;
    color: black;
}
.item {
    background: #a900ff;
    border-radius: 5px;
    padding: 10px 20px 10px 10px;    
}
.forItem {
    background: #223196;
    padding: 10px;
    border-radius: 5px;
    margin-left: -5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.itemGold {
    height: 25px;
    image-rendering: pixelated;
    margin-top: -2px;
}
.userImg {
    height: 42px;
    padding-bottom: 6px;
    image-rendering: pixelated;
}
.userExchange {
    background: black;
    padding: 12px;
    border-radius: 5px;
    margin-left: -5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.activityInfo {
    background: black;
    padding: 5px;
}
.activityHero {
    height: 32px;
    image-rendering: pixelated;
}
.actDateBank {
    background: #7337d2;
    padding: 14px;
    margin-left: -6px;
    padding-top: 13px;
}
.actGold {
    height: 25px;
    margin-top: -3px;
    image-rendering: pixelated;
}
.actText {
    vertical-align: middle;
}
.msgDate {
    padding: 5px;
    background: #7337d2;
}
.msgText {
    padding: 5px;
    background: black;
}
#bankBox {
    background: #7337d2;
    padding: 10px;
    border-radius: 5px;    
    border-top-right-radius: 0;
}
</style>
