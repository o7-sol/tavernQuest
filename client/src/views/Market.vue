<template>
    <div id="market">
        <div class="col-md-12">
            <h1 class="panelTitle">Market</h1>
            <div class="panelBody row">
                <div class="col-md-3">
                    <img src="../assets/fist.png">
                    Strength Market
                </div>
                <div class="col-md-3">
                    <img src="../assets/shoes.png">
                    Agility Market
                </div>
                <div class="col-md-3">
                    <img src="../assets/heart.png">
                    Vitality Market
                </div>
                <div class="col-md-3">
                    <img src="../assets/book.png">
                    Intellect Market
                </div>                                                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'market'
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
  img {
      height: 50px;
      image-rendering: pixelated;
  }
</style>
