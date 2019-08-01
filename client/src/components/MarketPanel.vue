<template>
  <div class="col-md-4">
    <div class="panelBody">
      <h1 class="panelTitle">Market</h1>
      <ul class="list-unstyled latestMarket">
        <li>
          <span>2019-08-01 21:25</span><br>
          <img src="../assets/hero/barbarian.png" class="latestFightHero">
          &nbsp;<strong>Feknaz</strong>
          &nbsp;<span style="vertical-align: middle">bought</span>
          <img src="../assets/items/health/potion.png">
          <strong style="vertical-align: middle">Life Elixir</strong>
          &nbsp;<span style="vertical-align: middle">for</span>
          &nbsp;<strong style="vertical-align: middle">300</strong>
          <img src="../assets/gold.png" class="latestMarketGold">
        </li>
        <li>
          <span>2019-08-01 21:25</span><br>
          <img src="../assets/hero/barbarian.png" class="latestFightHero">
          &nbsp;<strong>Feknaz</strong>
          &nbsp;<span style="vertical-align: middle">bought</span>
          <img src="../assets/items/health/potion.png">
          <strong style="vertical-align: middle">Life Elixir</strong>
          &nbsp;<span style="vertical-align: middle">for</span>
          &nbsp;<strong style="vertical-align: middle">300</strong>
          <img src="../assets/gold.png" class="latestMarketGold">
        </li>
        <li>
          <span>2019-08-01 21:25</span><br>
          <img src="../assets/hero/barbarian.png" class="latestFightHero">
          &nbsp;<strong>Feknaz</strong>
          &nbsp;<span style="vertical-align: middle">bought</span>
          <img src="../assets/items/health/potion.png">
          <strong style="vertical-align: middle">Life Elixir</strong>
          &nbsp;<span style="vertical-align: middle">for</span>
          &nbsp;<strong style="vertical-align: middle">300</strong>
          <img src="../assets/gold.png" class="latestMarketGold">
        </li>
        <li>
          <span>2019-08-01 21:25</span><br>
          <img src="../assets/hero/barbarian.png" class="latestFightHero">
          &nbsp;<strong>Feknaz</strong>
          &nbsp;<span style="vertical-align: middle">bought</span>
          <img src="../assets/items/health/potion.png">
          <strong style="vertical-align: middle">Life Elixir</strong>
          &nbsp;<span style="vertical-align: middle">for</span>
          &nbsp;<strong style="vertical-align: middle">300</strong>
          <img src="../assets/gold.png" class="latestMarketGold">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style scoped>
.latestMarket {
    font-size: 13px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}
.latestMarket li {
    padding: 10px;
}
.latestMarketGold {
    height: 21px; 
    image-rendering: pixelated;   
    vertical-align: middle;
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
    border-radius: 3px!important;
    border: 1px solid #1d1d1d;
}

ul li:nth-child(2n+2) {  
  background: #06103c;
}
</style>
