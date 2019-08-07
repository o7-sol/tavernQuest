<template>
    <div id="bank">
        <div id="gameScreen" class="row">
            <div class="col-md-5">
                <div class="panelBody">
                    <h1 class="panelTitle">
                        <img src="../assets/board.png" style="margin-top: -3px">
                        Items in the bank <span class="itemCount">{{bankItems.length}} / 30</span>
                    </h1>
                   <ul class="list-unstyled text-center row" id="bankList">
                        <li @click="putItemToPendBoxFromBank(index, item)" v-for="(item, index) in bankItems" class="col-2">
                            <img class="itemInBank" v-if="item.strength" :src="require('../assets/items/strength/'+item.img)">
                            <img class="itemInBank" v-if="item.agility" :src="require('../assets/items/agility/'+item.img)">
                            <img class="itemInBank" v-if="item.vitality" :src="require('../assets/items/vitality/'+item.img)">
                            <img class="itemInBank" v-if="item.intellect" :src="require('../assets/items/intellect/'+item.img)">
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
                        Inventory <span class="itemCount">{{storedUserItems.length}} / 14</span>
                    </h1>
                    <ul class="list-unstyled text-center row" id="bankList">
                        <li @click="putItemToPendBoxFromInventory(index, item)" v-for="(item, index) in storedUserItems" class="col-2">
                            <img class="itemInBank" v-if="item.strength" :src="require('../assets/items/strength/'+item.img)">
                            <img class="itemInBank" v-if="item.agility" :src="require('../assets/items/agility/'+item.img)">
                            <img class="itemInBank" v-if="item.vitality" :src="require('../assets/items/vitality/'+item.img)">
                            <img class="itemInBank" v-if="item.intellect" :src="require('../assets/items/intellect/'+item.img)">
                            <p class="itemTitle">{{item.title}}</p>
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
        power, index, id) {
            this.price = price;
            this.title = title;
            this.img = img;
            this.strength = strength;
            this.agility = agility;
            this.vitality = vitality;
            this.intellect = intellect;
            this.power = power;
            this.index = index;
            this.id = id;
        },
        putItemToPendBoxFromInventory(index, item) {
            this.itemInPendingBox = true;
            this.itemFromInventory = true;
            this.itemFromBank = false;
            this.setItem(item.price, item.title, item.img, item.strength,
            item.agility, item.vitality, item.intellect, item.power, index, item.id)

        },
        putItemToPendBoxFromBank(index, item) {
            this.itemInPendingBox = true;
            this.itemFromInventory = false;
            this.itemFromBank = true;
            this.price = item.price;
            this.title = item.title;
            this.img = item.img;
            this.strength = item.strength;
            this.agility = item.agility;
            this.vitality = item.vitality;
            this.intellect = item.intellect;
            this.power = item.power;
            this.index = index;
            this.id = item.id;
        },        
        addToBank(index) {
            this.storedUserItems.splice(index, 1);
            this.bankItems.push({
                img: this.img,
                title: this.title,
                strength: this.strength,
                agility: this.agility,
                vitality: this.vitality,
                intellect: this.intellect,
                power: this.power,
                id: this.id
            });
            this.itemInPendingBox = false;


            const payload = {
                itemID: this.id,
                index
            }

            this.placeItemToBank(payload).then(data => {

                if(data.successMsg) {
                
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': this.getImageURL(this.strength, this.agility, this.vitality, this.img)}}),
                    h('strong', {}, `${this.title} `),
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
                }
            });
        },
        addToInventory(index) {
            if(this.storedUserItems.length < 14) {
            this.bankItems.splice(index, 1);
            this.storedUserItems.push({
                img: this.img,
                title: this.title,
                strength: this.strength,
                agility: this.agility,
                vitality: this.vitality,
                intellect: this.intellect,
                power: this.power,
                id: this.id
            });
            this.itemInPendingBox = false;

            const payload = {
                itemID: this.id,
                index
            }           
            this.placeItemToInventoryFromBank(payload).then(data => {
                if(data.successMsg) {
                
                const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('b-img', { props: { 'src': this.getImageURL(this.strength, this.agility, this.vitality, this.img)}}),
                    h('strong', {}, `${this.title} `),
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
                }                
            });

            } else {
                this.$bvToast.toast('Inventory is full.', {
                    title: 'Notification',
                    variant: 'warning',
                    solid: true,
                    autoHideDelay: 5000
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
        ...mapActions([
            'placeItemToBank',
            'placeItemToInventoryFromBank'
        ]),

    },
    computed: {
        ...mapGetters([
            'storedUserItems'
        ])
    }
}
</script>

<style scoped>
#gameScreen {
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
