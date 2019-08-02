<template>
  <div class="marketCats row">
    <p id="strMarket">
      <router-link to="/market/strength">
        <img src="../assets/fist.png" class="skillImg">
        Strength Market
      </router-link>
    </p>
    <p id="aglMarket">
      <router-link to="/market/agility">
        <img src="../assets/shoes.png" class="skillImg">
        Agility Market
      </router-link>
    </p>
    <p id="vitMarket">
      <router-link to="/market/vitality">
        <img src="../assets/heart.png" class="skillImg">
        Vitality Market
      </router-link>
    </p>
    <p id="intMarket">
      <router-link to="/market/intellect">
        <img src="../assets/book.png" class="skillImg">
        Intellect Market
      </router-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
  #strMarket a {
      color: white;
  }
  #strMarket a:hover {
      text-decoration: none;
      color: white;
  }
  #aglMarket {
      padding: 4px;
      border-radius: 5px;
      filter: grayscale(100%);
  }
  #aglMarket a {
      color: white;
  }
  #aglMarket a:hover {
      text-decoration: none;
      color: white;
  }  
  #aglMarket:hover {
      background: #212f69;
      cursor: pointer;
      filter: none;
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
  #vitMarket a {
      color: white;
  }
  #vitMarket a:hover {
      text-decoration: none;
      color: white;
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
  #intMarket a {
      color: white;
  }
  #intMarket a:hover {
      text-decoration: none;
      color: white;
  }   
</style>
