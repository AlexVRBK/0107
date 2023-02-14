<template>

  <div class="container">
    <router-view/>
  </div>

</template>

<script>


export default {
  setup() {
    
  },
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Arial,  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  max-width: 500px;
  background: #FFFFFF;
  margin: 0 auto;
  padding: 0 ;
}
.container {
   display: flex;
   flex-direction: column;
   gap: 20px;

   max-width: 450px;
    margin: 0 auto;
    padding: 0 ;
    background: #FFFFFF;
    
}


</style>
