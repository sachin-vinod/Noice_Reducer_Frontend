import { createRouter, createWebHistory } from 'vue-router';
import UploadPage from './pages/UploadPage.vue';
import DownloadPage from './pages/DownloadPage.vue';

const routes = [
  { path: '/', component: UploadPage, name: 'Upload' },
  { path: '/download', component: DownloadPage, name: 'Download' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
