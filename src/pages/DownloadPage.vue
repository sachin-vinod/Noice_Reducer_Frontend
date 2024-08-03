<template>
    <div>
      <div>
        <a :href="processedFileUrl" :download="fileName" class="download-link">Download File</a>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  
  export default {
    name: 'DownloadPage',
    computed: {
      ...mapState(['processedFileUrl']),
    }
  };
  </script>
  
  <style scoped>
  body {
    background-color: #e8e8e8;
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>