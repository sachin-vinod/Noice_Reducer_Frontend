import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    processedFileUrl: null,
  },
  mutations: {
    SET_PROCESSED_FILE_URL(state, data) {
      const blob = new Blob([data], { type:data.type });
      state.processedFileUrl = URL.createObjectURL(blob)
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
  
       commit('SET_PROCESSED_FILE_URL',response.data);
  
        console.log('File uploaded successfully:', this.fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
  },
});

export default store;