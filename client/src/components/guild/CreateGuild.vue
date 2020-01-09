<template>
  <div class="gameScreen">
      <div class="panelBody">
          <h1 class="panelTitle">
              <img src="../../assets/board.png" class="board"> Create Guild
          </h1>
          
         <div v-if="errors.length > 0">
             <ul class="list-unstyled">
                 <li class="alert alert-danger" v-for="error in errors">
                     {{error.text}}
                 </li>
             </ul>
         </div>

         <div class="col-md-4 mx-auto">
             <div class="form-group">
                 <label for="title">Guild Title</label>
                 <input v-model.trim="title" type="text" name="title" id="title" class="form-control">
             </div>
             <div class="form-group">
                 <label for="requiredLevel">Requred Level</label>
                 <br>
                 <small>Required minimal level to join your guild.</small>
                 <input v-model.trim="level" type="number" min="1" max="100" name="level" id="level" class="form-control">
             </div>
             <b-button @click="createGuild()" variant="danger">
                 Create Guild
            </b-button>    
            <br>     
         </div>

      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            title: '',
            level: '',
            regex: /^([0-9]|[a-z])+([0-9a-z]+)$/i,
            errors: []
        }
    },
    methods: {
        createGuild() {
            this.errors = [];
            if(!this.title.match(this.regex)) {
                this.errors.push({text: 'Title should only contain letters and numbers without spaces.'})
            } else if(this.title.length < 5 || this.title.length > 15) {
                this.errors.push({text: 'Title length cannot be less than 5 characters'
                +' and cannot be more than 15 characters'});
            } else {
                const payload = {title: this.title, reqLevel: this.level}
                this.getGuildTitle(payload).then(data => {
                    if(data.success) {
                        this.$router.push('/guild');     
                        this.$cookie.set('guildCreated', 'Guild was created successfully', { expires: '5s' });                  
                    }
                    if(data.errMsg) {
                       this.errors.push({text: data.errMsg});
                    }
                });
            }
        },
        ...mapActions([
            'getGuildTitle'
        ])
    }
}
</script>

<style scoped>
.panelTitle {
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
</style>