<template>
    <div id="stackExchange">
        <div class="col-md-12">

        <app-my-items></app-my-items>

        <app-sell-item></app-sell-item>
        <br>
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

                <app-elite-items></app-elite-items>

                <h1 class="panelTitle" style="margin-top: -40px;">
                    <img src="../assets/board.png" class="board"> All Items
                </h1>   

                <app-all-items></app-all-items>
 
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from 'vuex';
import SellItem from '../components/stackExchange/SellItemStackExchange';
import AllItems from '../components/stackExchange/AllItemsStackExchange';
import EliteItems from '../components/stackExchange/EliteItems';
import MyItems from '../components/stackExchange/MyItems';

export default {
    data() {
        return {
            perPage: 12,
            elitePerPage: 6,
            currentPage: 1,
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
            'getStackExchangeEliteItems',
        ])
    },
    components: {
        appSellItem: SellItem,
        appAllItems: AllItems,
        appEliteItems: EliteItems,
        appMyItems: MyItems
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
</style>
