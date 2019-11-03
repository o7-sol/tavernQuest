<template>
  <div class="col-md-4">
    <p><img src="../../assets/board.png" style="margin-top: -4px;"> Actions</p>
    <div class="action-buttons">
    <b-button
      @click="fillBankForm = !fillBankForm, borrowGoldForm = false, exchangeItemForm = false"
      variant="danger" style="background: #ff0000;">
      Fill The Bank
    </b-button>&nbsp;
    <b-button
      @click="borrowGoldForm = !borrowGoldForm, fillBankForm = false, exchangeItemForm = false"
      variant="warning">
      Borrow Gold
    </b-button>&nbsp;
    </div>
   <!-- <b-button
      @click="exchangeItemForm = !exchangeItemForm, fillBankForm = false, borrowGoldForm = false"
      variant="info">
      Exchange Item
    </b-button>-->

    <div v-if="borrowGoldForm" class="col-md-6 mx-auto text-center">
      <br>
      <h5>
        Borrow Gold From The Bank
      </h5>
      <div id="bankBox">
        <input v-model.trim="borrowAmount" class="form-control" type="number" min="1" :max="150"
          placeholder="Amount of gold">
        <small>Max: 150</small><br>
        <b-button @click="borrowGold()">
          <img src="../../assets/gold.png" style="height: 25px; vertical-align: bottom"> Borrow
        </b-button>
      </div>
    </div>

    <div v-if="fillBankForm" class="col-md-6 mx-auto text-center">
      <br>
      <h5>
        Fill The Bank
      </h5>
      <div id="bankBox">
        <input v-model.trim="amountOfGold" class="form-control" type="number" min="1"
          :max="user.gold" placeholder="Amount of gold">
        <small>Max: {{user.gold}}</small><br>
        <b-button @click="fillBank()">
          <img src="../../assets/gold.png" style="height: 25px; vertical-align: bottom"> Fill
        </b-button>
      </div>
    </div>

    <!--<div v-if="exchangeItemForm" class="col-md-6 mx-auto text-center">
      <br>
      <h5>
        Exchange Items
      </h5>
      <div id="bankBox">

      </div>
    </div>-->

    <br>
    <p style="margin-top: 1px;">
      <img src="../../assets/board.png" style="margin-top: -4px;"> Latest Activity
    </p>
    <ul v-if="guild" class="list-unstyled" style="margin-top: -7px;">
      <li v-for="activity in reversedActivities" :key="activity._id" class="activityInfo">
        <span v-if="activity.gold">
          <small class="actDateBank">{{activity.createdAt}}</small>&nbsp;
          <img :src="require('../../assets/hero/'+activity.img)" class="activityHero">
          &nbsp;<span class="actText">{{activity.username}} <strong>filled</strong> the bank with
            &nbsp;<img src="../../assets/gold.png" class="actGold">
            {{activity.amount}}</span>
        </span>

        <span v-if="activity.borrowGold">
          <small class="actDateBorrow">{{activity.createdAt}}</small>&nbsp;
          <img :src="require('../../assets/hero/'+activity.img)" class="activityHero">
          &nbsp;<span class="actText">{{activity.username}} <strong>borrowed</strong>
            &nbsp;<img src="../../assets/gold.png" class="actGold">
            {{activity.amount}}</span>
        </span>

        <!--<span v-if="activity.exchangeItem">
          <small class="actDateExchange">{{activity.createdAt}}</small>&nbsp;
          <img :src="require('../../assets/hero/'+activity.img)" class="activityHero">
          &nbsp;<span class="actText">{{activity.username}} <strong>posted exchange</strong>
          </span>
        </span>-->
      </li>

    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    props: ['user'],
    data() {
        return {
            fillBankForm: false,
            borrowGoldForm: false,
            exchangeItemForm: false,
            amountOfGold: '',
            borrowAmount: '',
            errors: ''
        }
    },
    methods: {
        fillBank() {
            this.errors = [];
            if(this.amountOfGold === 0 || this.amountOfGold < 1) {
                return this.errorToast('Zero is not aceptable amount.');
            } else if(this.amountOfGold > this.user.gold) {
                return this.errorToast('This amount is over you current gold limit.');
            } else {

                this.fillTheBank(this.amountOfGold).then(data => {
                    if(data.successMsg) {
                        this.$bvToast.toast(`${data.successMsg}`, {
                        title: 'Notification',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 5000
                    });      
                    this.guild.gold += parseInt(this.amountOfGold); 
                    this.fillBankForm = false;        
                    this.amountOfGold = '';     
                    this.getGuildInfo();              
                    } 
                });
            }
        },        
        borrowGold() {
            this.errors = [];
            if(this.guild.gold === 0) {
                return this.errorToast('Your guild does not have any gold in the bank currently.');
            }
            this.borrowTheGold(this.borrowAmount).then(data => {
                if(data && data.error) {
                       return this.errorToast(data.error);
                } else if(data && data.success) {
                        this.$bvToast.toast(`${data.success}`, {
                        title: 'Notification',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 5000
                    });
                    this.guild.gold -= parseInt(this.borrowAmount); 
                    this.borrowGoldForm = false;        
                    this.borrowAmount = '';   
                    this.getGuildInfo();
                }
            });
        },
        errorToast(text) {
            this.$bvToast.toast(text, {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
            })
        },   
        ...mapActions([
            'borrowTheGold',
            'getGuildInfo',
            'fillTheBank'
        ])             
    },
    computed: {
        reversedActivities() {
            return this.guild.latestActivity.slice().reverse();
        },
        ...mapGetters([
            'guild'
        ])
    }
}

</script>

<style scoped>
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
.actDateBorrow {
    background: yellow;
    padding: 14px;
    margin-left: -6px;
    padding-top: 13px;
    color: black;
}
.actGold {
    height: 25px;
    margin-top: -3px;
    image-rendering: pixelated;
}
.actText {
    vertical-align: middle;
}
#bankBox {
    padding: 10px;
    border-radius: 5px;    
    border-top-right-radius: 0;
}
.action-buttons {
    display: flex;
    justify-content: space-around;
}
</style>
