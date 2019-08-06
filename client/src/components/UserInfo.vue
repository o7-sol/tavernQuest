<template>
  <div id="userInfo" class="row">    
    <div class="d-flex flex-row">      
      <div class="p-2 flex-fill img-with-text">          
        <img :src="require('../assets/hero/'+user.heroImg)" style="margin-top: -0.5em;">
        <p>Zlotte<br>Level {{user.level}}</p>
      </div>
      <div class="p-2" style="min-width: 16%;">
        <table>
          <tbody style="vertical-align: bottom">
            <tr>
              <td>&nbsp;<img src="../assets/fist.png" style="height: 25px; vertical-align: text-top;"></td>
              <td>Strength&nbsp;</td>
              <td>{{user.strength}}&nbsp;/</td>
              <td>500</td>
            </tr>
            <tr>
              <td>&nbsp;<img src="../assets/shoes.png" style="height: 25px; vertical-align: text-top;"></td>
              <td>&nbsp;Agility</td>
              <td>{{user.agility}}&nbsp;/</td>
              <td>500</td>
            </tr>
            <tr>
              <td>&nbsp;<img src="../assets/heart.png" style="height: 25px; vertical-align: text-top;"></td>
              <td>Vitality</td>
              <td>{{user.vitality}}&nbsp;/</td>
              <td>500</td>
            </tr>
            <tr>
              <td>&nbsp;<img src="../assets/book.png" style="height: 25px; vertical-align: text-top;"></td>
              <td>Intellect</td>
              <td>{{user.intellect}}&nbsp;/</td>
              <td>500</td>
            </tr>
          </tbody>
        </table> 
                <b-progress :value="100" show-progress variant="danger">
                </b-progress>             
      </div>

      <div class="vl"></div>
      <div class="p-2 flex-fill userItems">
        <p>Inventory</p>
        <div class="itemsList">
          <span v-for="item in storedUserItems">
          <img v-if="item.strength" :src="require('../assets/items/strength/'+item.img)">
          <img v-if="item.agility" :src="require('../assets/items/agility/'+item.img)">
          <img v-if="item.vitality" :src="require('../assets/items/vitality/'+item.img)">
          <img v-if="item.intellect" :src="require('../assets/items/intellect/'+item.img)">
          </span>
        </div>
      </div>
      <div class="vl"></div>
      
     <div class="p-2" style="width: 830px;">
        <p>Tavern Pub</p>
        <ul class="list-unstyled chat">
          <li style="width: 541px">
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <li style="width: 541px">
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <li style="width: 541px">
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <li style="width: 541px">
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
        </ul>
          <label class="sr-only" for="inlineFormInputGroupMessage">Message</label>
          <div class="input-group" style="margin-top: -10px;">
            <div class="input-group-prepend">
              <div style="font-size: 13px;" class="input-group-text" id="sendBtn">Send</div>
            </div>
            <input style="font-size: 13px;" type="text" class="form-control"
              id="inlineFormInputGroupMessage" placeholder="Type message...">
          </div>        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    name: 'userInfo',
    data() {
        return {
            user: '',
            items: []
        }
    },
    created() {
        this.user = JSON.parse(this.$cookie.get('user'));
        this.getUserItems();
    },
    methods: {
      ...mapActions([
        'getUserItems'
      ])
    },
    computed: {
      ...mapGetters([
        'storedUserItems'
      ])
    }
}
</script>

<style scoped>
#userInfo {
    padding-left: 24px;
    padding-top: 9px;
    padding-bottom: 8px;
    background: #30007b;
    color: #D5C8FF;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    position: relative;
    max-height: 10.25rem;
    border-bottom: 2px solid #19022b;
}
.img-with-text {
    text-align: center;
}
.img-with-text p {
    background-color: #de1f1f;
    border: 2px solid white;
    border-top: none;    
}
.img-with-text img {
    display: block;
    margin: 0 auto;
    background: url('../assets/folk.png');
    padding: 20px;
    border: 2px solid white;
}
.userItems {
    min-width: 33%;
}
.vl {
    border-left: 3px solid #19022b;
    height: 144px;
}
.itemsBought {
    font-size: 12px;
    max-height: 150px;
}
.itemBought {
    height: 26px;
    image-rendering: pixelated;
}
#sendBtn {
    background: #04d004;
    color: black;
}
.chat {
    margin-top: -1em;
    height: 74px;
}
.chat li {
    font-size: 13px;
}
.item {
    background: black;
    padding: 5px;
    border-radius: 6px;
    margin-right: 4px;
    margin-bottom: 4px;
}
.itemsList {
  margin-top: -15px;
}
@media only screen and (max-width: 768px) {
    #userInfo {
         max-height: 15.25rem;
    }
    .userItems {
        width: 400px;
    }
    .chat {
        width: 400px;
    }
}
</style>
