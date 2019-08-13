<template>
  <div v-if="user.username === guild.leader">
    <b-button @click="announcementForm = !announcementForm">
      Post Annoucement
    </b-button>
    &nbsp;
    <b-button>
      Member Requests
    </b-button>
    <br>
    <div v-if="errors.length">
      <ul class="list-unstyled">
        <li class="alert alert-danger" v-for="error in errors">
          {{error}}
        </li>
      </ul>
    </div>
    <br>
    <div v-if="announcementForm" class="animated bounceIn col-md-4 mx-auto">
      <h5>
           New Announcement
      </h5>        
        <div id="annonBox">
      <br>
      <input v-model.trim="announcement" type="text" class="form-control" name="announcement"
        placeholder="Type announcement here...">
      <br>
      <b-button @click="newAnnoucement" variant="success">
        Post Announcement
      </b-button>
      &nbsp;
      <b-button @click="announcementForm = !announcementForm">
        Close Announcement
      </b-button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    props: ['user', 'guild'],
    data() {
        return {
        announcementForm: false,
        announcement: '',
        regex: /^([0-9]|[a-z])+([0-9a-z]+)$/i,
        errors: []
        }
    },
    methods: {
        newAnnoucement() {
            this.errors = [];
            if(this.announcement === '' || this.announcement.length < 1) {
               return this.errors.push('Announcement should contain letters and numbers.');
            }
            this.postGuildAnnouncement(this.announcement).then(data => {
                if(data.successMsg) {
                this.$bvToast.toast(`${data.successMsg}`, {
                    title: 'Notification',
                    variant: 'success',
                    solid: true,
                    autoHideDelay: 3000
                    }); 
                    const date = this.$dayjs().format('YYYY-MM-DD');
                    const newAnnon = this.announcement.charAt(0).toUpperCase() + this.announcement.slice(1);
                    this.guild.announcement = newAnnon;
                    this.guild.announcement_createdAt = date;
                    this.announcement = '';
                }
            });
        },
        ...mapActions([
            'postGuildAnnouncement'
        ])        
    }
}

</script>

<style scoped>
.panelTitle {
    background-color: #512597;
    height: 40px;
    margin-bottom: 0;
    padding: 13px;
    border: 1px solid #474747;
    border-radius: 2px;
    font-size: 13px;
}
#annonBox {
    background: #7337d2;
    padding: 10px;
    border-radius: 5px;
}
</style>
