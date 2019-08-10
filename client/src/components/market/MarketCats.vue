<template>
  <div class="marketCats row">
    <p id="strMarket" @click="toStrMarket">
        <img src="../../assets/fist.png" class="skillImg">
        Strength Market
    </p>
    <p id="aglMarket" @click="toAglMarket">
        <img src="../../assets/shoes.png" class="skillImg">
        Agility Market
    </p>
    <p id="vitMarket" @click="toVitMarket">
        <img src="../../assets/heart.png" class="skillImg">
        Vitality Market
    </p>
    <p id="intMarket" @click="toIntMarket">
        <img src="../../assets/book.png" class="skillImg">
        Intellect Market
    </p>
  </div>
</template>

<script>
export default {
  methods: {
        toStrMarket() {
            this.$router.push({name: 'strengthMarket'});
        },
        toAglMarket() {
            this.$router.push({name: 'agilityMarket'});
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
