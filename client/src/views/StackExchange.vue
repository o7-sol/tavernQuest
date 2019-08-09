<template>
    <div id="stackExchange">
        <div class="col-md-12">
            <div class="panelBody">
                <h1 class="panelTitle">
                    <img src="../assets/board.png" class="board"> Elite Items
                </h1>
                <ul class="list-unstyled row" id="latestItemsList">
                    <li class="col-md-2" v-for="index in 6">
                        <div class="latestItem">
                            <div class="latestItemInfo">
                                <span style="font-size: 13px">
                                    <img src="../assets/hero/necromancer.png" style="height: 20px; margin-top: -6px">
                                    Zlotte
                                </span><br>                                
                                <img class="latestItemImg" src="../assets/items/strength/sword1.png">  
                                <span style="font-size: 13px; margin-left: 10px">
                                    Challenger's Shield <br>
                                </span>                          
                                <div class="latestItemPrice">
                                <img src="../assets/fist.png" style="height: 25px">
                                +40 
                                <span class="float-right">
                                LVL 30    
                                <img src="../assets/gold.png" style="height: 25px">
                                2800
                                </span>
                                </div>
                            </div>
                        </div>
                    </li>                
                </ul>
                
          <div class="input-group col-md-4" style="margin: 0 auto">
            <input style="font-size: 13px;" type="text" class="form-control"
              id="inlineFormInputGroupMessage" placeholder="Search for item">
              &nbsp;
              <b-button class="btn-sm" variant="danger">Search</b-button>
          </div>
            <br>
                <h1 class="panelTitle">
                    <img src="../assets/board.png" class="board"> All Items
                </h1>   
                <ul class="list-unstyled row" id="itemsList">
                    <li class="col-md-2" v-for="index in 18" @click="buyItem">
                        <div class="item">
                            <div class="itemInfo">
                                <span style="font-size: 13px">
                                    <img src="../assets/hero/necromancer.png" style="height: 20px; margin-top: -6px">
                                    Zlotte
                                </span><br>
                                <img class="itemImg" src="../assets/items/strength/sword1.png">  
                                <span style="font-size: 13px; margin-left: 10px">
                                    Challenger's Shield
                                </span>                          
                                <div class="itemPrice">
                                <img src="../assets/fist.png" style="height: 25px">
                                +40 
                                <span class="float-right">
                                LVL 20
                                <img src="../assets/gold.png" style="height: 25px;">
                                2800
                                </span>
                                </div>
                            </div>
                        </div>
                    </li>                
                </ul>                             
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods: {
        buyItem() {
            console.log('asd')
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
</style>
