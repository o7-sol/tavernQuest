<template>
    <div id="bank">
        <div class="gameScreen row">
            <div class="col-md-5">
                <div class="panelBody">
                    <h1 class="panelTitle">
                        <img src="../assets/board.png" style="margin-top: -3px">
                        Items in the bank <span class="itemCount">{{bankItems.length}} / 30</span>
                    </h1>
                   <ul class="list-unstyled text-center row" id="bankList">
                        <li @click="putItemToPendBoxFromBank(index, item)" v-for="(item, index) in bankItems" class="col-2">
            <template v-if="item.strength">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/strength/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/strength/'+item.img)">
              </span>
            </template>
            <template v-if="item.agility">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/agility/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/agility/'+item.img)">
              </span>              
            </template>
            <template v-if="item.vitality">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/vitality/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/vitality/'+item.img)">
              </span>              
            </template>
            <template v-if="item.intellect">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/intellect/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/intellect/'+item.img)">
              </span>              
            </template>  
             <p class="itemTitle">{{item.title}}</p>
                        </li> 
                       <!-- <li v-for="index in 100" class="col-2">
                            <div class="blankItem"></div>
                            <p class="itemTitle">Some title</p>
                        </li>   -->                                                                                                      
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div class="panelBody">
                    <h1 class="panelTitle">
                        <img src="../assets/board.png" style="margin-top: -3px">
                        Pending Box
                    </h1>           
                        <b-button id="disabledStackButton" disabled v-if="!itemInPendingBox" variant="warning">
                            Stack Exchange
                        </b-button>                                                        
                    <div id="pendingBox" v-if="itemInPendingBox">                      
                            <b-button v-if="itemFromBank || itemFromInventory" variant="warning">
                                Stack Exchange    
                            </b-button>                         
                        <img class="itemPending" v-if="strength" :src="require('../assets/items/strength/'+img)">
                        <img class="itemPending" v-if="agility" :src="require('../assets/items/agility/'+img)">
                        <img class="itemPending" v-if="vitality" :src="require('../assets/items/vitality/'+img)">
                        <img class="itemPending" v-if="intellect" :src="require('../assets/items/intellect/'+img)">
                        
                        <div>
                            <p>
                            {{title}}
                            <br>
                            <img class="skillImg" v-if="strength" src="../assets/fist.png">
                            <img class="skillImg" v-if="agility" src="../assets/shoes.png">
                            <img class="skillImg" v-if="vitality" src="../assets/heart.png">
                            <img class="skillImg" v-if="intellect" src="../assets/book.png">
                            +{{power}}
                            </p>
                            <b-button style="margin-top: -10px;" v-if="itemFromInventory" @click="addToBank(index)" variant="danger">
                                Bank
                            </b-button>   
                            <b-button style="margin-top: -10px;" v-if="itemFromBank" @click="addToInventory(index)" variant="success">
                                Inventory
                            </b-button>                                               
                        </div>
                    </div>
                    <div id="blankBox" v-if="!itemInPendingBox">
                        <div id="blankImage"></div>
                    </div>
                <p id="pendingBoxDesc">Add item to bank or inventory</p>                    
                </div>
            </div>
          <div class="col-md-5">
                <div class="panelBody">
                    <h1 class="panelTitle">
                        <img src="../assets/board.png" style="margin-top: -3px">
                        Inventory <span class="itemCount">{{user.items.length}} / 14</span>
                    </h1>
                    <ul class="list-unstyled text-center row" id="bankList">
                        <li @click="putItemToPendBoxFromInventory(index, item)" v-for="(item, index) in user.items" class="col-2">
            <template v-if="item.strength">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/strength/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/strength/'+item.img)">
              </span>
            </template>
            <template v-if="item.agility">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/agility/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/agility/'+item.img)">
              </span>              
            </template>
            <template v-if="item.vitality">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/vitality/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/vitality/'+item.img)">
              </span>              
            </template>
            <template v-if="item.intellect">
              <span v-if="item.elite">
            <img class="itemInBankElite" :src="require('../assets/items/intellect/'+item.img)">
              </span>
              <span v-else>
            <img class="itemInBank" :src="require('../assets/items/intellect/'+item.img)">
              </span>              
            </template>                              <p class="itemTitle">{{item.title}}</p>
                        </li>                                                                  
                    </ul>
                </div>
            </div>           
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            bankItems: [],
            itemFromInventory: false,
            itemFromBank: false,
            itemInPendingBox: false,
            title: '',
            price: '',
            img: '',
            strength: false,
            agility: false,
            vitality: false,
            intellect: false,
            power: '',
            index: '',
            elite: false,
            id: ''

        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.$store.dispatch('getUserBankItems').then(items => {
                items.forEach(e => {
                    vm.bankItems.push(e);
                }); 
            });
        });
    },
    methods: {
        setItem(price, title, img, strength, agility, vitality, intellect,
        power, index, elite, id) {
            this.price = price;
            this.title = title;
            this.img = img;
            this.strength = strength;
            this.agility = agility;
            this.vitality = vitality;
            this.intellect = intellect;
            this.power = power;
            this.index = index;
            this.elite = elite;
            this.id = id;
        },
        putItemToPendBoxFromInventory(index, item) {
            this.itemInPendingBox = true;
            this.itemFromInventory = true;
            this.itemFromBank = false;
            this.setItem(item.price, item.title, item.img, item.strength,
            item.agility, item.vitality, item.intellect, item.power, index, item.elite, item.id)

        },
        putItemToPendBoxFromBank(index, item) {
            this.itemInPendingBox = true;
            this.itemFromInventory = false;
            this.itemFromBank = true;
            this.setItem(item.price, item.title, item.img, item.strength,
            item.agility, item.vitality, item.intellect, item.power, index, item.elite, item.id)

        },        
        addToBank(index) {
            this.user.items.splice(index, 1);
            this.bankItems.push({
                img: this.img,
                title: this.title,
                strength: this.strength,
                agility: this.agility,
                vitality: this.vitality,
                intellect: this.intellect,
                power: this.power,
                elite: this.elite,
                id: this.id
            });
            this.itemInPendingBox = false;

            const payload = {
                itemID: this.id,
                index
            }

            this.placeItemToBank(payload).then(data => {

                if(data.successMsg) {
                
                this.pushToast(this.getImageURL(this.strength, this.agility, this.vitality, this.img), 
                this.title, data.successMsg);

                }
            });
        },
        addToInventory(index) {
            if(this.user.items.length < 14) {
            this.bankItems.splice(index, 1);
            this.user.items.push({
                img: this.img,
                title: this.title,
                strength: this.strength,
                agility: this.agility,
                vitality: this.vitality,
                intellect: this.intellect,
                power: this.power,
                elite: this.elite,
                id: this.id
            });
            this.itemInPendingBox = false;

            const payload = {
                itemID: this.id,
                index
            }           
            this.placeItemToInventoryFromBank(payload).then(data => {
                if(data.successMsg) {

                this.pushToast(this.getImageURL(this.strength, this.agility, this.vitality, this.img), 
                this.title, data.successMsg);

                }                
            });

            } else {
                this.$bvToast.toast('Inventory is full.', {
                    title: 'Notification',
                    variant: 'warning',
                    solid: true,
                    autoHideDelay: 3000
                }); 
            }
        },
        getImageURL(strength, agility, vitality, img) {
            let imgURL = '';
            if(strength) {
                imgURL = require("../assets/items/strength/"+img);
            } else if (agility) {
                imgURL = require("../assets/items/agility/"+img);
            } else if (vitality) {
                imgURL = require("../assets/items/vitality/"+img);
            } else {
                imgURL = require("../assets/items/intellect/"+img);
            }      
            return imgURL;      
        },
        pushToast(src, title, message) {
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': src}}),
                    h('strong', {}, `${title}`),
                    h('br', {}, ''),
                    `${message}`,
                ]
                );  

                this.$bvToast.toast([vNodesMsg], {
                    title: 'Notification',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 3000
                    });
        },
        ...mapActions([
            'placeItemToBank',
            'placeItemToInventoryFromBank'
        ]),

    },
    computed: {
        ...mapGetters([
            'user'
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
#bankList {
    padding-top: 10px;
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
.itemInBankElite:hover {
    cursor: pointer;
    background: #7337d2;    
}
.itemInBank:hover {
    cursor: pointer;
    background: #7337d2;
}
.itemPending {
    background: black;
    padding: 5px;
    margin: 0 auto;  
    border-radius: 5px;
    margin-top: 10px;
}
#pendingBox {
    text-align: center;
    padding: 10px;    
}
.itemTitle {
    font-size: 12px;
}
#blankImage {
    background: black;
    height: 44px;
    width: 44px;
    border-radius: 5px;
    margin: 0 auto;
}
#blankBox {
    padding: 10px;
}
.skillImg {
    height: 25px;
    vertical-align: bottom;
}
#disabledStackButton {
    margin-left: 29.5px;
    margin-top: 10px;
}
#pendingBoxDesc {
    font-size: 14px;
    background: black;
    padding: 11px;
    margin: 0 auto;
}
.blankItem {
    background: black;
    max-width: 44px;
    height: 44px;
    border-radius: 5px;
}
.itemCount {
    background: black;
    padding: 5px;
    border-radius: 5px;
    margin-top: -6px;
    float: right;
}
</style>
