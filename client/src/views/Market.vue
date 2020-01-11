<template>
    <div class="gameScreen">
        <div class="col-md-12">
            <div class="panelBody">
                <h1 class="panelTitle"><img src="../assets/board.png" class="board"> Market</h1>
                <app-market-cats></app-market-cats>
                <div class="col-md-7">
                    <p class="text-center">
                        <img src="../assets/board.png" style="margin-top: -3px;">
                        &nbsp;<span style="color: red; font-weight: bold">TIP</span>:
                        At first buy items that best suit your character. You 
                        want to update your most important stats at first.
                    </p>
                </div>                
                <div class="row">
                <div id="marketInfo" class="col-md-8">
                    <h1>
                        <img src="../assets/scroll.png">
                        Latest Items
                    </h1>
                    <div class="row"> 
                    <div v-for="item in latestItems" :key="item._id" class="latestItemBody" @mouseover="bounceItemIcon(item._id)"
                    @mouseout="bounceOff(item._id)">
                    <span v-if="item.strength === true">
                        <span v-if="item.elite">
                        <img :class="bounce" class="latestEliteItemIcon" :src="require('../assets/items/strength/'+item.img)">
                        </span>
                        <span v-else>
                        <img :class="bounce" class="latestItemIcon" :src="require('../assets/items/strength/'+item.img)">
                        </span>                    </span>
                    <span v-if="item.agility === true">
                        <span v-if="item.elite">
                        <img :class="bounce" class="latestEliteItemIcon" :src="require('../assets/items/agility/'+item.img)">
                        </span>
                        <span v-else>
                        <img :class="bounce" class="latestItemIcon" :src="require('../assets/items/agility/'+item.img)">
                        </span>                    </span> 
                    <span v-if="item.vitality === true">
                        <span v-if="item.elite">
                        <img :class="bounce" class="latestEliteItemIcon" :src="require('../assets/items/vitality/'+item.img)">
                        </span>
                        <span v-else>
                        <img :class="bounce" class="latestItemIcon" :src="require('../assets/items/vitality/'+item.img)">
                        </span>                   </span> 
                    <span v-if="item.intellect === true">
                        <span v-if="item.elite">
                        <img :class="bounce" class="latestEliteItemIcon" :src="require('../assets/items/intellect/'+item.img)">
                        </span>
                        <span v-else>
                        <img :class="bounce" class="latestItemIcon" :src="require('../assets/items/intellect/'+item.img)">
                        </span>
                    </span>                                                          
                    <p style="font-size: 13px;">{{item.title}}
                        <br>
                        <img v-if="item.strength === true" class="latestItemPowerIcon" src="../assets/fist.png">
                        <img v-if="item.agility === true" class="latestItemPowerIcon" src="../assets/shoes.png">
                        <img v-if="item.vitality === true" class="latestItemPowerIcon" src="../assets/heart.png">
                        <img v-if="item.intellect === true" class="latestItemPowerIcon" src="../assets/book.png">

                        +{{item.power}}                      
                    </p>
                    <small style="font-size: 12px">
                        Level Required: {{item.level}}<br>
                        Stock: {{item.stock}} / {{item.max_stock}} 
                    </small>                      
                    <b-button @click="buyItem(item)" variant="danger">
                        <img src="../assets/gold.png" class="latestItemGold">
                        {{item.price}}
                    </b-button>
                    </div>                                                                                                                                                                            
                    </div> 
                    <br>
                </div>  
                <div class="col-md-4" id="latestPurchases">
                    <h1>
                        <img src="../assets/scroll.png"> 
                        Latest Discounts
                    </h1>
                    <table>
                        <tbody>
                            <tr class="item" v-for="item in discountedItems" :key="item._id">
                                <td><img :src="require('../assets/items/'+item.skill+'/'+item.image)"> 
                                <strong>{{item.title}}</strong> </td>
                                <td>&nbsp;<span style="color: red; text-decoration: line-through;">
                                    {{item.old_price}}
                                    </span> 
                                now is only for<img src="../assets/gold.png" class="purchaserGoldIcon"> 
                                <span style="color: lime">{{item.new_price}}</span>
                                &nbsp;<span class="discountImage">
                                <img v-if="item.skill === 'strength' " src="../assets/fist.png" style="height: 25px"> 
                                <img v-if="item.skill === 'agility' " src="../assets/shoes.png" style="height: 25px"> 
                                <img v-if="item.skill === 'vitality' " src="../assets/heart.png" style="height: 25px"> 
                                <img v-if="item.skill === 'intellect' " src="../assets/book.png" style="height: 25px"> 

                                +{{item.power}}
                                </span>
                                </td>
                            </tr>                                                                                                                                                                                                                        
                        </tbody>
                    </table>
                </div>
                </div>                                      
            </div>          
        </div>
    </div>
</template>

<script>
import MarketCats from '../components/market/MarketCats';
import { mapGetters } from 'vuex';
export default {
    name: 'market',
    data() {
        return {
            bounce: '',
            latestItems: [],
            discountedItems: [],
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$store.dispatch('getLatestItems').then((items) => {
                items.forEach(e => {
                    vm.latestItems.push(e);
                });
            });
            vm.$store.dispatch('getItemsDiscounts').then((items) => {
                items.forEach(e => {
                    vm.discountedItems.push(e);
                });
            });            
        });
    },    
    methods: {
        pushToast(imgURL, toastTitle, title, message, type) {
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': imgURL}}),
                    h('strong', {}, `${title} `),
                    h('br', {}, ''),
                    `${message}`,
                ]
                );                

               this.$bvToast.toast([vNodesMsg], {
                title: `${toastTitle}`,
                variant: `${type}`,
                solid: true,
                autoHideDelay: 5000
                }); 
        },           
        buyItem(item) {

            var imgURL = '';
            if(item.strength === true) {
                imgURL = require("../assets/items/strength/"+item.img);
            } else if (item.agility === true) {
                imgURL = require("../assets/items/agility/"+item.img);
            } else if (item.vitality === true) {
                imgURL = require("../assets/items/vitality/"+item.img);
            } else {
                imgURL = require("../assets/items/intellect/"+item.img);
            }

            const user = this.user;
            if(user.level < item.level) {
                const message = 'Your current level is lower than item requires.';

                this.pushToast(imgURL, 'Notification', item.title, message, 'warning');
            }

            else if(item.stock < 1) {
                const message = 'Currently this item is out of stock.';

                this.pushToast(imgURL, 'Notification', item.title, message, 'warning');                
            }

            else if(user.gold < item.price) {
                const message = 'You do not have enough gold to buy this item.';

                this.pushToast(imgURL, 'Notification', item.title, message, 'warning');
            } else {
                const payload = {
                    itemID: item._id
                }
                this.$store.dispatch('buyItem', payload).then(data => {
                    
                    if(data.successMsg){
                        this.pushToast(imgURL, 'Order confirmed', item.title, data.successMsg, 'success'); 
 
                        if(this.user.items.length < 14) {
                            this.user.items.push(data.item);
                        }
                    }                 
                });                
            }
        },
        bounceItemIcon(id) {
            this.bounce = 'animated bounceIn';
        },
        bounceOff(id) {
            this.bounce = '';
        },

     },
    computed: {
        ...mapGetters([
            'user'
        ])
    },
    components: {
        appMarketCats: MarketCats
    }
}
</script>

<style scoped>
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
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
  }
  #marketInfo {
      padding-left: 2em;
  }
  #marketInfo h1 {
      font-size: 1rem;
  }
  .latestItemIcon {
      background: #030615;
      padding: 8px;
      border-radius: 19px;
  }

    .latestEliteItemIcon {
        background: #ff4949;
        padding: 8px;
        border-radius: 19px;
        -webkit-box-shadow: 0px 0px 7px 3px rgba(250,0,0);
        box-shadow: 0px 0px 7px 3px rgba(250,0,0);
    }

  .latestItemPowerIcon {
      height: 25px;
      image-rendering: pixelated;
  }
  .latestItemGold {
      height: 25px; 
      image-rendering: pixelated;
  }
  .latestItemBody {
      background: #7337d2;
      padding: 17px;
      border-radius: 9px;
      margin-left: 2%;
      margin-top: 2%;
      text-align: center;
      width: 132px;
  }
  .latestItemBody:hover {
      background-color: #7a00ff
  }
  #latestPurchases h1 {
      font-size: 1rem;
      padding-bottom: 12px;
  }
  .purchaserHero {
      height: 30px;
      image-rendering: pixelated;
  }
  .purchaserGoldIcon {
      height: 30px;
      margin-top: -3px;
      image-rendering: pixelated;
  }
  .discountImage {
      background: #7337d2;
      padding: 6px;
      border-radius: 38px;
  }
  .item {
      font-size: 14px;
  }
</style>
