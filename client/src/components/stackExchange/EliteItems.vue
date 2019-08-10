<template>
  <div id="latestItemsList">
    <ul class="list-unstyled row">
      <li class="col-md-2" v-for="item in paginatedEliteItems">
        <div class="latestItem">
          <div class="latestItemInfo">
            <span style="font-size: 13px">
              <img :src="require('../../assets/hero/'+item.userImg)"
                style="height: 20px; margin-top: -6px">
              {{item.user}}
              <span class="float-right">
                <img src="../../assets/gold.png" style="height: 25px; margin-top: -3px;">
                {{item.price}}
              </span>
            </span><br>
            <img v-if="item.type === 'Strength'" class="latestItemImg"
              :src="require('../../assets/items/strength/'+item.img)">
            <img v-if="item.type === 'Vitality'" class="latestItemImg"
              :src="require('../../assets/items/vitality/'+item.img)">  
            <img v-if="item.type === 'Agility'" class="latestItemImg"
              :src="require('../../assets/items/agility/'+item.img)">  
            <img v-if="item.type === 'Intellect'" class="latestItemImg"
              :src="require('../../assets/items/intellect/'+item.img)">                                      
            <span style="font-size: 13px; margin-left: 10px">
              {{item.title}} <br>
            </span>
            <div class="latestItemPrice">
              <img v-if="item.type === 'Strength'" src="../../assets/fist.png" style="height: 25px">
              <img v-if="item.type === 'Vitality'" src="../../assets/heart.png" style="height: 25px">
              <img v-if="item.type === 'Agility'" src="../../assets/shoes.png" style="height: 25px">
              <img v-if="item.type === 'Intellect'" src="../../assets/book.png" style="height: 25px">
              <span class="itemPower">
                +{{item.power}}
              </span>
              <span class="levelInfo">
                Level
                <span class="reqLevel">
                  {{item.level}}
                </span>
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>

                <b-pagination
                v-model="currentPage"
                :total-rows="eliteRows"
                :per-page="perPage"
                aria-controls="latestItemsList"
                align="center"
                first-text="⏮"
                prev-text="⏪"
                next-text="⏩"
                last-text="⏭"
                class="mt-4"                
                ></b-pagination>   

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default { 
    data() {
        return {
            perPage: 12,
            elitePerPage: 6,
            currentPage: 1
        }
    },
    methods: {
        ...mapActions([
            'getStackExchangeEliteItems'
        ])
    },    
    computed: {
        ...mapGetters([
            'stackExchangeEliteItems',
        ]),
        paginatedEliteItems() {
            return this.stackExchangeEliteItems.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
        );
        },        
        eliteRows() {
            return this.stackExchangeEliteItems.length;
        }
    },
}

</script>

<style scoped>
#latestItemsList {
    padding: 15px;
}
.latestItem {
    background: #800303;
    padding: 5px 10px 10px 10px;
    border-radius: 5px;    
}
.latestItemImg {
    background: #ff4949;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0px 0px 7px 3px rgba(250,0,0);
}
.latestItemPrice {
    margin-top: 10px;
    background: #c00202;
    padding: 5px;
    border-radius: 5px;
    font-size: 13px;
}

#latestItemsList .col-md-2 {
    padding-bottom: 30px;
}
.reqLevel {
    background: #7337d2;
    padding: 3px;
    border-radius: 10px;
}
.levelInfo {
    float: right;
}
.itemPower {
    margin-top: 2px;
}
.mt-4 {
    margin-top: -30px !important;
    padding-bottom: 20px;
}
</style>
