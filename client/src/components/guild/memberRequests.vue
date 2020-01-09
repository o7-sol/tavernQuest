<template>
<div class="gameScreen">
    <div class="col-md-12">
        <div class="panelBody">
        <h1 class="panelTitle"><img src="../../assets/board.png" class="board"> Member Requests</h1>
        <ul v-if="requests.length" class="list-unstyled">
            <li v-for="request in requests">
                <strong>{{request.username}}</strong>&nbsp;
                <button @click="approve(request.username)" class="btn btn-success">Approve</button>
                &nbsp;
                <button class="btn btn-danger">Decline</button>
            </li>    
        </ul> 
        <p class="text-center" style="padding: 5px" v-else>There are no member requests currently.</p> 
        </div>
    </div>  
</div> 
</template>

<script>
import { mapActions } from 'vuex';
export default {
    data() {
        return {
            requests: []
        }
    },
    created() {
        this.$store.dispatch('getGuildMemberRequests').then(data => {
            data.forEach(e => {
                this.requests.push(e);
            })
        });
    },
    methods: {
        ...mapActions(['approveMemberRequest']),
        approve(user) {
            this.approveMemberRequest(user).then(data => {
               const index = this.requests.findIndex(user => user.username === data.user)
               this.requests.splice(index, 1);

               const h = this.$createElement

                const vNodesMsg = h(
                'p',
                { class: ['text-center', 'mb-0'] },
                [
                    h('strong', {}, `${data.user} was approved successfully.`),
                ]
                );                

               this.$bvToast.toast([vNodesMsg], {
                title: 'Notification',
                variant: 'success',
                solid: true,
                autoHideDelay: 5000
                });  
            });
        }
    }
}
</script>

<style scoped>
  .panelTitle {
    color: #fff;
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
  ul {
      padding: 10px;
  }
</style>