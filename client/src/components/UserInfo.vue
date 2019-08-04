<template>
  <div id="userInfo" class="row">
    <div class="d-flex flex-row bd-highlight mb-3">
      <div class="p-2 img-with-text">
        <img :src="imagePath" style="margin-top: 0.3em;">
        <p>Zlotte</p>
      </div>
      <div class="p-2" style="margin-top: 0.6em;">
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
      </div>
      <div class="p-2 flex-fill" style="margin-top: 0.6em">
        <table>
          <tbody>
            <tr>
              <td>&nbsp;<img src="../assets/gold.png" style="height: 25px;"></td>
              <td>{{user.gold}}</td>
            </tr>
            <tr>
              <td><strong style="color: red">EXP</strong></td>
              <td>{{user.experience}}</td>
            </tr>
            <tr>
              <td>Health</td>
            </tr>
          </tbody>
        </table>
        <table style="width: 100%; margin-top: 5px;">
          <tbody>
            <tr>
              <td>
                <b-progress :value="100" show-progress variant="danger">
                </b-progress>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
      <div class="vl"></div>
      <div class="p-2 flex-fill userItems">
        <p>Items</p>

        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
        <img src="../assets/items/health/potion.png">
      </div>
      <div class="vl"></div>
      <div class="p-2" style="width: 50%;">
        <p>Tavern Pub</p>
        <ul class="list-unstyled chat">
          <li>
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <li>
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <li>
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <li>
            <span class="chatDate">2019-08-01 21:52</span>&nbsp;
            <span class="chatUsername" style="color: white">Zlotte:</span>
            &nbsp;<span class="chatMessage">Some lorem ipsum text flying
              in here. Cmon tell me something. sdfsdfsdfsdfsdf
            </span>
          </li>
          <label class="sr-only" for="inlineFormInputGroupMessage">Message</label>
          <div class="input-group" style="margin-top: 5px;">
            <div class="input-group-prepend">
              <div style="font-size: 13px;" class="input-group-text" id="sendBtn">Send</div>
            </div>
            <input style="font-size: 13px;" type="text" class="form-control"
              id="inlineFormInputGroupMessage" placeholder="Type message...">
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'userInfo',
    data() {
        return {
            user: ''
        }
    },
    created() {
        this.user = JSON.parse(this.$cookie.get('user'));
    },    
    computed: {
        imagePath: function () {
            return require('../assets/hero/'+this.user.heroImg);
        }
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
    width: 13%
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
}
.chat li {
    font-size: 13px;
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
