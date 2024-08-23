<template>
  <div>
    <div>
      <a :href="processedFileUrl" :download="fileName" class="download" @click="logDownload">
        <span class="download-text">Download File</span>
        <span class="tooltip">{{ fileName === '' ? 'No file selected' : fileName }}</span>
      </a>
      <button class="download" @click="handleClick">
        Upload Another File
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'DownloadPage',
  computed: {
    ...mapState(['processedFileUrl', 'fileName']),
  },
  methods: {
    logDownload() {
      console.log('processedFileUrl:', this.processedFileUrl);
      console.log('fileName:', this.fileName);
      if (!this.processedFileUrl || !this.fileName) {
        alert('File URL or name is missing!');
      }
    },
    handleClick() {
      this.$router.push('/');
    }
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

.download {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  background: none;
  border: 0;
  box-sizing: border-box;
  margin: 1em;
  padding: 1em 2em;
  color: #039be5;
  background-color: #fff;
  font-size: inherit;
  font-weight: 700;
  position: relative;
  vertical-align: middle;
  border-radius: 4px;
  box-shadow: 0px 20px 30px -15px rgba(0, 0, 0, 0.226);
  cursor: pointer;
  outline: none;
}

.download-text {
  display: block;
}

.download::before, .download::after {
  box-sizing: inherit;
  border-radius: inherit;
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}

.download {
  transition: color 0.25s;
}

.download::before, .download::after {
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

.download::before {
  top: 0;
  left: 0;
}

.download::after {
  bottom: 0;
  right: 0;
}

.download:focus {
  color: #039be5;
}

.download:focus::before, .download:focus::after {
  width: 100%;
  height: 100%;
}

.download:focus::before {
  border-top-color: #039be5;
  border-right-color: #039be5;
  transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
}

.download:focus::after {
  border-bottom-color: #039be5;
  border-left-color: #039be5;
  transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
}

.download .tooltip {
  visibility: hidden;
  background-color: #039be5;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  z-index: 1;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  max-width: 200px;
  word-wrap: break-word;
}

.download .tooltip::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #039be5 transparent transparent transparent;
}

.download:hover:not(:focus) .tooltip {
  visibility: visible;
}
</style>
