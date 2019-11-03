<template>
  <div class="col-md-4">
    <p><img src="../../assets/board.png" style="margin-top: -4px;"> Chatroom</p>
    <ul id="chatRoom" class="list-unstyled">
      <li v-for="message in messages">
        <small class="msgDate">{{message.createdAt}} {{message.username}}</small><br>
        <small class="msgText">
          {{message.message}}
        </small>
        <br>
      </li>
    </ul>
    <div class="input-group" style="margin-top: 5px;">
      <div class="input-group-prepend">
        <div @click="sendMessage" style="font-size: 15px;" class="input-group-text" id="sendBtn">
          Send</div>
      </div>
      <input v-on:keyup="maxchars--" v-on:keyup.delete="maxchars++" v-model="message"
        style="font-size: 15px;" type="text" class="form-control" id="inlineFormInputGroupMessage"
        placeholder="Type message...">
    </div>
    <small>Chars left: {{maxchars}}</small>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    props: ['guild'],
    data() {
        return {
            socketMessages: [],
            message: '',
            maxchars: 100
        }
    },
    created() {
        this.getGuildMessages();
    },
    methods: {
        errorToast(text) {
            this.$bvToast.toast(text, {
                title: 'Notification',
                variant: 'warning',
                solid: true,
                autoHideDelay: 5000
            })
        },        
        sendMessage() {
            this.sendGuildMessage(this.message).then(data => {

                if(data && data.error) {
                    return this.errorToast(data.error);
                } 

                if(data && data.message) {
                    this.$socket.emit('guildMsgToServer', {
                        message: data.message
                    }); 
                }

            });           
        },
        ...mapActions([
            'sendGuildMessage',
            'getGuildMessages'
        ])
    },
    computed: {
        messages() {
            return this.guildMessages;
        },        
        ...mapGetters([
            'guildMessages'
        ])
    },
    sockets: {
        guildMsgToGuild: function(data) {
            if(data.message.guild === this.guild._id) {
                this.messages.unshift(data.message);
                this.maxchars = 100;
                this.message = '';
            }
        }
    },    
}

</script>

<style scoped>
.msgDate {
    font-weight: bold;
}
#chatRoom {
    height: 250px;
    overflow-y: scroll;
}
#sendBtn {
    background: #04d004;
    color: black;
}
#sendBtn:hover {
    background: #088c08;
    cursor: pointer;
}
</style>
