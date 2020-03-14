<template>
  <div class="col-md-4">
    <div class="panelBody">
      <h1 class="panelTitle"><img src="../../assets/board.png" class="board">  Market</h1>
      <ul class="list-unstyled latestMarket">
        <li v-for="item in items.slice(0, 5)" :key="item._id">
          <span>{{item.created_at}}</span><br>
          <img :src="require('../../assets/hero/'+item.user_img)" class="latestFightHero">
          &nbsp;<strong>{{item.username}}</strong>
          &nbsp;<span style="vertical-align: middle">bought</span>
          <img v-if="item.item_type === 'strength'" :src="require('../../assets/items/strength/'+item.item_img)">
          <img v-if="item.item_type === 'intellect'" :src="require('../../assets/items/intellect/'+item.item_img)">
          <img v-if="item.item_type === 'vitality'" :src="require('../../assets/items/vitality/'+item.item_img)">
          <img v-if="item.item_type === 'agility'" :src="require('../../assets/items/agility/'+item.item_img)">
             <strong style="vertical-align: middle">{{item.title}}</strong>
          &nbsp;<span style="vertical-align: middle">for</span>
          &nbsp;<strong style="vertical-align: middle">{{item.spent_gold}}</strong>
          <img src="../../assets/gold.png" class="latestMarketGold">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      items: []
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    ...mapActions(['getBoughtItemFromMarket']),
    getItems() {
      this.getBoughtItemFromMarket().then(data => {
       return this.items = data.items;
      });
    }
  },
  sockets: {
    boughtItemFromMarket: function() {
      this.getItems();
    }
  }
}

</script>

<style scoped>
.latestMarket {
    font-size: 13px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.latestMarket li {
    padding: 10px;
}
.latestMarketGold {
    height: 21px; 
    image-rendering: pixelated;   
    vertical-align: middle;
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
    background-color: #050c29;
    color: #fff;
    border-radius: 3px!important;
    border: 1px solid #1d1d1d;
}

ul li:nth-child(2n+2) {  
  background: #06103c;
}
</style>
