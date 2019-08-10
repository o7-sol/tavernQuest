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
                                <span style="font-size: 13px; margin-left: 10px">
                                    {{item.title}}
                                </span>                          
                                <div class="itemPrice">
                                <img v-if="item.type === 'Strength'" src="../../assets/fist.png" style="height: 20px">
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
            'getStackExchangeItems'
        ])
    },
    computed: {
        ...mapGetters([
            'stackExchangeItems',
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
