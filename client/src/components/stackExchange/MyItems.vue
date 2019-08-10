<template>
    <div>
        <b-button v-if="!myItems.length" @click="myExchangeItems" variant="danger">
            My Items
        </b-button>

        <div v-if="myItems.length" class="panelBody"> 
            <h1 class="panelTitle">My Items</h1>

            <ul id="userItems" class="row list-unstyled col-md-12">
                <li class="col-md-2" v-for="item in myItems">
                    <img v-if="item.type === 'Strength'" :src="require('../../assets/items/strength/'+item.img)">
                    <img v-if="item.type === 'Agility'" :src="require('../../assets/items/agility/'+item.img)">
                    <img v-if="item.type === 'Vitality'" :src="require('../../assets/items/vitality/'+item.img)">
                    <img v-if="item.type === 'Intellect'" :src="require('../../assets/items/intellect/'+item.img)">

                </li>
            </ul>


        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            myItems: [],
        }
    },
    methods: {
        myExchangeItems() {
            this.myItems = [];
            this.getMyStackExchangeItems().then(data => {
                data.forEach(e => {
                    this.myItems.push(e);
                });
            });
        },
        ...mapActions([
            'getMyStackExchangeItems'
        ])
    },
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
</style>
