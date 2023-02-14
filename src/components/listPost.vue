<template>
  <div class="users">
    <div class="users_contact" v-for="user in allUsers" :key="user.id">
      <h2 class="users_contact-title">{{user.name}} </h2>
      <div class="users_contact-post">
        <p class="users_contact-post-text"> {{user.post}}</p>
      </div>
      
      
      
   
    </div>
</div> 
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: "UsersTable",
  methods: {
    ...mapActions(['fetchUsers', 'updateUser']),
    
  },
  computed: mapGetters(['allUsers']),
  created(){
    this.fetchUsers();
  }
};
</script>

<style lang="scss" scoped>
  a{
    color: #fff;
  }
  p{
    font-size: 20px;
    color: rgb(0, 0, 0);
  }
  .users{
    display: flex;
    flex-direction: column;
    gap: 20px;
    &_contact{
      text-align: left;
      &-post{
        padding-top: 26px;
        background-image: url(@/assets/post.png);
        box-shadow: 0px 4px 10px rgba(128, 128, 128, 0.1);



          &-text{
              font-weight: 400;
              font-size: 14px;
              line-height: 19px;
              padding-left: 17px;
              padding-bottom: 10px;
          }
      }
      &-title{
        font-weight: 700;
        font-size: 14px;
        line-height: 19px;
      }
    }
    
  }
  .card{
    width: 300px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px){

.users_contact{
  text-align: center;
  margin: 0 auto;
}
}
 
</style>