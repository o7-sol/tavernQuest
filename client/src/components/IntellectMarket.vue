<template>
    <div id="market">
        <div class="col-md-12">
            <div class="panelBody">
                <h1 class="panelTitle"><img src="../assets/board.png" class="board"> Intellect Market</h1>                
                <div class="marketCats row">
                    <p @click="toStrMarket" id="strMarket">
                        <img src="../assets/fist.png" class="skillImg">
                        Strength Market
                    </p>                        
                    <p @click="toAglMarket" id="aglMarket">
                        <img src="../assets/shoes.png" class="skillImg">
                        Agility Market
                    </p>                        
                    <p  @click="toVitMarket" id="vitMarket">
                        <img src="../assets/heart.png" class="skillImg">
                        Vitality Market
                    </p>
                    <p id="intMarket">
                        <img src="../assets/book.png" class="skillImg">
                        Intellect Market
                    </p>
                </div>
                    <p class="text-center">
                        <img src="../assets/board.png" style="margin-top: -3px;">
                        &nbsp;<span style="color: red; font-weight: bold">TIP</span>:
                        This market is suited for characters which main ability is intellect.
                    </p> 
                    <br>                           
                <div class="row">
                <div id="marketInfo" class="col-md-12">
                    <ul class="list-unstyled row" style="margin-right: -9%;">
                        <li style="padding-right: 30px; width: 15%; padding-bottom: 30px;" v-for="item in items" class="list-item">
                        <div class="item">
                       <img class="itemImg" :src="require('../assets/items/intellect/'+item.img)">  
                        <p>
                            {{item.title}}<br>
                            <img src="../assets/book.png" style="height: 25px; image-rendering: pixelated">
                            +{{item.power}}<br>     
                            <small>Stock: {{item.stock}} / {{item.max_stock}}<br>
                            Level Required: <span style="color: red">{{item.level}}</span> 
                            </small>               
                        </p>  
                            <span class="itemBuyBtn">
                            <b-button @click="buyItem(item)" variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            {{item.price}}
                            </b-button>
                            </span>  
                            </div> 
                        </li>                      
                    </ul>   
                </div>  
                </div>                                      
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetter, mapGetters} from 'vuex';
export default {
    name: 'market',
    data() {
        return {
            bounce: '',
            items: []
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$store.dispatch('getIntellectItems').then((items) => {
                items.forEach(e => {
                    vm.items.push(e);
                });
            });
        });
    },    
    methods: {
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

            const user = JSON.parse(this.$cookie.get('user'));
            if(user.level < item.level) {
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': imgURL}}),
                    h('strong', {}, `${item.title} `),
                    h('br', {}, ''),
                    `Your current level is lower than item requires.`,
                ]
                );                

               this.$bvToast.toast([vNodesMsg], {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
                }); 
            }

            else if(item.stock < 1) {
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': imgURL}}),
                    h('strong', {}, `${item.title} `),
                    h('br', {}, ''),
                    `Currently this item is out of stock.`,
                ]
                );  

               this.$bvToast.toast([vNodesMsg], {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
                });                
            }

            else if(user.gold < item.price) {
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': imgURL}}),
                    h('strong', {}, `${item.title} `),
                    h('br', {}, ''),
                    `You do not have enough gold to buy this item.`,
                ]
                ); 

               this.$bvToast.toast([vNodesMsg], {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
                });
            } else {
                const payload = {
                    itemID: item._id
                }
                this.$store.dispatch('buyItem', payload).then(data => {
                    
                    if(data.successMsg){
                        const h = this.$createElement

                        const vNodesMsg = h(
                        'p',
                        { class: ['text-center', 'mb-0'] },
                        [
                            h('b-img', { props: { 'src': imgURL}}),
                            h('strong', {}, `${item.title} `),
                            h('br', {}, ''),
                            `${data.successMsg}`,
                        ]
                        );                         
                        this.$bvToast.toast([vNodesMsg], {
                        title: 'Notification',
                        variant: 'success',
                        solid: true,
                        autoHideDelay: 5000
                        });  
                        this.storedUserItems.push(data.item);
                    }                 
                });                
            }
        },        
        toStrMarket() {
            this.$router.push({name: 'strengthMarket'});
        },
        toAglMarket() {
            this.$router.push({name: 'agilityMarket'});
        },
        toVitMarket() {
            this.$router.push({name: 'vitalityMarket'});
        }
    },
    computed: {
        ...mapGetters([
            'storedUserItems'
        ])
    }
}
</script>

<style scoped>
  #market {
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
    background-color: #050c29;
    color: #fff;
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
  }
  .skillImg {
      height: 35px;
      image-rendering: pixelated;
  }
  .marketCats {
      padding: 1em;
      padding-left: 29%;
  }
  #strMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #strMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;
  }  
  #aglMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #aglMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;      
  }
  #vitMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #vitMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;      
  }  
  #intMarket {
      padding: 4px;
      border-radius: 5px;
      background: #212f69;
  } 
  #marketInfo {
      padding-left: 5em;
  }
  #marketInfo h1 {
      font-size: 1rem;
  }
.item {
    background: #050813;
    padding: 14px;
    border: 1px solid #111525;
    border-radius: 5px;
    text-align: center;
}
.itemImg {
    background: #7337d2;
    padding: 8px;
    border-radius: 11px;
}
  .itemBuyBtn {
    background: #dc3545;
    padding: 14px;
    border-radius: 9px;
    border-left: none;
  }
  .buyBtnGold {
    height: 25px;
    vertical-align: bottom;
  }
  .marketIntro {
    text-align: center;
    background: #030615;
    padding: 5px;
  }
</style>
