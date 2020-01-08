<template>
    <div id="itemsList">
        <ul class="list-unstyled row">
            <li class="col-md-2" v-for="item in paginatedItems" :key="item._id">
                <div class="item">
                    <div class="itemInfo">
                        <span style="font-size: 13px">
                        <img :src="require('../../assets/hero/'+item.userImg)" style="height: 20px; margin-top: -6px">
                            {{item.user}} 
                        <span class="float-right">
                        <img src="../../assets/gold.png" style="height: 25px; margin-top: -3px;">
                        {{item.price}}                                    
                        </span>
                        </span><br>
                                
                        <img v-if="item.type === 'Strength'" class="itemImg" 
                                :src="require('../../assets/items/strength/'+item.img)"> 
                        <img v-if="item.type === 'Agility'" class="itemImg" 
                                :src="require('../../assets/items/agility/'+item.img)"> 
                        <img v-if="item.type === 'Vitality'" class="itemImg" 
                                :src="require('../../assets/items/vitality/'+item.img)"> 
                        <img v-if="item.type === 'Intellect'" class="itemImg" 
                                :src="require('../../assets/items/intellect/'+item.img)"> 
                                                                                                                                    
                        <span style="font-size: 13px; margin-left: 10px">
                            {{item.title}}
                            <button
                            v-if="user.level >= item.level && item.user !== user.username" 
                            class="float-right btn btn-sm btn-success" style="margin-top: 5%"
                            @click="buyItem(item._id)"
                            >
                            BUY
                            </button>
                        </span>                          
                        <div class="itemPrice">
                        <img v-if="item.type === 'Strength'" src="../../assets/fist.png" style="height: 20px">
                        <img v-if="item.type === 'Agility'" src="../../assets/shoes.png" style="height: 20px">
                        <img v-if="item.type === 'Vitality'" src="../../assets/heart.png" style="height: 20px">
                        <img v-if="item.type === 'Intellect'" src="../../assets/book.png" style="height: 20px">                        
                        <span class="itemPower">
                        +{{item.power}}
                        </span>
                        <span class="levelInfo">
                        Level
                        {{item.level}}
                        </span>
                        </div>
                        </div>
                        </div>
                </li>                
            </ul> 

                <b-pagination
                v-if="stackExchangeItems.length > 12"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="itemsList"
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
            'getStackExchangeItems',
            'buyItemFromStackExchange'
        ]),
        buyItem(id) {
            this.buyItemFromStackExchange(id).then(data => {
                const item = data.item;
                const index = data.index;
                const message = data.message;

                this.user.gold -= item.price; 
                this.stackExchangeItems.splice(index, 1);

            let imgURL;

            if(item.type === "Strength") {
                imgURL = require("../../assets/items/strength/"+item.img);
            } else if (item.type === "Agility") {
                imgURL = require("../../assets/items/agility/"+item.img);
            } else if (item.type === "Vitality") {
                imgURL = require("../../assets/items/vitality/"+item.img);
            } else {
                imgURL = require("../../assets/items/intellect/"+item.img);
            }

           const h = this.$createElement

           const vNodesMsg = h(
            'p',
            { class: ['text-center', 'mb-0'] },
              [
                h('b-img', { props: { 'src': imgURL}}),
                h('strong', {}, `${item.title} `),
                h('br', {}, ''),
                `${data.message}`,
              ]
            );                

            this.$bvToast.toast([vNodesMsg], {
              title: 'Item bought',
              variant: 'success',
              solid: true,
              autoHideDelay: 5000
              });
          });
        }
    },
    computed: {
        ...mapGetters([
            'stackExchangeItems',
            'user'
        ]),
        paginatedItems() {
            return this.stackExchangeItems.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
            );
        },     
        rows() {
            return this.stackExchangeItems.length;
        }
    }
}
</script>

<style scoped>
#itemsList {
    padding: 15px;
}
#itemsList .col-md-2 {
    padding-bottom: 30px;
}
.item {
    background: #1f1b25;
    padding: 5px 10px 10px 10px;
    border-radius: 5px;    
}
.itemImg {
    background: #000000;
    border-radius: 5px;
    padding: 5px;
}
.itemPrice {
    margin-top: 10px;
    background: #000000;
    padding: 5px;
    border-radius: 5px;
    font-size: 13px;
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
}
</style>
