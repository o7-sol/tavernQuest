<template>
    <div id="stackExchange">
        <div class="col-md-12">
          <div class="input-group col-md-4" style="margin: 0 auto">
            <input style="font-size: 13px;" type="text" class="form-control"
              id="inlineFormInputGroupMessage" placeholder="Search for item">
              &nbsp;
              <b-button class="btn-sm" variant="danger">Search</b-button>
          </div>
          <br>            
            <div class="panelBody">
                <h1 class="panelTitle">
                    <img src="../assets/board.png" class="board"> Elite Items
                </h1>
                               <div id="latestItemsList">
                <ul class="list-unstyled row">
                    <li class="col-md-2" v-for="item in paginatedEliteItems">
                        <div class="latestItem">
                            <div class="latestItemInfo">
                                <span style="font-size: 13px">
                                    <img :src="require('../assets/hero/'+item.userImg)" style="height: 20px; margin-top: -6px">
                                    {{item.user}}
                                <span class="float-right">
                                <img src="../assets/gold.png" style="height: 25px; margin-top: -3px;">
                                {{item.price}}                                    
                                </span>                                    
                                </span><br>                                
                                <img v-if="item.type === 'Strength'" 
                                class="latestItemImg" :src="require('../assets/items/strength/'+item.img)">  
                                <span style="font-size: 13px; margin-left: 10px">
                                    {{item.title}} <br>
                                </span>                          
                                <div class="latestItemPrice">
                                <img v-if="item.type === 'Strength'" src="../assets/fist.png" style="height: 25px">
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
                </div>

                <h1 class="panelTitle" style="margin-top: -40px;">
                    <img src="../assets/board.png" class="board"> All Items
                </h1>   
                <div id="itemsList">
                <ul class="list-unstyled row">
                    <li class="col-md-2" v-for="item in paginatedItems" :key="item._id">
                        <div class="item">
                            <div class="itemInfo">
                                <span style="font-size: 13px">
                                    <img :src="require('../assets/hero/'+item.userImg)" style="height: 20px; margin-top: -6px">
                                    {{item.user}} 
                                <span class="float-right">
                                <img src="../assets/gold.png" style="height: 25px; margin-top: -3px;">
                                {{item.price}}                                    
                                </span>
                                </span><br>
                                
                                <img v-if="item.type === 'Strength'" class="itemImg" 
                                :src="require('../assets/items/strength/'+item.img)">  
                                <span style="font-size: 13px; margin-left: 10px">
                                    {{item.title}}
                                </span>                          
                                <div class="itemPrice">
                                <img v-if="item.type === 'Strength'" src="../assets/fist.png" style="height: 20px">
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
 
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
    data() {
        return {
            perPage: 12,
            elitePerPage: 6,
            currentPage: 1
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getStackExchangeItems();
            vm.getStackExchangeEliteItems();
        });
    },
    methods: {
        ...mapActions([
            'getStackExchangeItems',
            'getStackExchangeEliteItems'
        ])
    },
    computed: {
        ...mapGetters([
            'stackExchangeItems',
            'stackExchangeEliteItems'
        ]),
        paginatedItems() {
            return this.stackExchangeItems.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
        );
        },
        paginatedEliteItems() {
            return this.stackExchangeEliteItems.slice(
                (this.currentPage - 1) * this.perPage,
                this.currentPage * this.perPage
        );
        },        
        rows() {
            return this.stackExchangeItems.length;
        },
        eliteRows() {
            return this.stackExchangeEliteItems.length;
        }
    }
}
</script>

<style scoped>
#stackExchange {
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
}
#latestItemsList {
    padding: 15px;
}
.latestItem {
    background: #800303;
    padding: 5px 10px 10px 10px;
    border-radius: 5px;    
}
.latestItemImg {
    background: #ff4949;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0px 0px 7px 3px rgba(250,0,0);
}
.latestItemPrice {
    margin-top: 10px;
    background: #c00202;
    padding: 5px;
    border-radius: 5px;
    font-size: 13px;
}
#itemsList {
    padding: 15px;
}
#itemsList .col-md-2 {
    padding-bottom: 30px;
}
#latestItemsList .col-md-2 {
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
</style>
