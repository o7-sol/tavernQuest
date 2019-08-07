<template>
  <div id="userInfo" class="row">    
    <div class="d-flex flex-row">      
      <div class="p-2 flex-fill img-with-text">          
        <img :src="require('../assets/hero/'+user.heroImg)" style="margin-top: -0.5em;">
        <p>Zlotte<br>
        <span id="userLevel">Level {{user.level}}</span>
        </p>
      </div>
      <div class="p-2" style="min-width: 16%; margin-top: -4px;">
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
            <template v-if="item.strength">
            <img @click="itemInfo(item)" class="itemInInventory" :src="require('../assets/items/strength/'+item.img)">
            </template>
            <template v-if="item.agility">
            <img @click="itemInfo(item)" class="itemInInventory" :src="require('../assets/items/agility/'+item.img)">
            </template>
            <template v-if="item.vitality">
            <img @click="itemInfo(item)" class="itemInInventory" :src="require('../assets/items/vitality/'+item.img)">
            </template>
            <template v-if="item.intellect">
            <img @click="itemInfo(item)" class="itemInInventory" :src="require('../assets/items/intellect/'+item.img)">
            </template>            
          </span>
        </div>
      </div>
      <div class="vl"></div>
      
     <div class="p-2" style="width: 830px; margin-top: -4px;">
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

  <b-toast class="b-toaster b-toaster-top-center" id="my-toast" variant="secondary" solid no-auto-hide>
      <div slot="toast-title" class="d-flex flex-grow-1 align-items-baseline">
        <b-img blank blank-color="#ff5555" class="mr-2" width="12" height="12"></b-img>
        <strong class="mr-auto">Notice!</strong>
        <small class="text-muted mr-2">42 seconds ago</small>
      </div>
      <div class="text-left">
        <span class="selectedItemNoti">
        <template v-if="selectedItem.strength">
        <img class="selectedItemImage" :src="require('../assets/items/strength/'+selectedItem.img)">
        </template>
        <template v-if="selectedItem.agility">
        <img class="selectedItemImage" :src="require('../assets/items/agility/'+selectedItem.img)">
        </template>
        <template v-if="selectedItem.vitality">
        <img class="selectedItemImage" :src="require('../assets/items/vitality/'+selectedItem.img)">
        </template>
        <template v-if="selectedItem.intellect">
        <img class="selectedItemImage" :src="require('../assets/items/intellect/'+selectedItem.img)">
        </template> 
        <span>{{selectedItem.title}}</span>
        </span>

        <span class="selectedItemStats">
        <template v-if="selectedItem.strength">
        <img src="../assets/fist.png" style="height: 30px; image-rendering: pixelated">
        </template>
        <template v-if="selectedItem.agility">
        
        </template>
        <template v-if="selectedItem.vitality">
        
        </template>
        <template v-if="selectedItem.intellect">
        
        </template>  
        +{{selectedItem.power}}   
        </span>
      </div> 
    </b-toast>

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
            items: [],
            selectedItem: ''
        }
    },
    created() {
        this.user = JSON.parse(this.$cookie.get('user'));
        this.getUserItems();
    },
    methods: {
      itemInfo(item, index) {
        this.selectedItem = item;
        this.$bvToast.show('my-toast');
      },
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
    margin-top: -4px;
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
  margin-top: -32px;
}
#userLevel {
  background: black;
  padding-left: 13px;
  padding-right: 14px;
  padding-bottom: 3px;
  padding-top: 3px;
}
.itemInInventory {
  padding: 5px;
  background: black;
  border-radius: 5px;
  margin-top: 15px;
  margin-right: 15px;
}
.toast-body {
  text-align: center !important;
}
.selectedItemImage {
  padding: 5px;
  border-radius: 5px;
}
.selectedItemNoti {
    background: #7337d2;
    padding: 14px 10px 14px 0px;
    border-radius: 5px;
}
.selectedItemStats {
    background: #ff5555;
    padding: 14px;
    border-radius: 5px;
    margin-left: -3px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
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
