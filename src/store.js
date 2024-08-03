import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    processedFileUrl: null,
  },
  mutations: {
    SET_PROCESSED_FILE_URL(state, data) {
      const blob = new Blob([data], { type:data.type });
      this.state.processedFileUrl = URL.createObjectURL(blob)
    },
  },
  actions: {
    async getProcessedFile(selectedFile){
      const formData = new FormData();
      formData.append('file', selectedFile);
  
      try {
        const response = await axios.post('http://localhost:8080/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob', // Important to handle the binary data
        });
  
        // Convert byte response to Blob
        const blob = new Blob([response.data], { type: response.data.type });
        this.state.processedFileUrl = URL.createObjectURL(blob); // Create a URL for the Blob
  
        console.log('File uploaded successfully:', this.fileUrl);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    },
  },
});

export default store;