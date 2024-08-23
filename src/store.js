import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    processedFileUrl: null,
    fileName: ''
  },
  mutations: {
    SET_PROCESSED_FILE_URL(state, { url, name }) {
      state.processedFileUrl = url;
      state.fileName = name;
    },
  },
  actions: {
    async getProcessedFile({commit},selectedFile){
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await axios.post('http://localhost:8080/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob', // Important to handle the binary data
        });
        const blob = new Blob([response.data], { type:response.data.type });
        const url = URL.createObjectURL(blob);
       commit('SET_PROCESSED_FILE_URL',{url, name: selectedFile.name});
  
        console.log('File uploaded successfully:', this.fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
  },
});

export default store;