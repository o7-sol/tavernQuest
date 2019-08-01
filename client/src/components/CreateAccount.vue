<template>
    <div>
    <span v-if="successMsg">
        <div id="successMsg">
            {{successMsg}}
            <br>
            <b-button variant="danger" @click="goHome">Sign In</b-button>
        </div>
    </span>
    <span v-if="errorMsg">
        <div id="errorMsg">
            {{errorMsg}}
        </div>
    </span>    
    <form v-if="successMsg.length < 1" @submit.prevent="createAccount" class="loginForm">
        <span v-if="errors.length">
            <ul>
                <li v-for="error in errors">
                    <br>
                    {{error}}
                </li>
                <li>
                <b-button variant="success" id="fixErrBtn" @click="fixError">Try Again</b-button>
                <br><br>
                </li>
            </ul>
        </span>
      <span v-if="!heroType">
      <label for="username">Username</label><br>
      <input v-model.trim="username" class="form-control" type="text" name="username" id="username" placeholder="Type your username"><br>
      <label for="password" id="labelPassword">Password</label><br>
      <input v-model.trim="password" class="form-control" type="password" name="password" id="password" placeholder="Type your password"><br>
      </span>
      <span v-else>
          <p style="color: white">Username: {{username}}</p>
      </span>
      <span v-if="password.length > 5 && username.length > 3" class="animated fadeInUp">
      <br>
      <label>Pick a class</label><br>
        <select v-model="heroType">
            <option disabled value="">Please select one</option>
            <option>Barbarian</option>
            <option>Necromancer</option>
            <option>Pirate</option>
        </select>
      </span> 
      <span v-if="heroType === 'Barbarian'">
        <br><br>
        <img class="animated flash" src="../assets/hero/barbarian.png">
        <br>
        <p>Hero Information</p>
        <span style="color: white">
            <p>
                <img src="../assets/fist.png" style="height: 25px; vertical-align: bottom">
                Strength: 20 / 100
            </p>
            <p>
                <img src="../assets/shoes.png" style="height: 25px; vertical-align: bottom">
                Agility: 10 / 100
            </p>
            <p>
                <img src="../assets/heart.png" style="height: 25px; vertical-align: bottom">
                Vitality: 10 / 100
            </p>
            <p>
                <img src="../assets/book.png" style="height: 25px; vertical-align: bottom">
                Intellect: 10 / 100
            </p>
        </span>
      </span>   
      <span v-if="heroType === 'Necromancer'">
        <br><br>
        <img class="animated flash" src="../assets/hero/necromancer.png">
        <br>
        <p>Hero Information</p>
        <span style="color: white">
            <p>
                <img src="../assets/fist.png" style="height: 25px; vertical-align: bottom">
                Strength: 10 / 100
            </p>
            <p>
                <img src="../assets/shoes.png" style="height: 25px; vertical-align: bottom">
                Agility: 10 / 100
            </p>
            <p>
                <img src="../assets/heart.png" style="height: 25px; vertical-align: bottom">
                Vitality: 10 / 100
            </p>
            <p>
                <img src="../assets/book.png" style="height: 25px; vertical-align: bottom">
                Intellect: 20 / 100
            </p>
        </span>               
      </span>      
      <span v-if="heroType === 'Pirate'">
        <br><br>
        <img class="animated flash" src="../assets/hero/pirate.png">
        <br>
        <p>Hero Information</p>  
        <span style="color: white">
            <p>
                <img src="../assets/fist.png" style="height: 25px; vertical-align: bottom">
                Strength: 10 / 100
            </p>
            <p>
                <img src="../assets/shoes.png" style="height: 25px; vertical-align: bottom">
                Agility: 10 / 100
            </p>
            <p>
                <img src="../assets/heart.png" style="height: 25px; vertical-align: bottom">
                Vitality: 20 / 100
            </p>
            <p>
                <img src="../assets/book.png" style="height: 25px; vertical-align: bottom">
                Intellect: 10 / 100
            </p>
        </span>        
      </span>        
      <span v-if="heroType">          
          <br><br>
        <b-button variant="success" class="animated infinite bounce delay-10s" type="submit">Create Account</b-button>
      </span>
    </form>        
    </div>
</template>

<script>
import API from './../api';
export default {
  name: 'createAccount',
  data() {
      return {
          username: '',
          password: '',
          errors: [],
          regex: /^([0-9]|[a-z])+([0-9a-z]+)$/i,
          heroType: '',
          successMsg: '',
          errorMsg: ''
      }
  },
  methods: {
      goHome() {
          this.$router.push({name: 'home'});
      },
      fixError() {
          this.heroType = !this.heroType;
      },
      createAccount() {
          this.errors = [];
          if(this.username.length < 4) {
              this.errors.push('Minimum length for username is 4 characters.');
          }
          else if(!this.username.match(this.regex)) {
              this.errors.push('Username should only contain letters and numbers.');
          }
          else if(!this.password.match(this.regex)) {
              this.errors.push('Password should only contain letters and numbers.');
          }
          else if(this.password.length < 6) {
              this.errors.push('Minimum length for password is 6 characters');
          } else {
              const payload = {
                  username: this.username,
                  password: this.password,
                  type: this.heroType
              }

              this.$store.dispatch('createAccount', payload).then(data => {
                  if(data.errorMsg) {
                      this.errorMsg = data.errorMsg;
                  }
                  this.successMsg = data.successMsg;
              });
          }
      }
  }
};
</script>

<style scoped>
.loginForm {
  background-color: #7d3cb1;
  width: 40%;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  border: 2px solid #171717;
  border-top: none;
  text-align: center;
}
label {
  color: white;
}
#labelPassword {
  padding-top: 10px;
}
input {
  background-color: #4e167b;
  border: 1px solid #333333;
  text-align: center;
  width: 70%;
  display: inline;
}
ul {
  list-style: none;
}
li {
  background-color: #de2c2c;
  color: white;
  margin-right: 2.5em;
}
select {
  padding: 10px;
}
#successMsg {
  width: 40%;
  margin: 0 auto;
  background-color: #05dc05;
  color: black;
  font-size: 16px;
  padding: 10px;
  text-align: center;
}
#errorMsg {
  width: 40%;
  margin: 0 auto;
  background-color: red;
  color: white;
  font-size: 16px;
  padding: 10px;
}
@media only screen and (max-width: 768px) {
  .loginForm {
    width: 100%;
  }
}
</style>
