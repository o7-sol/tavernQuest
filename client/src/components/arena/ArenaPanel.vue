<template>
  <div class="col-md-4">
    <div class="panelBody">
      <h1 class="panelTitle"><img src="../../assets/board.png" class="board"> Arena</h1>
      <ul class="list-unstyled latestFights">
        <li class="row fight">
          <span class="col-md-3 text-center" style="padding-top: 10px;">
            <span style="color: #02ff02">WINNER</span><br>
            <img src="../../assets/hero/necromancer.png" class="latestFightHero"><br>
            Zlotte
          </span>
          <span class="col-md-6 text-center winGoods">
            2019-08-01 20:58<br>
            <img src="../../assets/gold.png" style="height: 25px;"> 300
            <br>
            <strong style="color: red">EXP</strong>&nbsp; 
            <span style="margin-right: 2px;">200</span>
          </span>
          <span class="col-md-3 text-center" style="padding-top: 10px;">
            <span style="color: red">LOSER</span>
            <br>
            <img src="../../assets/hero/barbarian.png" class="latestFightHero">
            Feknaz
          </span>
        </li>
        <li class="row fight">
          <span class="col-md-3 text-center" style="padding-top: 10px;">
            <span style="color: #02ff02">WINNER</span><br>
            <img src="../../assets/hero/necromancer.png" class="latestFightHero"><br>
            Zlotte
          </span>
          <span class="col-md-6 text-center winGoods">
            2019-08-01 20:58<br>
            <img src="../../assets/gold.png" style="height: 25px;"> 300
            <br>
            <strong style="color: red">EXP</strong>&nbsp; 
            <span style="margin-right: 2px;">200</span>
          </span>
          <span class="col-md-3 text-center" style="padding-top: 10px;">
            <span style="color: red">LOSER</span>
            <br>
            <img src="../../assets/hero/barbarian.png" class="latestFightHero">
            Feknaz
          </span>
        </li>
        <li class="row fight">
          <span class="col-md-3 text-center" style="padding-top: 10px;">
            <span style="color: #02ff02">WINNER</span><br>
            <img src="../../assets/hero/necromancer.png" class="latestFightHero"><br>
            Zlotte
          </span>
          <span class="col-md-6 text-center winGoods">
            2019-08-01 20:58<br>
            <img src="../../assets/gold.png" style="height: 25px;"> 300
            <br>
            <strong style="color: red">EXP</strong>&nbsp; 
            <span style="margin-right: 2px;">200</span>
          </span>
          <span class="col-md-3 text-center" style="padding-top: 10px;">
            <span style="color: red">LOSER</span>
            <br>
            <img src="../../assets/hero/barbarian.png" class="latestFightHero">
            Feknaz
          </span>
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
  .latestFights {
    font-size: 13px;
    padding: 10px;
    border-radius: 5px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .latestFights li {
    padding-bottom: 1.9px;
  }

  .latestFightHero {
    image-rendering: pixelated;
    height: 50px;
  }

  .latestFightGold {
    height: 21px;
    image-rendering: pixelated;
    vertical-align: top;
  }

  ul li:nth-child(2n+2) {
    background: #06103c;
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

  .winGoods {
    padding-top: 1.5em;
    padding-bottom: 2em;
  }

  .fight {
    margin-right: -10px;
    margin-left: -10px;
  }

</style>
