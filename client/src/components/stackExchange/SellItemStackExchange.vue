<template>
    <div>
            <div class="animated bounceIn" style="margin-left: 35%" v-if="successMsg.length > 0">
                <br>
                <span class="alert alert-success">
                    {{successMsg}}
                </span>
                <br><br>
            </div>

            <div class="text-center animated fadeIn" id="sellCard" v-show="itemPicked">

            <b-button class="float-left" v-if="itemPicked" @click="itemPicked = false" variant="danger">
                Close
            </b-button>  

            <span v-if="error.length > 0">
                <br>
                <span class="alert alert-danger">
                    {{error}}
                </span>
                <br><br>
            </span>

                <template v-if="type === 'strength'">
                     <img style="margin-left: -4.3em" :src="require('../../assets/items/strength/'+img)" class="itemPowerImg">
                </template>
                <template v-if="type === 'agility'">
                    <img style="margin-left: -4.3em" :src="require('../../assets/items/agility/'+img)" class="itemPowerImg">
                </template>   
                <template v-if="type === 'vitality'">
                    <img style="margin-left: -4.3em" :src="require('../../assets/items/vitality/'+img)" class="itemPowerImg">
                </template>  
                <template v-if="type === 'intellect'">
                    <img style="margin-left: -4.3em" :src="require('../../assets/items/intellect/'+img)" class="itemPowerImg">
                </template>   
                        <br>
                     {{title}}
                     <span id="eliteWord" v-if="elite">
                         ELITE
                     </span><br>
                     <br>
                     <span id="sellItemPower">
                     <img v-if="type === 'strength'" src="../../assets/fist.png" class="itemTypeImg">
                     <img v-if="type === 'vitality'" src="../../assets/heart.png" class="itemTypeImg">
                     <img v-if="type === 'agility'" src="../../assets/shoes.png" class="itemTypeImg">
                     <img v-if="type === 'intellect'" src="../../assets/book.png" class="itemTypeImg">
                     
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
                        <li @click="pickItem(item, index)" class="col-md-2" v-for="(item, index) in concatedItems">
                            <template v-if="item.strength">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/strength/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/strength/'+item.img)">
                            </span>
                            &nbsp;<img src="../../assets/fist.png" class="itemTypeImg"> +{{item.power}}
                            </template>
                            <template v-if="item.agility">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/agility/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/agility/'+item.img)">
                            </span>              
                            &nbsp;<img src="../../assets/shoes.png" class="itemTypeImg"> +{{item.power}}                            
                            </template>
                            <template v-if="item.vitality">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/vitality/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/vitality/'+item.img)">
                            </span>              
                            &nbsp;<img src="../../assets/heart.png" class="itemTypeImg"> +{{item.power}}                            
                            </template>
                            <template v-if="item.intellect">
                            <span v-if="item.elite">
                            <img class="itemInBankElite" :src="require('../../assets/items/intellect/'+item.img)">
                            </span>
                            <span v-else>
                            <img class="itemInBank" :src="require('../../assets/items/intellect/'+item.img)">
                            </span>              
                            &nbsp;<img src="../../assets/book.png" class="itemTypeImg"> +{{item.power}}                            
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
            sellBtnText: 'Sell Item',
            itemPicked: false,
            bankItems: [],
            img: '',
            concatedItems: [],
            type: '',
            power: '',
            title: '',
            price: '',
            elite: false,
            sellPrice: '',
            itemID: '',
            error: '',
            successMsg: '',
            index: ''
        }
    },
    created() {
        this.$store.dispatch('getUserBankItems').then(items => {
            items.forEach(e => {
                this.bankItems.push(e);
            });

        const allItems = this.storedUserItems.concat(this.bankItems);
        allItems.forEach(e => {
            this.concatedItems.push(e)
        })

        }); 
    },  
    methods: {
        sellItem() {
            this.bankItems = [];
            this.showForm = !this.showForm;
            this.sellBtnText = 'Close';
            this.itemPicked = false;
        },
        pickItem(item, index) {
            this.showForm = !this.showForm;
            this.itemPicked = !this.itemPicked;

            this.power = item.power;
            this.title = item.title;
            this.img = item.img;
            this.price = item.price;
            this.itemID = item.id;
            this.index = index;

            if(item.elite) {
                this.elite = true;
            } else {
                this.elite = false;
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
            this.error = '';

            function isNumber(input) {
                return /^\d+$/.test(input);
            }

            if(this.sellPrice > 99999) {
                return this.error = 'Price is too high.';
            }

            if(this.sellPrice < 1) {
                return this.error = 'Price is too low.';
            }

            const payload = {
              itemID: this.itemID,
              price: this.sellPrice
            }
            this.placeItemToExchange(payload).then(data => {
                if(data.message) {

                    this.concatedItems.splice(this.index, 1);
                    
                    if(data.indexOfItemInItems === 0 || data.indexOfItemInItems > 0) {
                        this.storedUserItems.splice(data.indexOfItemInItems, 1);
                    }

                    this.successMsg = data.message;
                    this.itemPicked = false;

                    if(this.interval) {
                        clearInterval(this.interval);
                    }

                    this.interval = setInterval(() => {
                        this.successMsg = '';
                    }, 3000);

                    this.img = '';
                    this.type = '';
                    this.power = '';
                    this.title = '';
                    this.price = '';
                    this.elite = false;
                    this.sellPrice = '';
                    this.itemID = '';

                    if(data.item.elite) {
                        this.stackExchangeEliteItems.push(data.item);
                    } else {
                        this.stackExchangeItems.push(data.item);
                    }
                }
            });
        },
        ...mapActions([
            'placeItemToExchange',
            'getStackExchangeItems',
            'getStackExchangeEliteItems'
        ])
    },
    computed: {
        ...mapGetters([
            'storedUserItems',
            'stackExchangeItems',
            'stackExchangeEliteItems'
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
    image-rendering: pixelated;
    background: #7236d1;
    padding: 6px;
    border-radius: 5px;   
}
.itemTypeImg {
    height: 25px;
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
