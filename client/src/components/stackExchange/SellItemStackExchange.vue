<template>
    <div>
            <span v-if="!itemPicked">
            <b-button variant="success" @click="sellItem">
                Sell Item
            </b-button>
            </span>

            <span v-else>
            <b-button variant="success" @click="sellItem">
                Another Item
            </b-button>     

            <b-button class="float-right" @click="itemPicked = !itemPicked" variant="danger">
                Close
            </b-button>    
            </span>
            <br><br>

            <div class="text-center animated fadeIn" id="sellCard" v-show="itemPicked">
                <template v-if="type === 'strength'">
                     <img :src="require('../../assets/items/strength/'+img)">
                </template>
                <template v-if="type === 'agility'">
                    <img :src="require('../../assets/items/agility/'+img)" class="itemPowerImg">
                </template>   
                <template v-if="type === 'vitality'">
                    <img :src="require('../../assets/items/vitality/'+img)" class="itemPowerImg">
                </template>  
                <template v-if="type === 'intellect'">
                    <img :src="require('../../assets/items/intellect/'+img)" class="itemPowerImg">
                </template>   
                        <br>
                     {{title}}
                     <span id="eliteWord" v-if="elite">
                         ELITE
                     </span><br>

                     &nbsp;<span id="sellItemPower">
                     <img v-if="type === 'strength'" src="../../assets/fist.png" class="itemPowerImg">
                     <img v-if="type === 'vitality'" src="../../assets/heart.png" class="itemPowerImg">
                     <img v-if="type === 'agility'" src="../../assets/shoes.png" class="itemPowerImg">
                     <img v-if="type === 'intellect'" src="../../assets/book.png" class="itemPowerImg">
                     
                     +{{power}}
                     </span>
                     <br><br>
                     Market Price: <img src="../../assets/gold.png" id="boughtFor"> {{price}}
                     <br>                    
                     Sell For: <input min="1" max="99999" v-model="sellPrice" type="number" style="width: 30%" placeholder="Your price">                                               
                     <br>
                     <small>Minimum price: 1 Maximum price: 99999</small>
                     <br><br>
                     <b-button @click="placeToExchange" class="animated bounceIn" variant="danger" v-if="sellPrice > 0">
                        Place To Exchange
                     </b-button>
            </div>

            <div class="animated slideInLeft" v-show="showForm">
                <div class="panelBody">
                    <h1 class="panelTitle">
                        Select Item
                    </h1>
                    <ul class="col-md-12 row list-unstyled" id="userItems">
                        <li @click="pickItem(item, index)" class="col-md-2" v-for="(item, index) in storedUserItems">
                            <template v-if="item.strength">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/strength/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/strength/'+item.img)">
                            </span>
                            &nbsp;<img src="../../assets/fist.png" class="itemPowerImg"> +{{item.power}}
                            </template>
                            <template v-if="item.agility">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/agility/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/agility/'+item.img)">
                            </span>              
                            &nbsp;<img src="../../assets/shoes.png" class="itemPowerImg"> +{{item.power}}                            
                            </template>
                            <template v-if="item.vitality">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/vitality/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/vitality/'+item.img)">
                            </span>              
                            &nbsp;<img src="../../assets/heart.png" class="itemPowerImg"> +{{item.power}}                            
                            </template>
                            <template v-if="item.intellect">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/intellect/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/intellect/'+item.img)">
                            </span>              
                            &nbsp;<img src="../../assets/book.png" class="itemPowerImg"> +{{item.power}}                            
                            </template>  
                            <p class="itemTitle">{{item.title}}</p>
                        </li>
                        <li @click="pickItem(item, index)" class="col-md-2" v-for="(item, index) in bankItems">
                            <template v-if="item.strength">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/strength/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/strength/'+item.img)">
                            </span>
                            &nbsp;<img src="../../assets/fist.png" class="itemPowerImg"> +{{item.power}}
                            </template>
                            <template v-if="item.agility">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/agility/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/agility/'+item.img)">
                            </span> 
                            &nbsp;<img src="../../assets/shoes.png" class="itemPowerImg"> +{{item.power}}
                            </template>
                            <template v-if="item.vitality">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/vitality/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/vitality/'+item.img)">
                            </span>
                            &nbsp;<img src="../../assets/heart.png" class="itemPowerImg"> +{{item.power}}
                            </template>
                            <template v-if="item.intellect">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/intellect/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/intellect/'+item.img)">
                            </span>  
                            &nbsp;<img src="../../assets/book.png" class="itemPowerImg"> +{{item.power}}
                            </template>  
                            <p class="itemTitle">{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            showForm: false,
            itemPicked: false,
            bankItems: [],
            img: '',
            type: '',
            power: '',
            title: '',
            price: '',
            elite: false,
            sellPrice: '',
            itemID: ''
        }
    },
    methods: {
        sellItem() {
            this.bankItems = [];
            this.showForm = !this.showForm;
            this.itemPicked = false;
            this.$store.dispatch('getUserBankItems').then(items => {
                items.forEach(e => {
                    this.bankItems.push(e);
                });
            });
        },
        pickItem(item, index) {
            this.showForm = !this.showForm;
            this.itemPicked = !this.itemPicked;

            this.power = item.power;
            this.title = item.title;
            this.img = item.img;
            this.price = item.price;
            this.itemID = item.id;

            if(item.elite) {
                this.elite = true;
            }

            if(item.strength) {
                this.type = 'strength'
            } else if (item.agility) {
                this.type = 'agility'
            } else if (item.intellect) {
                this.type = 'intellect'
            } else {
                this.type = 'vitality'
            }
        },
        placeToExchange() {
            const payload = {
              itemID: this.itemID,
              price: this.sellPrice
            }
            this.placeItemToExchange(payload);
        },
        ...mapActions([
            'placeItemToExchange'
        ])
    },
    computed: {
        ...mapGetters([
            'storedUserItems'
        ]) 
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
    color: #fff;
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
    background: #401a7b;
}
.itemInBank {
    background: black;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
}
.itemInBankElite {
    background: #ff4949;
    padding: 5px;
    margin-bottom: 5px;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 7px 3px rgba(250,0,0);
    box-shadow: 0px 0px 7px 3px rgba(250,0,0);      
}
.itemInBank:hover {
    cursor: pointer;
    background: #7337d2;
}
.itemInBankElite:hover {
    cursor: pointer;
    background: #7337d2;    
}
#userItems {
    margin-top: 10px;
    margin-left: 50px;
}
.itemPowerImg {
    height: 35px;
    image-rendering: pixelated;
}
#eliteWord {
    color: red;
    text-shadow: 0px 0px 5px rgba(255, 0, 0, 1);
    font-weight: bolder;
}
#boughtFor {
    margin-top: -2px; 
    height: 25px;
}
#sellItemPower {
    background: #7337d2;
    padding: 8px;
    border-radius: 5px;
}
#sellCard {
    background: #30007b;
    width: 30%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 6px;
}
</style>
