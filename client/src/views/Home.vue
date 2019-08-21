<template>
  <div class="home">
    <div id="homeImages">
    <img src="../assets/tree2.png">&nbsp;
    <img src="../assets/house.png">&nbsp;
    <img src="../assets/tree1.png">
    </div>
    <br><br>
    <div class="panel-header">
      <h3>Enter Tavern</h3>
    </div>
    <form @submit.prevent class="loginForm">

      <span v-if="errors.length">
        <ul>
          <li v-for="error in errors">
            <br>
            {{error}}
            <br><br>
          </li>
        </ul>
      </span>

      <label for="username">Username</label><br>
      <input v-model.trim="username" class="form-control" type="text" name="username" id="username" placeholder="Type username..."><br>
      <label for="password" id="labelPassword">Password</label><br>
      <input v-model.trim="password" class="form-control" type="password" name="password" id="password" placeholder="Type password..."><br>
      <br>
      <b-button variant="success" @click="login" type="submit">Sign In</b-button>
      &nbsp;
      <b-button variant="danger" @click="goToSignup">Create Account</b-button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'home',
  data() {
    return {
      username: '',
      password: '',
      errors: [],
      regex: /^([0-9]|[a-z])+([0-9a-z]+)$/i,
    }
  },
  methods: {
    login() {
      this.errors = [];
      if(this.username.length < 1) {
        this.errors.push('Username is required field.');
      } else if (this.password.length < 1) {
        this.errors.push('Password is required field');
      } else if(!this.username.match(this.regex)) {
        this.errors.push('Username should only contain letters and numbers.');
      } else if(!this.password.match(this.regex)) {
        this.errors.push('Password should only contain letters and numbers.');
      } else {
        const payload = {
          username: this.username,
          password: this.password
        }
        this.$store.dispatch('authenticate', payload).then((data) => {
          this.$router.push('/game')
          if(data.error) {
            this.errors.push(data.error);
          }
          else if(data.errorMsg) {
            this.errors.push(data.errorMsg);
          }
        });
      }
    },
    goToSignup() {
      this.$router.push({name: 'signup'});
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
  width: 70%;
  text-align: center;
  display: inline;
}
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
ul {
  list-style: none;
}
li {
  background-color: #de2c2c;
  color: white;
  margin-right: 2.5em;
}
#homeImages {
  text-align: center;
  padding-top: 2em;
}
@media only screen and (max-width: 768px) {
  .loginForm {
    width: 100%;
  }
  .panel-header {
    width: 100%;
  }
}
</style>
