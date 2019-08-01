<template>
  <div class="home">
    <div id="homeImages">
    <img src="../assets/tree2.png">&nbsp;
    <img src="../assets/house.png">&nbsp;
    <img src="../assets/tree1.png">
    </div>
    <br><br>
    <div class="panel-header">
      <h3>Join Tavern</h3>
    </div>
    <app-create-account></app-create-account>
    <br><br><br>
  </div>
</template>

<script>
import CreateAccount from '../components/CreateAccount';
export default {
  name: 'signup',
  components: {
      appCreateAccount: CreateAccount
  }
};
</script>

<style scoped>
.panel-header {
  background: black;
  color: white;
  width: 40%;
  margin: 0 auto;
  border: 2px solid black;
  text-align: center;
}
.panel-header h3 {
  font-size: 1.3rem;
  padding-top: 10px;
}
#homeImages {
  text-align: center;
  padding-top: 2em;
}
@media only screen and (max-width: 768px) {
  .panel-header {
    width: 100%;
  }
}
</style>
