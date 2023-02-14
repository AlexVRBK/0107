<template>
  <div class="form">
    
      <form @submit="onSubmit">
        <div class="form_item">
          <div class="form_item-name">
            <label for="name"></label>
            <input id="name" type="text" v-model="form.name" required placeholder="Name" />
          </div>
          <div class="form_item-post">
            <label for="Your post"></label>
            <input id="post" type="text"  v-model="form.post" required  placeholder="Text"/>
          </div>
          </div>
          <button class="form_item-btn" type="submit" variant="primary">Send a message</button>
          
        </form>
    
   
    
   
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddPost",
  methods: {
    ...mapActions(["addUser"]),
    onSubmit(e) {
      e.preventDefault();
      const newUser = {
        name: this.form.name,
        post: this.form.post,
      };
      this.addUser(newUser);
      this.form.name = "";
      this.form.post = "";
    },
  },
  data() {
    return {
      form: {
        name: "",
        post: "",
      },
    };
  },
};
</script>

<style lang="scss" scoped>

.form {
  max-width: 489px;
  height: 191px;
  background: #F2F2F2;
   
  }
.form_item{
  background: #FFFFFF;
border: 1px solid #000000;
border-radius: 1px;
max-width: 447px;
height: 63px;
margin-top: 28px;
margin-bottom: 21px;
}
  
    
  
  .form_item-btn{
        width: 281px;
        height: 43px;
        background: #FDD639;
        border-radius: 23px;
        border: none;
        color: #333333;
        font-weight: 700;
        font-size: 16px;
        line-height: 21px;
      }
    

 @media (max-width: 480px){

.form{
  text-align: center;
  margin: 0 auto;
}
}

</style>