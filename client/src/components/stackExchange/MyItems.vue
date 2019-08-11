<template>
    <div>
        <b-button v-if="!myItems.length" @click="myExchangeItems" variant="danger">
            My Items
        </b-button>

        <div v-if="myItems.length" class="panelBody"> 
            <h1 class="panelTitle">My Items</h1>

            <ul id="userItems" class="row list-unstyled col-md-12">
                <li class="col-md-2" v-for="(item, index) in myItems">

  <b-dropdown class="float-right" size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
    <template slot="button-content">&#9881;<span class="sr-only">Search</span></template>
    <b-dropdown-item @click="takeItemBack(item, index)">Take Back</b-dropdown-item>
  </b-dropdown>

                    <img v-if="item.type === 'Strength'" :src="require('../../assets/items/strength/'+item.img)">
                    <img v-if="item.type === 'Agility'" :src="require('../../assets/items/agility/'+item.img)">
                    <img v-if="item.type === 'Vitality'" :src="require('../../assets/items/vitality/'+item.img)">
                    <img v-if="item.type === 'Intellect'" :src="require('../../assets/items/intellect/'+item.img)">
                   
                    <img v-if="item.type === 'Strength'" src="../../assets/fist.png" class="itemPowerImg">
                    <img v-if="item.type === 'Agility'" src="../../assets/shoes.png" class="itemPowerImg">
                    <img v-if="item.type === 'Vitality'" src="../../assets/heart.png" class="itemPowerImg">
                    <img v-if="item.type === 'Intellect'" src="../../assets/book.png" class="itemPowerImg">

                    +{{item.power}}  

                    <p style="font-size: 13px">
                        {{item.title}}
                        <span class="itemElite" v-if="item.elite">
                            ELITE
                        </span>
                    </p>

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
            myItems: [],
            index: '',
            allItems: [],
        }
    },

    methods: {
        takeItemBack(item, index) {
            this.index = index;

            const payload = {
                itemID: item._id
            }
            this.getMyStackExchangeItemBack(payload).then(data => {
                
            if(data.message) {

            this.myItems.splice(this.index, 1);

            if(data.elite) {
                this.stackExchangeEliteItems.splice(data.itemIndex, 1);
            } else {
                this.stackExchangeItems.splice(data.itemIndex, 1);
            }

            // Set image URL by type

            let imgURL = '';

            if(data.type === 'Strength') {
                imgURL = require("../../assets/items/strength/"+data.image);
            } else if (data.type === 'Agility') {
                imgURL = require("../../assets/items/agility/"+data.image);
            } else if (data.type === 'Vitality') {
                imgURL = require("../../assets/items/vitality/"+data.image);
            } else {
                imgURL = require("../../assets/items/intellect/"+data.image);
            }

            // Make toast content

            const h = this.$createElement

            const vNodesMsg = h(
            'p',
            { class: ['text-center', 'mb-0'] },
            [
                h('b-img', { props: { 'src': imgURL}}),
                h('strong', {}, `${data.title} `),
                h('br', {}, ''),
                `${data.message}`,
            ]
            );                

            // Show toast

            this.$bvToast.toast([vNodesMsg], {
             title: `${data.title}`,
             variant: `success`,
             solid: true,
             autoHideDelay: 3000
            });  
            }
            });           
        },
        myExchangeItems() {
            this.myItems = [];
            this.getMyStackExchangeItems().then(data => {
                data.forEach(e => {
                    this.myItems.push(e);
                });
            });
        },
        ...mapActions([
            'getMyStackExchangeItems',
            'getMyStackExchangeItemBack',
            'getStackExchangeEliteItems',
            'getStackExchangeItems'
        ])
    },
    computed: {
        ...mapGetters([
            'stackExchangeEliteItems',
            'stackExchangeItems',
            'storedUserItems'
        ]),
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
}
#userItems {
    margin-top: 10px;
    margin-left: 50px;
}
.itemPowerImg {
    height: 25px;
    image-rendering: pixelated;
}
.itemElite {
    color: red;
    text-shadow: 0px 0px 5px rgba(255, 0, 0, 1);
    font-weight: bolder;
}
</style>
