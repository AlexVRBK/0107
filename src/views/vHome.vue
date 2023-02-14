<template>
  <div class="home">
    <div class="container">
      <userPage />
      <listPost />
      <AddPost />
    </div>

  </div>
</template>

<script>
import userPage from '@/components/userPage';
import listPost from '@/components/listPost';
import AddPost from '@/components/AddPost';
export default {
  name: 'vHome',
  components: {
    userPage,
    listPost,
    AddPost
  }
}
</script>

<style scoped>
  
</style>