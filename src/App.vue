<template>
  <div id="app">
    <upload-page />
  </div>
</template>

<script>
import uploadPage from './pages/UploadPage.vue';

export default {
  name: 'App',
  components: {
    uploadPage,
  }
}
</script>

<style scoped>
#app {
  background-color: #e8e8e8;
  margin: 0;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
