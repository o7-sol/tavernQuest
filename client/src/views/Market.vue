<template>
    <div id="market">
        <div class="col-md-12">
            <div class="panelBody">
                <h1 class="panelTitle"><img src="../assets/board.png" class="board"> Market</h1>
                <app-market-cats></app-market-cats>
                <div class="col-md-7">
                    <p class="text-center">
                        <img src="../assets/board.png" style="margin-top: -3px;">
                        &nbsp;<span style="color: red; font-weight: bold">TIP</span>:
                        At first buy items that best suit your character. You 
                        want to update your most important stats at first.
                    </p>
                </div>                
                <div class="row">
                <div id="marketInfo" class="col-md-8">
                    <h1>
                        <img src="../assets/scroll.png">
                        Latest Items
                    </h1>
                    <div class="row"> 
                    <div id="25" class="latestItemBody" @mouseover="bounceItemIcon(25)"
                    @mouseout="bounceOff(25)">
                    <img :class="bounce" class="latestItemIcon" src="../assets/items/strength/W_Spear014.png">
                    <p>Dragon Sword</p>
                    <p style="margin-left: 15%;">
                        <img class="latestItemPowerIcon" src="../assets/fist.png">
                        +15 
                    </p>
                    <b-button variant="danger">
                        <img src="../assets/gold.png" class="latestItemGold">
                        3510
                    </b-button>
                    </div>  
                    <div id="30" class="latestItemBody" @mouseover="bounceItemIcon(30)"
                    @mouseout="bounceOff(30)">
                    <img :class="bounce" class="latestItemIcon" src="../assets/items/strength/W_Spear014.png">
                    <p>Dragon Sword</p>
                    <p style="margin-left: 15%;">
                        <img class="latestItemPowerIcon" src="../assets/fist.png">
                        +15 
                    </p>
                    <b-button variant="danger">
                        <img src="../assets/gold.png" class="latestItemGold">
                        3510
                    </b-button>
                    </div>
                    <div id="30" class="latestItemBody" @mouseover="bounceItemIcon(30)"
                    @mouseout="bounceOff(30)">
                    <img :class="bounce" class="latestItemIcon" src="../assets/items/strength/W_Spear014.png">
                    <p>Dragon Sword</p>
                    <p style="margin-left: 15%;">
                        <img class="latestItemPowerIcon" src="../assets/fist.png">
                        +15 
                    </p>
                    <b-button variant="danger">
                        <img src="../assets/gold.png" class="latestItemGold">
                        3510
                    </b-button>
                    </div>    
                    <div id="30" class="latestItemBody" @mouseover="bounceItemIcon(30)"
                    @mouseout="bounceOff(30)">
                    <img :class="bounce" class="latestItemIcon" src="../assets/items/strength/W_Spear014.png">
                    <p>Dragon Sword</p>
                    <p style="margin-left: 15%;">
                        <img class="latestItemPowerIcon" src="../assets/fist.png">
                        +15 
                    </p>
                    <b-button variant="danger">
                        <img src="../assets/gold.png" class="latestItemGold">
                        3510
                    </b-button>
                    </div>    
                    <div id="30" class="latestItemBody" @mouseover="bounceItemIcon(30)"
                    @mouseout="bounceOff(30)">
                    <img :class="bounce" class="latestItemIcon" src="../assets/items/strength/W_Spear014.png">
                    <p>Dragon Sword</p>
                    <p style="margin-left: 15%;">
                        <img class="latestItemPowerIcon" src="../assets/fist.png">
                        +15 
                    </p>
                    <b-button variant="danger">
                        <img src="../assets/gold.png" class="latestItemGold">
                        3510
                    </b-button>
                    </div>                                                                                                                                                                                    
                    </div> 
                    <br>
                </div>  
                <div class="col-md-4" id="latestPurchases">
                    <h1>
                        <img src="../assets/scroll.png"> 
                        Latest Discounts
                    </h1>
                    <table>
                        <tbody>
                            <tr>
                                <td><img src="../assets/items/strength/W_Axe012.png"> <strong>Severe Light</strong> </td>
                                <td>&nbsp;<span style="color: red; text-decoration: line-through;">500</span> 
                                now is only for<img src="../assets/gold.png" class="purchaserGoldIcon"> <span style="color: lime">300</span>
                                &nbsp;<span class="discountImage">
                                <img src="../assets/fist.png" style="height: 25px"> +15
                                </span>
                                </td>
                            </tr>
                            <br>
                            <tr>
                                <td><img src="../assets/items/strength/W_Axe012.png"> <strong>Severe Light</strong> </td>
                                <td>&nbsp;<span style="color: red; text-decoration: line-through;">500</span> 
                                now is only for<img src="../assets/gold.png" class="purchaserGoldIcon"> <span style="color: lime">300</span>
                                &nbsp;<span class="discountImage">
                                <img src="../assets/fist.png" style="height: 25px"> +15
                                </span>
                                </td>
                            </tr>
                            <br>
                            <tr>
                                <td><img src="../assets/items/strength/W_Axe012.png"> <strong>Severe Light</strong> </td>
                                <td>&nbsp;<span style="color: red; text-decoration: line-through;">500</span> 
                                now is only for<img src="../assets/gold.png" class="purchaserGoldIcon"> <span style="color: lime">300</span>
                                &nbsp;<span class="discountImage">
                                <img src="../assets/fist.png" style="height: 25px"> +15
                                </span>
                                </td>
                            </tr> 
                            <br>
                            <tr>
                                <td><img src="../assets/items/strength/W_Axe012.png"> <strong>Severe Light</strong> </td>
                                <td>&nbsp;<span style="color: red; text-decoration: line-through;">500</span> 
                                now is only for<img src="../assets/gold.png" class="purchaserGoldIcon"> <span style="color: lime">300</span>
                                &nbsp;<span class="discountImage">
                                <img src="../assets/fist.png" style="height: 25px"> +15
                                </span>
                                </td>
                            </tr>                                                                                                                                                                                                                           
                        </tbody>
                    </table>
                </div>
                </div>                                      
            </div>
        </div>
    </div>
</template>

<script>
import MarketCats from '../components/MarketCats';
export default {
    name: 'market',
    data() {
        return {
            bounce: ''
        }
    },
    methods: {
        bounceItemIcon(id) {
            this.bounce = 'animated bounceIn';
        },
        bounceOff(id) {
            this.bounce = '';
        }
    },
    components: {
        appMarketCats: MarketCats
    }
}
</script>

<style scoped>
  #market {
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
    border-radius: 3px !important;
    border: 1px solid #1d1d1d;
  }
  #marketInfo {
      padding-left: 2em;
  }
  #marketInfo h1 {
      font-size: 1rem;
  }
  .latestItemIcon {
      background: #030615;
      padding: 8px;
      border-radius: 19px;
      margin-left: 18%;
  }
  .latestItemPowerIcon {
      height: 25px;
      image-rendering: pixelated;
      vertical-align: bottom;
  }
  .latestItemGold {
      height: 25px; 
      vertical-align: bottom;
      image-rendering: pixelated;
  }
  .latestItemBody {
      background: #7337d2;
      padding: 17px;
      border-radius: 9px;
      margin-left: 2%;
      margin-top: 2%;
  }
  .latestItemBody:hover {
      background-color: #7a00ff
  }
  #latestPurchases h1 {
      font-size: 1rem;
      padding-bottom: 12px;
  }
  .purchaserHero {
      height: 30px;
      image-rendering: pixelated;
  }
  .purchaserGoldIcon {
      height: 30px;
      margin-top: -3px;
      image-rendering: pixelated;
  }
  .discountImage {
      background: #7337d2;
      padding: 13px;
      border-radius: 38px;
  }
</style>
