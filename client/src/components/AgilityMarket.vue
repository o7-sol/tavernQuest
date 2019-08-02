<template>
    <div id="market">
        <div class="col-md-12">
            <div class="panelBody">
                <h1 class="panelTitle"><img src="../assets/board.png" class="board"> Agility Market</h1>                
                <div class="marketCats row">
                    <p @click="toStrMarket" id="strMarket">
                        <img src="../assets/fist.png" class="skillImg">
                        Strength Market
                    </p>                        
                    <p id="aglMarket">
                        <img src="../assets/shoes.png" class="skillImg">
                        Agility Market
                    </p>                        
                    <p @click="toVitMarket" id="vitMarket">
                        <img src="../assets/heart.png" class="skillImg">
                        Vitality Market
                    </p>
                    <p @click="toIntMarket" id="intMarket">
                        <img src="../assets/book.png" class="skillImg">
                        Intellect Market
                    </p>
                </div>
                    <p class="text-center">
                        <img src="../assets/board.png" style="margin-top: -3px;">
                        &nbsp;<span style="color: red; font-weight: bold">TIP</span>:
                        This market is suited for characters which main ability is agility.
                    </p> 
                    <br>                           
                <div class="row">
                <div id="marketInfo" class="col-md-12">
                    <ul class="list-unstyled row">
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li> 
                        <li class="list-item col-4">
                            <p>
                            <span class="item">
                            <img src="../assets/items/strength/W_Axe002.png">
                            <strong>Severe Light</strong>
                            &nbsp;<img src="../assets/fist.png" style="height: 25px">
                            +15&nbsp;
                            <span class="itemBuyBtn">
                            <b-button variant="danger">
                            <img src="../assets/gold.png" class="buyBtnGold">
                            3000
                            </b-button>
                            </span>                            
                            </span>
                            </p>
                        </li>                                                                                                                                                                                                                                                                                                
                    </ul>
                </div>  
                </div>                                      
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'market',
    data() {
        return {
            bounce: ''
        }
    },
    methods: {
        toStrMarket() {
            this.$router.push({name: 'strengthMarket'});
        },
        toVitMarket() {
            this.$router.push({name: 'vitalityMarket'});
        },
        toIntMarket() {
            this.$router.push({name: 'intellectMarket'});
        }
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
  .skillImg {
      height: 35px;
      image-rendering: pixelated;
  }
  .marketCats {
      padding: 1em;
      padding-left: 29%;
  }
  #strMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #strMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;
  }  
  #aglMarket {
      padding: 4px;
      border-radius: 5px;
      background: #212f69;
  }
  #vitMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #vitMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;
  }  
  #intMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #intMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;
  }  
  #marketInfo {
      padding-left: 2em;
  }
  #marketInfo h1 {
      font-size: 1rem;
  }
  .item {
    background: #030615;
    padding: 14px;
    border: 1px solid #111525;
    border-radius: 5px;
  }
  .itemBuyBtn {
    background: #dc3545;
    padding: 14px;
    border-radius: 9px;
    margin-right: -20px;
    border-left: none;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .buyBtnGold {
    height: 25px;
    vertical-align: bottom;
  }
  .marketIntro {
    text-align: center;
    background: #030615;
    padding: 5px;
  }
</style>
