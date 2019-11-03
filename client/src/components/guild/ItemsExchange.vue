<template>
  <div>
    <p><img src="../../assets/board.png" style="margin-top: -4px;"> Items Exchange</p>

    <div>
      <span class="item">
        <img src="../../assets/items/strength/W_Mace005.png">
        <span>Light Mace</span>
      </span>
      <span class="forItem">
        <img src="../../assets/items/strength/W_Sword017.png">
        <span>Desolator</span>
      </span>
      <span class="userExchange">
        <strong>Zlotte</strong>
      </span>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style scoped>
.item {
    background: #a900ff;
    border-radius: 5px;
    padding: 10px 20px 10px 10px;    
}
.forItem {
    background: #223196;
    padding: 10px;
    border-radius: 5px;
    margin-left: -5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
.userExchange {
    background: black;
    padding: 12px;
    border-radius: 5px;
    margin-left: -5px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
